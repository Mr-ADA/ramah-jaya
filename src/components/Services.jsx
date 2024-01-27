import CardServices from "./CardServices";
import "../styles/Services.css";
import Admin from "../assets/Admin.png";
import Quality from "../assets/Quality.png";
import Shipment from "../assets/Shipment.png";
import Wallet from "../assets/Wallet.png";

export default function Services() {
  return (
    <div className="services rounded p-3">
      <h1 className="service-title">Layanan Kami</h1>
      <div className="card-wrapper">
        <CardServices image={Admin} text="Respons Cepat" />
        <CardServices image={Quality} text="Kualitas Top" />
        <CardServices image={Shipment} text="Pengiriman Barang" />
        <CardServices image={Wallet} text="Ramah di Kantong" />
      </div>
    </div>
  );
}
