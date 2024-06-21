"use client"

import { useContext } from "react"
import { NavContext } from "@/contexts/NavContext"

export const useNavContext = () => {
  return useContext(NavContext)
}
