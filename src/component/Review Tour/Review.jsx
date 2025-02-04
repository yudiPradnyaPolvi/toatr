import styles from "./Review.module.scss";
const Review = () => {
  return (
    <div className={styles.container}>
      <h1>Our Review</h1>
      <div className={styles.content}>
        <div className={styles.reviews}>
          <h3>EXCELLENT</h3>
          <img className={styles.star} src="/public/five star.png"></img>
          <p>Based on 140 reviews</p>
        </div>
        <div className={styles.card}>
          <div className={styles.title}>
            <div className={styles.imgreviewer}>
              <img
                className={styles.reviewer}
                src="../../../public/diri.jpg"
              ></img>
            </div>
            <div className={styles.name}>
              <h4> Test</h4>
            </div>
          </div>
          <div className={styles.description}>
            <p>
              I had the most magical experience of my life in bali. I have been
              to many places, but BALI, I will never forget.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.title}>
            <div className={styles.imgreviewer}>
              <img
                className={styles.reviewer}
                src="../../../public/diri.jpg"
              ></img>
            </div>
            <div className={styles.name}>
              <h4> Test</h4>
            </div>
          </div>
          <div className={styles.description}>
            <p>
              From the first moment that Nyoman picked us up at the airport we
              felt comfortable.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.title}>
            <div className={styles.imgreviewer}>
              <img
                className={styles.reviewer}
                src="../../../public/diri.jpg"
              ></img>
            </div>
            <div className={styles.name}>
              <h4> Test</h4>
            </div>
          </div>
          <div className={styles.description}>
            <p>
              Kami sekeluarga merasa sangat senang mengikuti program tour ini.
              Dengan mengikuti program ini, membuat liburan saya lebih
              terstruktur untuk tempat-tempat apa saja yang harus di kunjungi.
              Terima kasih utk momen yg tak terlupakan ini
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Review;
