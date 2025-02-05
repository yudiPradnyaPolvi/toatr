import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./tripContent.module.scss";

const WaterfallTrip = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <div className={styles.title}>
          <h1>Title</h1>
          <img src="/pemandangan.jpeg" alt="Scenic View" />
        </div>
        <div className={styles.contentDesc}>
          <p>
            The journey begins from your hotel to Sanur Harbour and boarding the
            first fast boat to Nusa Penida. Upon arrival at Nusa Penida Harbor,
            you will be greeted by the best tour driver who will accompany you
            throughout the day. Then, you will proceed to visit your favorite
            destinations. After a full day exploring the beauty of Nusa Penida,
            you will return to Bali via fast boat and be picked up at Sanur
            Harbor to return to your hotel.
          </p>
        </div>
      </div>
      <div className={styles.cards}>
        <h2>Title</h2>
        <p>sdadaa</p>
      </div>
    </div>
  );
};

const WaterfallLayout = () => {
  return (
    <>
      <Header />
      <WaterfallTrip />
      <Footer />
    </>
  );
};

export default WaterfallLayout;
