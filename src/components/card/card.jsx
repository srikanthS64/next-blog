import React from 'react'
import style from '@/components/card/card.module.css'
import Image from 'next/image'
import Link from 'next/link'
const card = () => {
    return (
        <div className={style.container}>
            <div className={style.imageContainer}>
                <Image src="/p1.jpeg" alt='' fill />
            </div>
            <div className={style.textContainer}>
                <div className={style.detail}>
                    <span className={style.date}>15-11-2023 - </span>
                    <span className={style.category}>CULTURE</span>
                </div>
                <Link href="/">
                    <h1>Choose the best blogging platform to showcase your content.</h1>
                </Link>
                <p className={style.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum vel voluptates quo qui nam doloribus quasi eum perspiciatis distinctio, eligendi tempore necessitatibus aspernatur, harum saepe? Quia voluptate commodi excepturi repellat!</p>
                <Link href="/" className={style.link}>Read More</Link>
            </div>
        </div>
    )
}

export default card
