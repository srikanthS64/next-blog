import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Srikanth here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Choose the best blogging platform to showcase your content.</h1>
          <p className={styles.postDesc}>
          Blogging is far from dead. As the last 12 months of Twitter—sorry, X—drama have shown, allowing a social media platform to control your audience has risks. If you want a platform where you can share your thoughts properly and keep control of things, it's impossible to beat a blog. Plus, you can always share your blog posts on social media.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
