'use client'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="min-h-screen bg-bg flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <h1 className="font-display font-semibold text-3xl mb-4">Something went wrong</h1>
        <p className="text-muted mb-8">
          An unexpected error occurred. Please try again or return home.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="h-11 px-8 rounded-lg bg-primary text-black font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="h-11 px-8 rounded-lg border border-border hover:border-primary text-text font-medium text-sm transition-colors inline-flex items-center"
          >
            Go Home
          </Link>
        </div>
      </div>
    </section>
  )
}
