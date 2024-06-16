"use client"

import useSWR from "swr"

export const useFetch = <T = any> (url: string, config?: RequestInit) => {
  const res = useSWR<T>(url, (url: string) => (
    fetch(process.env.NEXT_PUBLIC_DB_BASE_URL + url, config).then(res => res.json())
  ))

  return res
}
