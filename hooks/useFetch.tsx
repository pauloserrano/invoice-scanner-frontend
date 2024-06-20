"use client"

import useSWR from "swr"

export const useFetch = <T = any> (url: string, config?: RequestInit) => {
  return useSWR<T>(url, async (url: string) => {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_DB_BASE_URL + url, config)
      return await res.json()
    
    } catch (error: any) {
      throw new Error(error)
    }
  })
}
