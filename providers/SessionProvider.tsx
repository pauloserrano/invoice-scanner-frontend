"use client"

import { SessionProvider } from 'next-auth/react'

export const SessionContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      { children }
    </SessionProvider>
  )
}
