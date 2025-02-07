import styles from "./Reasons.module.scss";
const Reasons = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ReasonsContainer}>
        <div className={styles.image}>
          <img className={styles.imgContent} src="/public/kitten.jpeg"></img>
        </div>
        <div className={styles.content}>
          <h2>Need more customized tour?</h2>
          <p>Let's build together your tour based on your prefrences</p>
          <div className={styles.contact}>
            <img className={styles.imgcontact} src="/public/wa.png"></img>
            <p>2313131</p>
          </div>
          <div className={styles.contact}>
            <img className={styles.imgcontact} src="/public/email.png"></img>
            <p>adada@adasd.com</p>
          </div>
          <div className={styles.contact}>
            <img className={styles.imgcontact} src="/public/map.png"></img>
            <p>taman jimbaran</p>
          </div>
          <div className={styles.btnContainer}>
            <a href="../Contact">
              <button className={styles.buttonContact}>Contact Us</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reasons;
