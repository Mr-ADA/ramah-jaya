import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer px-5 d-flex flex-row text-white text-center">
      <div className="row ms-5">
        <h1 className="title">Kami Tunggu Kedatangan Anda!</h1>
        <div className="footer-nav">
          <span className="nav-item p-2">Home</span>
          <span className="nav-item p-2">Tentang Kami</span>
          <span className="nav-item p-2">Lokasi</span>
          <span className="nav-item p-2">Testimoni</span>
        </div>

        <h2 className="subtitle">© Ramah Jaya Team, 2024</h2>
      </div>
    </footer>
  );
}
