import "../styles/CardGallery.css";

export default function CardGallery({ image }) {
  return <div className="card gallery m-1" style={{ backgroundImage: `URL(${image})` }}></div>;
}
