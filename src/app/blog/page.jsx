import React from 'react'
import style from '@/app/blog/blogPage.module.css'
import CardList from '@/components/cardList/CardList'
import Menu from '@/components/Menu/Menu'
const page = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Style Blog</h1>
      <div className={style.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  )
}

export default page
