import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./ContentBlog.module.scss";

const Blog5 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <div className={styles.contentTitle}>
          <h1>
            Discovering the Iconic Kelingking Beach in Nusa Penida: A Hidden Gem
            of Bali
          </h1>
          <img src="/pemandangan.jpeg" alt="Scenic View" />
        </div>
        <div className={styles.contentDesc}>
          <h3>The Majestic Viewpoint</h3>
          <p>
            The moment you arrive at Kelingking Beach, you’ll be greeted by a
            panoramic view that will leave you speechless. The towering
            limestone cliffs, covered in lush greenery, cascade dramatically
            into the turquoise waters below. The contrast of the white sandy
            beach against the vibrant blue ocean creates a postcard-perfect
            scene that has earned Kelingking Beach global fame.
          </p>
          <p>
            The viewpoint is the ideal spot for photography enthusiasts. Capture
            the stunning beauty of the landscape or simply soak in the
            incredible vista. Whether it’s the golden light of sunrise or the
            magical hues of sunset, Kelingking Beach offers a mesmerizing
            experience at any time of the day.
          </p>
        </div>
        <div className={styles.contentDesc}>
          <h3>The Adventurous Descent</h3>
          <p>
            For those craving a bit of adventure, you can trek down to the beach
            itself. The pathway is steep and requires caution, as it involves
            navigating through natural steps and bamboo handrails. While the
            descent might be challenging, the reward at the bottom is worth
            every step.
          </p>
          <p>
            Once you reach the secluded beach, you’ll be immersed in
            tranquility, surrounded by towering cliffs and the sound of waves
            crashing against the shore. Swimming is possible, but be cautious as
            the waters can be rough, especially during high tide.
          </p>
        </div>
        <div className={styles.contentDesc}>
          <h3>Best Time to Visit</h3>
          <p>
            The best time to visit Kelingking Beach is during the dry season,
            from April to October, when the weather is sunny and the seas are
            calmer. Visiting early in the morning or late afternoon not only
            helps you avoid the crowds but also lets you enjoy the cooler
            temperatures and soft lighting for photography.
          </p>
        </div>
        <div className={styles.contentDesc}>
          <h3>How to Get There</h3>
          <p>
            Kelingking Beach is accessible via a 30-40 minute scooter or car
            ride from the main harbor in Nusa Penida. You can reach Nusa Penida
            by a fast boat from Sanur, Bali, which takes about 40 minutes.
            Guided tours and private drivers are also available for a more
            relaxed journey.
          </p>
        </div>
        <div className={styles.contentDesc}>
          <h3>Why You Shouldn’t Miss Kelingking Beach</h3>
          <p>
            Kelingking Beach is more than just a pretty view. It’s a place where
            nature showcases its raw beauty and power, leaving visitors with a
            sense of awe and inspiration. The combination of dramatic cliffs,
            pristine beaches, and crystal-clear waters makes it one of Bali’s
            most extraordinary destinations.
          </p>
          <p>
            Whether you’re an adventurer looking for a challenge, a nature lover
            yearning for untouched beauty, or a traveler in search of that
            perfect Instagram moment, Kelingking Beach promises an unforgettable
            experience that will stay with you forever.
          </p>
        </div>
      </div>

      <div className={styles.cards}>
        <div className={styles.promoteCards}>
          <h2>Serahkan semua rencana liburan mu bersama kami</h2>
          <img className={styles.logo} src="/public/logo.png"></img>
          <p>Partner Terpecaya Untuk Liburan Mu Selama di Bali</p>
          <button className={styles.btnOrder}>Order Now!</button>
        </div>
        <div className={styles.otherBlog}>
          <h2>Recent Post</h2>
          <div className={styles.containerBlog}>
            <a className={styles.linkBlog} href="./Blog2">
              <img src="/public/pemandangan.jpeg"></img>

              <h4>Travel Smart: Avoiding Traffic in Bali by Starting Early</h4>
            </a>
          </div>
          <div className={styles.containerBlog}>
            <a className={styles.linkBlog} href="./Blog3">
              <img src="/public/pemandangan.jpeg"></img>

              <h4>
                The Thrill of Riding ATV Quad Bikes in Bali During the Rainy
                Season
              </h4>
            </a>
          </div>
          <div className={styles.containerBlog}>
            <a className={styles.linkBlog} href="./Blog4">
              <img src="/public/pemandangan.jpeg"></img>

              <h4>Exploring the Wonders of Ubud Monkey Forest Sanctuary</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogLayout = () => {
  return (
    <>
      <Header />
      <Blog5 />
      <Footer />
    </>
  );
};

export default BlogLayout;
