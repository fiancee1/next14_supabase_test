import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './mode-toggle'
import AuthButton from './AuthButton'

export default function Navbar() {
  return (
    <div>
      <div className='max-w-7xl mx-auto px-4  flex justify-between item-center border-b'>
        <Link href='/' className='py-4'>
          Logo
        </Link>
        <div className='flex items-center gap-x-8'>
          <Link href='/notes'>Notes</Link>
        </div>
        <div className='flex items-center gap-x-4'>
          <ModeToggle />
          <AuthButton />
        </div>
      </div>
    </div>
  )
}
