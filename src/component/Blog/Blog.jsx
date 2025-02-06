import React from "react";
import styles from "./Blog.module.scss";

function Blogs() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Blogs</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className={styles.content}>
        <div className={styles.card}>
          <img src="kitten.jpeg"></img>

          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              <h2>
                Discovering the Iconic Kelingking Beach in Nusa Penida: A Hidden
                Gem of Bali
              </h2>
              <div className={styles.cardDescription}>
                <p>
                  Nestled on the southwestern coast of Nusa Penida, Kelingking
                  Beach is undoubtedly one of Bali’s most iconic and
                  awe-inspiring destinations. Often referred to as the “T-Rex
                  Beach” due to the cliff’s unique shape resembling a dinosaur’s
                  head, this breathtaking spot is a must-visit for those seeking
                  adventure, natural beauty, and unforgettable memories.
                </p>
              </div>
              <div className="card-button">
                <a href="../Content Blog/Blog1">
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
              <h2>Travel Smart: Avoiding Traffic in Bali by Starting Early</h2>
              <div className={styles.cardDescription}>
                <p>
                  Bali, known as the “Island of the Gods,” is a paradise of
                  breathtaking beaches, lush rice terraces, and vibrant culture.
                  However, like any popular destination, Bali’s roads can get
                  crowded, especially during peak travel seasons or rush hours.
                  Traffic congestion can sometimes disrupt your plans, but with
                  a little strategy and preparation, you can make your journey
                  around Bali smooth and stress-free. One of the most effective
                  ways to do this? Start your day early!
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
              <h2>
                The Thrill of Riding ATV Quad Bikes in Bali During the Rainy
                Season
              </h2>
              <div className={styles.cardDescription}>
                <p>
                  Exploring Bali on an ATV quad bike is always an exhilarating
                  experience, but there’s something uniquely magical about
                  embarking on this adventure during the rainy season. Far from
                  being a deterrent, the rain adds a new layer of excitement and
                  natural beauty, making the ride an unforgettable journey
                  through Bali’s lush landscapes.
                </p>
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
              <h2>Exploring the Wonders of Ubud Monkey Forest Sanctuary</h2>
              <div className={styles.cardDescription}>
                <p>
                  Nestled in the heart of Ubud, the Monkey Forest Sanctuary,
                  officially known as the Sacred Monkey Forest Sanctuary, is a
                  gem of Bali that offers a perfect blend of cultural
                  significance, natural beauty, and wildlife adventure. This
                  lush green sanctuary is not just a tourist attraction; it is a
                  revered spiritual and ecological site that reflects the
                  harmonious coexistence of Balinese culture and nature.
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
              <h2>What is a Melukat Ceremony or Purification Ritual?</h2>
              <div className={styles.cardDescription}>
                <p>
                  The Melukat ceremony is a traditional Balinese Hindu
                  purification ritual designed to cleanse the body, mind, and
                  soul from negative energy. Deeply rooted in Balinese spiritual
                  beliefs, Melukat is often performed as a means of spiritual
                  renewal, removing impurities or bad luck, and restoring
                  harmony between the physical and spiritual realms. The word
                  Melukat comes from the Old Javanese word lukat, which means to
                  “cleanse” or “purify.”
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
              <h2>Lahangan Sweet: Bali’s Hidden Gem with Breathtaking Views</h2>
              <div className={styles.cardDescription}>
                <p>
                  Nestled in the serene Karangasem region of East Bali, Lahangan
                  Sweet is a relatively undiscovered destination that offers one
                  of the most spectacular panoramic views on the island. This
                  hidden gem is quickly becoming a favorite spot for travelers
                  seeking peace, tranquility, and an unforgettable view of
                  Bali’s natural beauty.
                </p>
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

export default Blogs;
