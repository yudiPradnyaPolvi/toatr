import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./tripContent.module.scss";

const BaturTrip = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <div className={styles.contentTitle}>
          <h1>Title</h1>
          <img src="/pemandangan.jpeg" alt="Scenic View" />
        </div>
        <div className={styles.contentDesc}>
          <h3>Harga Tour</h3>
          <ul>
            <li>2 orang : Rp 2.210.000/orang</li>
            <li>3 orang : Rp 1960.000/orang</li>
            <li>4 - 8 orang : Rp 1.860.000/orang</li>
            <li>9 - 20 orang : Rp 1.780.000/orang</li>
          </ul>
        </div>
        <div className={styles.contentDesc}>
          <h3>TOUR ITINERARY</h3>
          <ul>
            <li>
              Penjemputan di Bandara Ngurah Rai Bali (disarankan tiba pagi)
            </li>
            <li>
              Start Program mengunjungi Desa Wisata Penglipuran (Bisa mampir di
              pusat kerajianan Batik & Perak – opsional)
            </li>
            <li>Kemudian menuju Kintamani</li>
            <li>
              Makan siang sambil menikmati pemandangan Gunung & Danau Batur
              (Resto Grand Puncak Sari / Tegu Kopi)
            </li>
            <li>
              Agrowisata Kopi Luwak & Coklat Mengunjungi Rice Terrace Ubud/Air
              Terjun Tegenungan
            </li>
            <li>Makan malam di Kuta Area</li>
            <li>Check in Hotel dan istirahat</li>
          </ul>
        </div>
        <div className={styles.contentDesc}>
          <h3>FASILITAS</h3>
          <ul>
            <li>Akomodasi Hotel 2 Malam (Bintang 3)</li>
            <li>
              Private AC transport sesuai jumlah peserta (Avanza / Xenia, Elf,
              Toyota Hi-Ace, Bus)
            </li>
            <li>Semua tiket obyek wisata, parkir, dan tol</li>
            <li>Antar-jemput Bandara sesuai program</li>
            <li>
              Driver merangkap Tour Guide (bisa bantu ambil photo di obyek
              wisata)
            </li>
            <li>Air mineral saat tour</li>
          </ul>
        </div>
        <div className={styles.contentDesc}>
          <h3>Paket Belum Termasuk </h3>
          <ul>
            <li>Tiket pesawat PP</li>
            <li>Permainan di obyek wisata (opsional)</li>
            <li>Tip Driver/Guide</li>
          </ul>
        </div>
        <div className={styles.contentDesc}>
          <h3>BISA JUGA PESAN HOTEL SENDIRI</h3>
          <ul>
            <li>2 orang : Rp 1.760.000/orang</li>
            <li>3 orang : Rp 1.530.000/orang</li>
            <li>4 - 9 orang : Rp 1.410.000/orang</li>
            <li>9 - 20 orang : Rp 1.330.000/orang</li>
          </ul>
        </div>
        <div className={styles.contentDesc}>
          <p>
            Yuk.. segera agendakan rencana liburan anda dengan Marketing Bakta
            Tour yang super ramah & fast respon
          </p>
          <button className={styles.btnOrder}>Order Now!</button>
        </div>
      </div>

      <div className={styles.cards}>
        <h2>Serahkan semua rencana liburan mu bersama kami</h2>
        <img className={styles.logo} src="/public/logo.png"></img>
        <p>Partner Terpecaya Untuk Liburan Mu Selama di Bali</p>
        <button className={styles.btnOrder}>Order Now!</button>
      </div>
    </div>
  );
};

const BaturLayout = () => {
  return (
    <>
      <Header />
      <BaturTrip />
      <Footer />
    </>
  );
};

export default BaturLayout;
