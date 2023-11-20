import React from 'react'
import style from '@/components/pagination/pagination.module.css'
const pagination = () => {
  return (
    <div className={style.container}>
      <button className={style.button}>Previous</button>
      <button className={style.button}>Next</button>
    </div>
  )
}

export default pagination
