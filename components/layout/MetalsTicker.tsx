'use client'
import { useEffect, useState, useRef } from 'react'
import { TrendingUp, TrendingDown, Minus, RefreshCw } from 'lucide-react'

interface Metal {
  symbol: string
  label:  string
  price:  number | null
  prev:   number | null
}

const METAL_CONFIG = [
  { symbol: 'XAU', label: 'Gold'      },
  { symbol: 'XAG', label: 'Silver'    },
  { symbol: 'XPT', label: 'Platinum'  },
  { symbol: 'XPD', label: 'Palladium' },
]

// Fallback prices shown before API responds (approximate market values)
const FALLBACK: Metal[] = [
  { symbol: 'XAU', label: 'Gold',      price: 2340.00, prev: null },
  { symbol: 'XAG', label: 'Silver',    price: 27.85,   prev: null },
  { symbol: 'XPT', label: 'Platinum',  price: 986.00,  prev: null },
  { symbol: 'XPD', label: 'Palladium', price: 1043.00, prev: null },
]

function formatPrice(symbol: string, price: number): string {
  if (symbol === 'XAG') {
    return `$${price.toFixed(2)}`
  }
  return `$${price.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`
}

function getChange(price: number | null, prev: number | null) {
  if (!price || !prev || prev === 0) return { pct: '—', direction: 'flat' as const }
  const pct = ((price - prev) / prev) * 100
  if (pct > 0.005)  return { pct: pct.toFixed(2),  direction: 'up'   as const }
  if (pct < -0.005) return { pct: Math.abs(pct).toFixed(2), direction: 'down' as const }
  return { pct: '0.00', direction: 'flat' as const }
}

export default function MetalsTicker() {
  const [metals, setMetals]           = useState<Metal[]>(FALLBACK)
  const [loading, setLoading]         = useState(true)
  const [refreshing, setRefreshing]   = useState(false)
  const [lastUpdated, setLastUpdated] = useState('')
  const prevPrices = useRef<Record<string, number>>({})

  async function fetchPrices() {
    try {
      const res = await fetch('/api/metals', {
        signal: AbortSignal.timeout(10000),
      })
      if (!res.ok) throw new Error('API error')
      const data = await res.json()
      if (data.error) throw new Error(data.error)

      const updated: Metal[] = METAL_CONFIG.map(({ symbol, label }) => ({
        symbol,
        label,
        price: data[symbol] ?? null,
        prev:  prevPrices.current[symbol] ?? null,
      }))

      // Save current prices as "prev" for next refresh cycle
      METAL_CONFIG.forEach(({ symbol }) => {
        if (data[symbol]) prevPrices.current[symbol] = data[symbol]
      })

      setMetals(updated)

      if (data.timestamp) {
        const d = new Date(data.timestamp * 1000)
        setLastUpdated(
          d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) +
          ' ' + d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        )
      }
    } catch (e) {
      // silently keep existing prices on error
      console.error('MetalsTicker fetch error:', e)
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  useEffect(() => {
    fetchPrices()
    // Refresh every 10 minutes (matches free plan daily data — no point hitting more)
    const t = setInterval(() => { setRefreshing(true); fetchPrices() }, 10 * 60 * 1000)
    return () => clearInterval(t)
  }, [])

  // Double the array for seamless infinite loop
  const items = [...metals, ...metals]

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[201] bg-bg-secondary border-b border-primary/15 overflow-hidden"
      style={{ height: '36px' }}
    >
      <div className="flex items-center h-full">

        {/* LEFT — "Live Prices" label */}
        <div className="flex-shrink-0 flex items-center gap-2 px-4 border-r border-primary/15 h-full bg-bg-secondary z-10">
          <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-primary animate-pulse flex-shrink-0" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary whitespace-nowrap">
            Live Prices
          </span>
        </div>

        {/* TICKER */}
        <div className="flex-1 overflow-hidden relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-bg-secondary to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-bg-secondary to-transparent z-10 pointer-events-none" />

          <div
            className="flex items-center whitespace-nowrap"
            style={{ animation: 'ticker-scroll 30s linear infinite', width: 'max-content' }}
            onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
            onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'running')}
          >
            {items.map((metal, i) => {
              const { pct, direction } = getChange(metal.price, metal.prev)
              return (
                <span key={`${metal.symbol}-${i}`} className="inline-flex items-center gap-2 px-5">
                  {/* Separator */}
                  {i > 0 && <span className="w-px h-3 bg-border mr-1 flex-shrink-0" />}

                  {/* Label */}
                  <span className="text-[11px] font-semibold text-muted tracking-wide">
                    {metal.label.toUpperCase()}
                  </span>

                  {/* Price */}
                  <span className="text-[11px] font-semibold text-text tabular-nums">
                    {loading || !metal.price ? '–––' : formatPrice(metal.symbol, metal.price)}
                  </span>

                  {/* Change — only shown after first refresh computes prev */}
                  {!loading && metal.prev && (
                    <span className={`inline-flex items-center gap-0.5 text-[10px] font-medium tabular-nums
                      ${direction === 'up' ? 'text-green-400' : direction === 'down' ? 'text-red-400' : 'text-muted'}`}
                    >
                      {direction === 'up'   && <TrendingUp   className="w-2.5 h-2.5" />}
                      {direction === 'down' && <TrendingDown className="w-2.5 h-2.5" />}
                      {direction === 'flat' && <Minus        className="w-2.5 h-2.5" />}
                      {pct}%
                    </span>
                  )}

                  <span className="text-[9px] text-muted/40 tracking-widest">/oz</span>
                </span>
              )
            })}
          </div>
        </div>

        {/* RIGHT — timestamp + refresh button */}
        <div className="flex-shrink-0 flex items-center gap-2 px-3 border-l border-primary/15 h-full bg-bg-secondary">
          {lastUpdated && (
            <span className="hidden lg:block text-[9px] text-muted/50 tracking-widest whitespace-nowrap">
              {lastUpdated}
            </span>
          )}
          <button
            onClick={() => { setRefreshing(true); fetchPrices() }}
            aria-label="Refresh metal prices"
            className="text-muted/40 hover:text-primary transition-colors"
          >
            <RefreshCw className={`w-2.5 h-2.5 ${refreshing ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
