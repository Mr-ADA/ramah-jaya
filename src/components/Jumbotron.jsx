import JumbotronImg from "../assets/ramah-jaya-depan.jpg";
import "../styles/Jumbotron.css";
export default function Jumbotron() {
  return (
    <div className="jumbotron" style={{ backgroundImage: `url(${JumbotronImg})` }}>
      <div className="title-wrap">
        <h1 className="title">Toko Ramah Jaya</h1>
        <h3 className="subtitle">Toko Peralatan Rumah Tangga Murah Malang</h3>
      </div>
    </div>
  );
}
