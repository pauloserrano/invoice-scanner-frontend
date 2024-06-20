"use client"

import { SignInButton, Nav, NavMobile, MenuButton } from "@/components"
import { NavContextProvider } from "@/contexts/NavContext"
import Link from "next/link"
import { useEffect, useState } from "react"

interface HeaderProps {
  currentUser: any
}

export const Header = ({ currentUser }: HeaderProps) => {
  const [active, setActive] = useState<boolean>(false);

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
        <SignInButton currentUser={currentUser} />
        <MenuButton />
      </header>
    </NavContextProvider>
  )
}
