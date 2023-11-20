import React from 'react'
import style from '@/components/comments/comments.module.css'
import Link from 'next/link'
import Image from 'next/image'
const Comments = () => {
    const status = "authenticated"
    return (
        <div className={style.container}>
            <h1 className={style.title}>Comments</h1>
            {status === "authenticated" ? (
                <div className={style.write}>
                    <textarea placeholder='Write a Comment...' className={style.input} />
                    <button className={style.button}>Send</button>
                </div>
            ) : (
                <Link href="/login">Login to write a comment</Link>
            )}
            <div className={style.comments}>
                <div className={style.comment}>
                    <div className={style.user}>
                        <Image
                            src="/p2.jpg" alt=''
                            width={50}
                            height={50}
                            className={style.image}
                        />
                        <div className={style.userInfo}>
                            <span className={style.username}>Jhon Doe</span>
                            <span className={style.date}>16.11.2023</span>
                        </div>
                    </div>
                    <p className={style.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className={style.comments}>
                <div className={style.comment}>
                    <div className={style.user}>
                        <Image
                            src="/p2.jpg" alt=''
                            width={50}
                            height={50}
                            className={style.image}
                        />
                        <div className={style.userInfo}>
                            <span className={style.username}>Jhon Doe</span>
                            <span className={style.date}>16.11.2023</span>
                        </div>
                    </div>
                    <p className={style.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, earum neque dignissimos eaque deleniti recusandae doloremque deserunt. Excepturi consequatur consectetur adipisci, soluta modi distinctio totam nulla! Illum quo asperiores non.</p>
                </div>
            </div>
            <div className={style.comments}>
                <div className={style.comment}>
                    <div className={style.user}>
                        <Image
                            src="/p2.jpg" alt=''
                            width={50}
                            height={50}
                            className={style.image}
                        />
                        <div className={style.userInfo}>
                            <span className={style.username}>Jhon Doe</span>
                            <span className={style.date}>16.11.2023</span>
                        </div>
                    </div>
                    <p className={style.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, earum neque dignissimos eaque deleniti recusandae doloremque deserunt. Excepturi consequatur consectetur adipisci, soluta modi distinctio totam nulla! Illum quo asperiores non.</p>
                </div>
            </div>
            <div className={style.comments}>
                <div className={style.comment}>
                    <div className={style.user}>
                        <Image
                            src="/p2.jpg" alt=''
                            width={50}
                            height={50}
                            className={style.image}
                        />
                        <div className={style.userInfo}>
                            <span className={style.username}>Jhon Doe</span>
                            <span className={style.date}>16.11.2023</span>
                        </div>
                    </div>
                    <p className={style.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    )
}

export default Comments
