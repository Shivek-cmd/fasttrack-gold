'use client'
import { useEffect, useState, useRef } from 'react'
import { TrendingUp, TrendingDown, Minus, RefreshCw } from 'lucide-react'

interface Metal {
  name: string
  symbol: string
  price: number
  prev: number
}

const METAL_LABELS: Record<string, { label: string; short: string }> = {
  XAU: { label: 'Gold',      short: 'Au'  },
  XAG: { label: 'Silver',    short: 'Ag'  },
  XPT: { label: 'Platinum',  short: 'Pt'  },
  XPD: { label: 'Palladium', short: 'Pd'  },
}

// Fallback prices shown before API loads
const FALLBACK: Metal[] = [
  { name: 'Gold',      symbol: 'XAU', price: 2340.00, prev: 2335.00 },
  { name: 'Silver',    symbol: 'XAG', price: 27.85,   prev: 27.90   },
  { name: 'Platinum',  symbol: 'XPT', price: 986.00,  prev: 980.00  },
  { name: 'Palladium', symbol: 'XPD', price: 1043.00, prev: 1038.00 },
]

function formatPrice(symbol: string, price: number): string {
  if (symbol === 'XAG') return `$${price.toFixed(2)}`
  return `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

function formatChange(price: number, prev: number) {
  if (!prev || prev === 0) return { pct: '0.00', positive: null }
  const pct = ((price - prev) / prev) * 100
  return {
    pct: Math.abs(pct).toFixed(2),
    positive: pct > 0.005 ? true : pct < -0.005 ? false : null,
  }
}

export default function MetalsTicker() {
  const [metals, setMetals]       = useState<Metal[]>(FALLBACK)
  const [loading, setLoading]     = useState(true)
  const [lastUpdated, setLastUpdated] = useState('')
  const [refreshing, setRefreshing]   = useState(false)
  const prevRef = useRef<Record<string, number>>({})

  async function fetchPrices() {
    try {
      const res = await fetch('https://metals.live/api/latest', {
        cache: 'no-store',
        signal: AbortSignal.timeout(6000),
      })
      if (!res.ok) throw new Error('API error')
      const data = await res.json()

      const keys = ['XAU', 'XAG', 'XPT', 'XPD'] as const
      const updated: Metal[] = keys
        .filter((k) => data[k] !== undefined)
        .map((k) => ({
          name:   METAL_LABELS[k].label,
          symbol: k,
          price:  Number(data[k]),
          prev:   prevRef.current[k] || Number(data[k]),
        }))

      // Store as new prev for next refresh
      keys.forEach((k) => { if (data[k]) prevRef.current[k] = Number(data[k]) })

      if (updated.length > 0) setMetals(updated)

      const now = new Date()
      setLastUpdated(
        now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      )
    } catch {
      // silently keep existing prices
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  useEffect(() => {
    fetchPrices()
    const interval = setInterval(() => {
      setRefreshing(true)
      fetchPrices()
    }, 60_000)
    return () => clearInterval(interval)
  }, [])

  // Duplicate array for seamless infinite marquee
  const items = [...metals, ...metals]

  return (
    <div className="fixed top-0 left-0 right-0 z-[201] bg-bg-secondary border-b border-primary/15 overflow-hidden"
      style={{ height: '36px' }}
    >
      <div className="flex items-center h-full">

        {/* ── Left label — fixed ── */}
        <div className="flex-shrink-0 flex items-center gap-2 px-4 border-r border-primary/15 h-full bg-bg-secondary z-10">
          <span className="hidden sm:flex w-1.5 h-1.5 rounded-full bg-primary animate-pulse flex-shrink-0" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary whitespace-nowrap">
            Live Prices
          </span>
        </div>

        {/* ── Scrolling ticker ── */}
        <div className="flex-1 overflow-hidden relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-bg-secondary to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-bg-secondary to-transparent z-10 pointer-events-none" />

          <div
            className="flex items-center gap-0 whitespace-nowrap"
            style={{
              animation: 'ticker-scroll 28s linear infinite',
              width: 'max-content',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
            onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'running')}
          >
            {items.map((metal, i) => {
              const { pct, positive } = formatChange(metal.price, metal.prev)
              return (
                <span
                  key={`${metal.symbol}-${i}`}
                  className="inline-flex items-center gap-2 px-6"
                >
                  {/* Separator dot */}
                  {i > 0 && (
                    <span className="w-px h-3 bg-border mr-2 flex-shrink-0" />
                  )}

                  {/* Metal name */}
                  <span className="text-[11px] font-semibold text-muted tracking-wide">
                    {metal.name.toUpperCase()}
                  </span>

                  {/* Price */}
                  <span className="text-[11px] font-semibold text-text tabular-nums">
                    {loading ? '––––' : formatPrice(metal.symbol, metal.price)}
                  </span>

                  {/* Change */}
                  {!loading && (
                    <span
                      className={`inline-flex items-center gap-0.5 text-[10px] font-medium tabular-nums ${
                        positive === true
                          ? 'text-green-400'
                          : positive === false
                          ? 'text-red-400'
                          : 'text-muted'
                      }`}
                    >
                      {positive === true ? (
                        <TrendingUp className="w-2.5 h-2.5" />
                      ) : positive === false ? (
                        <TrendingDown className="w-2.5 h-2.5" />
                      ) : (
                        <Minus className="w-2.5 h-2.5" />
                      )}
                      {pct}%
                    </span>
                  )}

                  {/* Unit */}
                  <span className="text-[9px] text-muted/50 tracking-widest">
                    /oz
                  </span>
                </span>
              )
            })}
          </div>
        </div>

        {/* ── Right — timestamp + refresh ── */}
        <div className="flex-shrink-0 flex items-center gap-2 px-3 border-l border-primary/15 h-full bg-bg-secondary">
          {lastUpdated && (
            <span className="hidden md:block text-[9px] text-muted/60 tracking-widest whitespace-nowrap">
              {lastUpdated}
            </span>
          )}
          <button
            onClick={() => { setRefreshing(true); fetchPrices() }}
            aria-label="Refresh prices"
            className="text-muted/40 hover:text-primary transition-colors"
          >
            <RefreshCw
              className={`w-2.5 h-2.5 ${refreshing ? 'animate-spin' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Ticker keyframe */}
      <style>{`
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
