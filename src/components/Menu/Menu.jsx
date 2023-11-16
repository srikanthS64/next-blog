import React from 'react'
import style from '@/components/Menu/menu.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Menupost from '../menuPost/MenuPost'
const Menu = () => {
  return (
    <div className={style.container}>
      <h2 className={style.subtitle}>{"What's hot"}</h2>
      <h1 className={style.title}>Most Popular</h1>
      <Menupost withImage={false}/>

      <h2 className={style.subtitle}>Discover by topic</h2>
      <h1 className={style.title}>Categories</h1>
      
      <div className={style.categoryList}>
        <Link href="/blog?cat=style" className={`${style.categoryItem} ${style.style}`}>Style</Link>
        <Link href="/blog?cat=style" className={`${style.categoryItem} ${style.fashion}`}>Fashion</Link>
        <Link href="/blog?cat=style" className={`${style.categoryItem} ${style.food}`}>Food</Link>
        <Link href="/blog?cat=style" className={`${style.categoryItem} ${style.travel}`}>Travel</Link>
        <Link href="/blog?cat=style" className={`${style.categoryItem} ${style.coding}`}>Coding</Link>
      </div>

      <h2 className={style.subtitle}>Chosen by the editor</h2>
      <h1 className={style.title}>Editors Pick</h1>
      <Menupost withImage={true}/>
    </div>
  )
}

export default Menu
