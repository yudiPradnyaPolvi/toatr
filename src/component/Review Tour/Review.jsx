import styles from "./Review.module.scss";
const Review = () => {
  return (
    <div className={styles.container}>
      <h1>Our Review</h1>
      <div className={styles.content}>
        <div className={styles.reviews}>
          <h3>EXCELLENT</h3>
          <img className={styles.star} src="/public/five star.png"></img>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it dto make a type specimen book.
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it dto make a type specimen book.
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it dto make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Review;
