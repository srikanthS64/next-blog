import React from 'react'
import style from '@/components/card/card.module.css'
import Image from 'next/image'
const card = () => {
    return (
        <div className={style.continer}>
            <div className={style.imageContainer}>
                <Image src="/p1.jpeg" alt='' fill />
            </div>
            <div className={style.textContainer}>
                
            </div>
        </div>
    )
}

export default card
