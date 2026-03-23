import { NextResponse } from 'next/server'

export const revalidate = 60 // cache for 60 seconds

export async function GET() {
  try {
    const res = await fetch('https://metals.live/api/latest', {
      next: { revalidate: 60 },
    })

    if (!res.ok) throw new Error(`metals.live responded with ${res.status}`)

    const data = await res.json()

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
      },
    })
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to fetch metal prices' },
      { status: 502 }
    )
  }
}
