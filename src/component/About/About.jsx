import React from "react";
import styles from "./About.module.scss";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutTitle}>
          <h4>Fun Bali Holiday:</h4>
          <h2>Where Paradise Meets Your Perfect Adventure</h2>
        </div>
        <div className={styles.aboutDesc}>
          <p>
            Fun Bali Holiday isn’t just a travel agency, it’s your key to
            unlocking the magic of Bali. We’re a team of passionate travel
            enthusiasts who go beyond booking flights and hotels. We believe in
            crafting personalized experiences that ignite your soul and leave
            you with a smile that won’t fade.
          </p>
          <p>
            Bali’s diverse tapestry beckons: pristine beaches for
            sun-worshippers, lush rainforests teeming with adventure, ancient
            temples steeped in spirituality, and vibrant villages overflowing
            with artistic flair. We’ll help you navigate this incredible island,
            uncovering hidden gems and immersing you in the authentic Balinese
            culture.
          </p>
        </div>
      </div>
      <div className={styles.aboutImg}>
        <img
          className={styles.imgContents}
          src="/public/pemandangan.jpeg"
          alt="logo"
        ></img>
      </div>
    </div>
  );
}

export default About;
