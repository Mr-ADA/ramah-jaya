import CardGallery from "./CardGallery";
import Product1 from "../assets/galeri1.jpg";
import Product2 from "../assets/galeri2.jpg";
import Product3 from "../assets/galeri3.jpg";
import Product4 from "../assets/galeri4.jpg";
import "../styles/Gallery.css";

export default function Gallery() {
  return (
    <>
      <h1 className="gallery-title">Gallery</h1>
      <div className="gallery m-2 d-flex">
        <CardGallery image={Product1} />
        <CardGallery image={Product2} />
        <CardGallery image={Product3} />
        <CardGallery image={Product4} />
      </div>
    </>
  );
}
