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
                  The journey begins from your hotel to Sanur Harbour and
                  boarding the first fast boat to Nusa Penida. Upon arrival at
                  Nusa Penida Harbor, you will be greeted by the best tour
                  driver who will accompany you throughout the day. Then, you
                  will proceed to visit your favorite destinations. After a full
                  day exploring the beauty of Nusa Penida, you will return to
                  Bali via fast boat and be picked up at Sanur Harbor to return
                  to your hotel.
                </p>
              </div>
              <div className={styles.mapContent}>
                <img
                  className={styles.imgMap}
                  src="/public/map.png"
                  alt="map"
                ></img>
                <p>East Bali</p>
              </div>
              <div className={styles.timeContent}>
                <img
                  className={styles.imgTime}
                  src="/public/time.png"
                  alt="time"
                ></img>
                <p>10 Hours</p>
              </div>
              <div className={styles.moneyContent}>
                <img
                  className={styles.imgMoney}
                  src="/public/money.png"
                  alt="money"
                ></img>
                <p>Rp. 1.500.000 ($ 100) / Person</p>
              </div>
              <div className="card-button">
                <a href="../Content_Trip/NusapenidaTrip">
                  <button className={styles.cardButton}>Read More</button>
                </a>
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
                  North Bali offers a unique and less crowded experience
                  compared to the southern parts of the island. It is rich in
                  natural beauty, cultural sites, and serene landscapes Swimming
                  with dolphins in Lovina Bay is a magical experience that takes
                  place on the northern coast of Bali. Early in the morning,
                  visitors embark on traditional Balinese boats to venture into
                  the calm waters of the bay, where they can encounter playful
                  dolphins in their natural habitat.
                </p>
              </div>
              <div className={styles.mapContent}>
                <img
                  className={styles.imgMap}
                  src="/public/map.png"
                  alt="map"
                ></img>
                <p>North Bali</p>
              </div>
              <div className={styles.timeContent}>
                <img
                  className={styles.imgTime}
                  src="/public/time.png"
                  alt="time"
                ></img>
                <p>10 Hours</p>
              </div>
              <div className={styles.moneyContent}>
                <img
                  className={styles.imgMoney}
                  src="/public/money.png"
                  alt="money"
                ></img>
                <p>Rp. 1.900.000 ($ 150) / Person</p>
              </div>
              <div className="card-button">
                <a href="../Content_Trip/LovinaTrip">
                  <button className={styles.cardButton}>Read More</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img src="kitten.jpeg"></img>

          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              <h2>Junggle Waterfall in the Heart of Bali Island</h2>
              <div className={styles.cardDescription}>
                <p>
                  One of Bali’s hidden gems and arguably the most beautiful
                  waterfall on the island is nestled deep within the lush
                  forests of Bali’s northern region — we call it Sekumpul
                  Waterfall. This waterfall complex comprises seven cascades
                  tucked away amidst the verdant foliage of the Bali jungle.
                  Sekumpul Waterfall is a majestic sight to behold, with each
                  cascade plunging gracefully down steep cliffs into pristine
                  pools below.
                </p>
              </div>
              <div className={styles.mapContent}>
                <img
                  className={styles.imgMap}
                  src="/public/map.png"
                  alt="map"
                ></img>
                <p>South Bali</p>
              </div>
              <div className={styles.timeContent}>
                <img
                  className={styles.imgTime}
                  src="/public/time.png"
                  alt="time"
                ></img>
                <p>10 Hours</p>
              </div>
              <div className={styles.moneyContent}>
                <img
                  className={styles.imgMoney}
                  src="/public/money.png"
                  alt="money"
                ></img>
                <p>Rp. 3.000.000 ($ 200) / Person</p>
              </div>
              <div className={styles.buttonContainer}>
                <a href="../Content_Trip/WaterfallTrip">
                  <button className={styles.cardButton}>Read More</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
