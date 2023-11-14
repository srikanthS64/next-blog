"use client"

import React, { useState } from 'react'
import style from '@/components/authLinks/authLinks.module.css'
import Link from 'next/link';
const AuthLinks = () => {

  const [open, setOpen] = useState(false)

  // temporary
  const status = "notauthentication";
  return (
    <>
      {status === "notauthentication" ? (
        <Link href="/login" className={style.link}>Login</Link>
      ) : (
        <>
          <Link href="/write" className={style.link}>Write</Link>
          <span className={style.Links}>Logout</span>
        </>
      )}
      <div className={style.burger} onClick={() => setOpen(!open)}>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
      </div>
      {open && (
        <div className={style.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notauthentication" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={style.Links}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default AuthLinks
