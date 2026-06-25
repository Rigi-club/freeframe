'use client'

import { useEffect } from 'react'

/**
 * Sets the browser tab title. Appends " – Studio" suffix.
 * Pass null/undefined to reset to default "Studio".
 */
export function usePageTitle(title: string | null | undefined) {
  useEffect(() => {
    document.title = title ? `${title} – Studio` : 'Studio'
    return () => { document.title = 'Studio' }
  }, [title])
}
