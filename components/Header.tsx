"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { NavContextProvider } from "@/contexts/NavContext"
import { AuthContainer, Nav, NavMobile, MenuButton } from "@/components"

export const Header = () => {
  const [active, setActive] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <NavContextProvider>
      <header className={`
        flex items-center justify-between gap-8 px-8 w-full h-[70px] sticky top-0 z-10
        ${active ? "bg-[#030315]" : "bg-transparent"}
      `}>
        <h1 className="font-alexBrush text-[32px]">
          <Link href="/">Logo</Link>
        </h1>
        <Nav containerStyles="hidden xl:flex items-center gap-x-8"/>
        <NavMobile />
        <AuthContainer />
        <MenuButton />
      </header>
    </NavContextProvider>
  )
}
