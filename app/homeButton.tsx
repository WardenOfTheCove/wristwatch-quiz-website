import Image from 'next/image'
import Link from 'next/link'
import favicon from './favicon.ico'
import React from 'react'

export default function IconButton() {
  return(
    <Link href='https://wardenofthecove-github-io.vercel.app/' target='_blank' rel='noopener noreferrer'>
      <button className="p-3 hover:cursor-pointer">
        <Image src={favicon} width={35} height={35} alt="button to home website"/>
      </button>
    </Link>
  );
}

