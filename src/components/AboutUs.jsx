import StoreImg from "../assets/ramah-jaya-samping.png";
import "../styles/AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-us">
      <h1 className="title">Tentang Kami</h1>
      <div className="description p-1 m-auto">
        <img className="img-description" src={StoreImg} alt="" />
        <div className="description-wrapper">
          <h2 className="description-title">Toko Ramah Jaya</h2>
          <p className="description-text">
            Kami menyediakan berbagai macam peralatan rumah tangga lengkap dengan harga terjangkau. Toko kami terletak di Jalan Borobudur no. 5H, Kota Malang.
            <br />
            <br />
            Kami siap melayani setiap:
            <ul className="description-list">
              <li>Senin&emsp; (Pukul 08:00 - 17:30)</li>
              <li>Selasa&emsp;(Pukul 08:00 - 17:30)</li>
              <li>Rabu&emsp;&ensp;(Pukul 08:00 - 17:30)</li>
              <li>Kamis&emsp;&nbsp;(Pukul 08:00 - 17:30)</li>
              <li>Jumat&emsp;&nbsp;(Pukul 08:00 - 17:30)</li>
              <li>Sabtu&emsp;&nbsp;(Pukul 08:00 - 17:30)</li>
              <li>Minggu&emsp;(Pukul 08:00 - 15:30)</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
