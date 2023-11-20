import React from 'react'
import style from '@/app/[slug]/singlePage.module.css'
import Image from 'next/image'
import Menu from '@/components/Menu/Menu'
import Comments from '@/components/comments/Comments'
const page = () => {
    return (
        <div className={style.container}>
            <div className={style.infoContainer}>
                <div className={style.textContainer}>
                    <h1 className={style.title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                    <div className={style.user}>
                        <div className={style.userImageContainer}>
                            <Image src="/p1.jpeg" alt='' fill className={style.avatar} />
                        </div>
                        <div className={style.userTextContainer}>
                            <span className={style.username}>sri kanth</span>
                            <span className={style.userdate}>16.11.2023</span>
                        </div>
                    </div>
                </div>
                <div className={style.imageContainer}>
                    <Image src="/p3.jpeg" alt='' fill className={style.image} />
                </div>
            </div>
            <div className={style.content}>
                <div className={style.post}>
                    <div className={style.description}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid maxime accusamus mollitia minus similique quod fugiat quia nobis illum fuga? Laborum placeat laboriosam, in illo vitae totam vero quos doloribus.
                        </p>
                        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid maxime accusamus mollitia minus similique quod fugiat quia nobis illum fuga? Laborum placeat laboriosam, in illo vitae totam vero quos doloribus.
                        </p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid maxime accusamus mollitia minus similique quod fugiat quia nobis illum fuga? Laborum placeat laboriosam, in illo vitae totam vero quos doloribus.
                        </p>
                    </div>
                    <Comments />
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default page
