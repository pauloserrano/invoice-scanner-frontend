"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'

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

export const Nav = () => {
  const pathname = usePathname()

  return (
    <nav className='flex gap-6'>
      {links.map((link, id) => (
        <Link 
          key={id}
          href={link.path}
          className={`
            text-lg
            ${pathname === link.path && "active"} 
          `}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}
