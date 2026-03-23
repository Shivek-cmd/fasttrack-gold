import { NextResponse } from 'next/server'

// Cache for 10 minutes — free plan gives daily rates anyway
export const revalidate = 600

const API_KEY = process.env.METAL_PRICE_API_KEY || 'f5139d18bb18b843d70e427552c4a2f9'
const METALS  = 'XAU,XAG,XPT,XPD' // Gold, Silver, Platinum, Palladium

export async function GET() {
  try {
    const url = `https://api.metalpriceapi.com/v1/latest?api_key=${API_KEY}&base=USD&currencies=${METALS}`

    const res = await fetch(url, {
      next: { revalidate: 600 },
    })

    if (!res.ok) {
      throw new Error(`metalpriceapi responded with ${res.status}`)
    }

    const data = await res.json()

    if (!data.success) {
      throw new Error(`API error: ${data.error?.info || 'Unknown error'}`)
    }

    // data.rates contains:
    // { XAU: 0.000538, XAG: 0.036, XPT: 0.00101, XPD: 0.000958,
    //   USDXAU: 1856.9, USDXAG: 27.75, USDXPT: 986.1, USDXPD: 1043.2 }
    // USDXAU etc. = price in USD per troy oz — exactly what we need

    const rates = data.rates as Record<string, number>

    const prices = {
      XAU: rates['USDXAU'] ?? (rates['XAU'] ? 1 / rates['XAU'] : null),
      XAG: rates['USDXAG'] ?? (rates['XAG'] ? 1 / rates['XAG'] : null),
      XPT: rates['USDXPT'] ?? (rates['XPT'] ? 1 / rates['XPT'] : null),
      XPD: rates['USDXPD'] ?? (rates['XPD'] ? 1 / rates['XPD'] : null),
      timestamp: data.timestamp,
    }

    return NextResponse.json(prices, {
      headers: {
        'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=1200',
      },
    })
  } catch (err) {
    console.error('Metals API error:', err)
    return NextResponse.json(
      { error: 'Failed to fetch metal prices' },
      { status: 502 }
    )
  }
}
