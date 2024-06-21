"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useNavContext } from '@/hooks/useNavContext'

export const navLinks = [
  {
    path: "/",
    name: "Home"
  },
  {
    path: "/invoices",
    name: "Invoices"
  },
  {
    path: "/profile",
    name: "Profile"
  },
]

interface NavProps {
  links?: { path: string, name: string }[]
  containerStyles?: string
  linkStyles?: string
  children?: React.ReactNode
}

export const Nav = ({ containerStyles, linkStyles, links=navLinks, children }: NavProps) => {
  const pathname = usePathname()
  const { setIsOpen } = useNavContext()

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
      {children}
    </nav>
  )
}
