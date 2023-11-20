import React from 'react'
import style from '@/components/Menu/menu.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Menupost from '../menuPost/MenuPost'
import MenuCategories from '../menuCategories/MenuCategories'
const Menu = () => {
  return (
    <div className={style.container}>
      <h2 className={style.subtitle}>{"What's hot"}</h2>
      <h1 className={style.title}>Most Popular</h1>
      <Menupost withImage={false}/>

      <h2 className={style.subtitle}>Discover by topic</h2>
      <h1 className={style.title}>Categories</h1>
      <MenuCategories />
      <h2 className={style.subtitle}>Chosen by the editor</h2>
      <h1 className={style.title}>Editors Pick</h1>
      <Menupost withImage={true}/>
    </div>
  )
}

export default Menu
