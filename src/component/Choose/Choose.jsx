import styles from "./Choose.module.scss";
const Choose = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Why Choose Us</h1>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <div className={styles.containerImg}>
            <img
              className={styles.contentImg}
              src="/public/diri.jpg"
              alt="avatar"
            ></img>
          </div>
          <div className={styles.contentTitle}>
            <h3>Bali</h3>
          </div>
          <div className={styles.contentDesc}>
            <p>
              Beaches that beckon, adventures that thrill, and smiles that last
              a lifetime. Fun with Fun Bali Holiday is guaranteed!
            </p>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.containerImg}>
            <img
              className={styles.contentImg}
              src="/public/diri.jpg"
              alt="avatar"
            ></img>
          </div>
          <div className={styles.contentTitle}>
            <h3>Legal</h3>
          </div>
          <div className={styles.contentDesc}>
            <p>
              Discover hidden adventures, experience local charm, and create
              unforgettable memories. Fun Bali Holiday makes it budget-friendly.
            </p>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.containerImg}>
            <img
              className={styles.contentImg}
              src="/public/diri.jpg"
              alt="avatar"
            ></img>
          </div>
          <div className={styles.contentTitle}>
            <h3>Unleash your Bali fun!</h3>
          </div>
          <div className={styles.contentDesc}>
            <p>
              Discover hidden adventures, experience local charm, and create
              unforgettable memories. Fun Bali Holiday makes it budget-friendly.
            </p>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.containerImg}>
            <img
              className={styles.contentImg}
              src="/public/diri.jpg"
              alt="avatar"
            ></img>
          </div>
          <div className={styles.contentTitle}>
            <h3>Escape the ordinary</h3>
          </div>
          <div className={styles.contentDesc}>
            <p>
              Dive into Bali's authentic charm, pristine beaches, and endless
              adventures. Fun Bali Holiday creates affordable experiences you'll
              never forget.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Choose;
