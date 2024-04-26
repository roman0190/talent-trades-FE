import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div className='flex gap-12'>
        <Link href="/home/1">post 1</Link>
        <Link href="home/2">post 2</Link>
        <Link href="home/3">post 3</Link>
        <Link href="home/4">post 4</Link>
        <Link href="home/5">post 5</Link>
    </div>
  )
}
