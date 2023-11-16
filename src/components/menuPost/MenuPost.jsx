import React from 'react'
import style from '@/components/menuPost/menuPost.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Menupost = ({ withImage }) => {
  return (
    
    <div className={style.items}>
        <Link href="/" className={style.item}>
          { withImage && (<div className={style.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={style.image} />
          </div>)}
          <div className={style.textContainer}>
            <span className={`${style.category} ${style.travel}`}>Travel</span>
            <h3 className={style.postTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
            <div className={style.detail}>
              <span className={style.username}>John Doe</span>
              <span className={style.date}> - 16.11.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={style.item}>
          { withImage && (<div className={style.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={style.image} />
          </div>)}
          <div className={style.textContainer}>
            <span className={`${style.category} ${style.culture}`}>Culture</span>
            <h3 className={style.postTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
            <div className={style.detail}>
              <span className={style.username}>John Doe</span>
              <span className={style.date}> - 16.11.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={style.item}>
         { withImage && (<div className={style.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={style.image} />
          </div>)}
          <div className={style.textContainer}>
            <span className={`${style.category} ${style.coding}`}>Coding</span>
            <h3 className={style.postTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
            <div className={style.detail}>
              <span className={style.username}>John Doe</span>
              <span className={style.date}> - 16.11.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={style.item}>
          { withImage && (<div className={style.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={style.image} />
          </div>)}
          <div className={style.textContainer}>
            <span className={`${style.category} ${style.food}`}>Food</span>
            <h3 className={style.postTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
            <div className={style.detail}>
              <span className={style.username}>John Doe</span>
              <span className={style.date}> - 16.11.2023</span>
            </div>
          </div>
        </Link>
      </div>
  )
}

export default Menupost
