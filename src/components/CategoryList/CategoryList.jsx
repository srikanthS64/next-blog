import React from 'react'
import style from '@/components/CategoryList/categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'
const CategoryList = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Popular Categories</h1>
      <div className={style.categories}>
        <Link href="/blog?cat=style" className={`${style.category} ${style.style}`}>
          <Image src="/style.png"
            alt=''
            width={32}
            height={32}
            className={style.image} />
          style
        </Link>
        <Link href="/blog?cat=style" className={`${style.category} ${style.style}`}>
          <Image src="/fashion.png"
            alt=''
            width={32}
            height={32}
            className={style.image} />
          fashion
        </Link>
        <Link href="/blog?cat=style" className={`${style.category} ${style.style}`}>
          <Image src="/food.png"
            alt=''
            width={32}
            height={32}
            className={style.image} />
          food
        </Link>
        <Link href="/blog?cat=style" className={`${style.category} ${style.style}`}>
          <Image src="/Travel.png"
            alt=''
            width={32}
            height={32}
            className={style.image} />
          Travel
        </Link>
        <Link href="/blog?cat=style" className={`${style.category} ${style.style}`}>
          <Image src="/Culture.png"
            alt=''
            width={32}
            height={32}
            className={style.image} />
          Culture
        </Link>
        <Link href="/blog?cat=style" className={`${style.category} ${style.style}`}>
          <Image src="/Coding.png"
            alt=''
            width={32}
            height={32}
            className={style.image} />
          Coding
        </Link>
      </div>
    </div>
  )
}

export default CategoryList
