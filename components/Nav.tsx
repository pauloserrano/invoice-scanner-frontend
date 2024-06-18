import Link from 'next/link'
import React from 'react'

export const Nav = () => {
  return (
    <nav className='flex gap-4'>
      <Link href={"/"} className='transition-colors hover:text-blue-500'>
        Home
      </Link>  
      
      <Link href={"/dashboard"} className='transition-colors hover:text-blue-500'>
        Dashboard
      </Link>  
    </nav>
  )
}
