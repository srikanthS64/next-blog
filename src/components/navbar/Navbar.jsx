import React from 'react'
import style from "@/components/navbar/Navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'
const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.social}>
        <Image src="/facebook.png" alt='facebook' width={24} height={24} />
        <Image src="/instagram.png" alt='facebook' width={24} height={24} />
        <Image src="/youtube.png" alt='facebook' width={24} height={24} />
        <Image src="/twiter.png" alt='facebook' width={24} height={24} />
      </div>
      <div className={style.Logo}>Social Blog</div>
      <div className={style.Links}>
        <ThemeToggle />
        <Link href="/" className={style.link}>Homepage</Link>
        <Link href="/" className={style.link}>Category</Link>
        <Link href="/" className={style.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar
