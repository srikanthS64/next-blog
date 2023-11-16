import React from 'react'
import style from '@/components/cardList/cardList.module.css'
import Image from 'next/image'
import Card from '@/components/card/card'
const CardList = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Recent Posts</h1>
      <div className={style.posts}>
        <div className={style.post}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default CardList
