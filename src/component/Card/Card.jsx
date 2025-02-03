// import {
//   Card,
//   CardBody,
//   CardTitle,
//   CardSubtitle,
//   CardText,
//   Button,
// } from "reactstrap";
import styles from "./Card.module.scss";
const CustomCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Popular Trips</h3>
        <h1> Explore Popular Trips </h1>
        <p>Get started with handpicked top rated trips.</p>
      </div>
      <div className={styles.content}>
        <div className={styles.card}>
          <img src="kitten.jpeg"></img>

          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              <h2>Nusa Penida Tour: Mix East & West Area</h2>
              <div className={styles.cardDescription}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="card-button">
                <button className={styles.cardButton}>Read More</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img src="kitten.jpeg"></img>

          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              <h2>Swim with Dolphin & Snorkeling at Lovina</h2>
              <div className={styles.cardDescription}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="card-button">
                <button className={styles.cardButton}>Read More</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img src="kitten.jpeg"></img>

          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              <h2>Hello</h2>
              <div className={styles.cardDescription}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className={styles.buttonContainer}>
                <button className={styles.cardButton}>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
