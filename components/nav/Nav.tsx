"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavContext } from '@/contexts/NavContext'
import { useContext } from 'react'

const links = [
  {
    path: "/",
    name: "Home"
  },
  {
    path: "/invoices",
    name: "My Invoices"
  },
  {
    path: "/profile",
    name: "Profile"
  },
]

interface NavProps {
  containerStyles?: string
  linkStyles?: string
}

export const Nav = ({ containerStyles, linkStyles }: NavProps) => {
  const pathname = usePathname()
  const { setIsOpen } = useContext(NavContext)

  return (
    <nav className={`${containerStyles || "flex gap-6"}`}>
      {links.map((link, id) => (
        <Link 
          key={id}
          href={link.path}
          onClick={() => setIsOpen(false)}
          className={`
            text-lg border-b-2 border-transparent cursor-pointer
            ${pathname === link.path && "border-accent"} 
            ${linkStyles}
          `}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}
