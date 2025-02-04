import React from "react";
import styles from "./Trip.module.scss";

function Trips() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
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
                <p>Rp. 1.500.000 ($ 100) / Person</p>
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
                <p>Rp. 1.500.000 ($ 100) / Person</p>
              </div>
              <div className={styles.buttonContainer}>
                <button className={styles.cardButton}>Read More</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img src="kitten.jpeg"></img>

          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              <h2>Awsome Ocean Watersport at Tanjung Benoa</h2>
              <div className={styles.cardDescription}>
                <p>
                  Water sports in Tanjung Benoa, Nusa Dua, offer an exhilarating
                  and unforgettable experience for visitors. Tanjung Benoa is
                  renowned for its pristine beaches, calm waters, and a wide
                  array of water-based activities. These are just a few examples
                  of the exciting water sports activities available in Tanjung
                  Benoa, Nusa Dua. Whether you’re seeking adrenaline-pumping
                  adventures or serene underwater exploration, Tanjung Benoa has
                  something to offer for water sports enthusiasts of all ages
                  and skill levels.
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
                <p>Rp. 1.500.000 ($ 100) / Person</p>
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
              <h2>Snorkeling at Blue Lagoon & Tanjung Jepun</h2>
              <div className={styles.cardDescription}>
                <p>
                  Enjoy the pristine, crystal-clear waters that provide
                  excellent visibility for snorkeling at both Blue Lagoon and
                  Tanjung Jepun. Encounter a diverse array of marine life,
                  including colorful coral reefs, tropical fish, and other
                  fascinating sea creatures in their natural habitat. Both
                  locations are known for their gentle currents, making them
                  ideal for snorkelers of all experience levels, including
                  beginners. Explore vibrant coral gardens teeming with life,
                  offering a beautiful underwater landscape to admire and
                  photograph.
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
                <p>Rp. 1.500.000 ($ 100) / Person</p>
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
              <h2>Mount Batur Sunrise Trekking with Private Transfer</h2>
              <div className={styles.cardDescription}>
                <p>
                  Mount Batur is an active volcano located in the Kintamani
                  district of Bali. It’s one of the island’s most popular
                  trekking destinations. The trek usually begins around 3:00 AM
                  to ensure you reach the summit in time to witness the
                  breathtaking sunrise. Upon reaching the summit, you’ll be
                  rewarded with a stunning sunrise view over the caldera lake
                  (Lake Batur) and surrounding mountains. Explore the unique
                  volcanic landscape, including steaming craters and rugged
                  terrain. Enjoy panoramic views of Bali.
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
                <p>Rp. 1.500.000 ($ 100) / Person</p>
              </div>
              <div className="card-button">
                <button className={styles.cardButton}>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trips;
