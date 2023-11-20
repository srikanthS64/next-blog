import React from 'react'
import style from '@/components/cardList/cardList.module.css'
import Card from '@/components/card/card'
import Pagination from'@/components/pagination/Pagination'
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
    <Pagination />
    </div>
  )
}

export default CardList
