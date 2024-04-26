import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <div className='flex justify-around '>
        <Link href='/home'>Home</Link>
        <Link href='/dashboard'>Dashboard</Link>
        <Link href='/signUp'>signUp</Link>
        <Link href='/signIn'>signIn</Link>
        <Link href='/logout'>Logout</Link>
        
    </div>
  )
}
