import "../styles/Location.css";

export default function Location() {
  return (
    <div className="location">
      <h1 className="location-title">Lokasi</h1>
      <div className="location-wrapper p-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.5637941568452!2d112.63863610000001!3d-7.940541099999989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629ea0897baef%3A0x9d10d5094bf33856!2sToko%20Ramah%20Jaya!5e0!3m2!1sen!2sid!4v1705675301629!5m2!1sen!2sid"
          className="location-maps"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="contact-wrapper mx-3">
          <a href="https://wa.me/+6285101485858" className="contact-whatsapp">
            Hubungi Melalui Whatsapp
          </a>
          <a href="tel:+6285101485858" className="contact-phone">
            Hubungi Melalui Telepon
          </a>
          <a href="https://ig.me/m/toko.ramahjaya" className="contact-instagram">
            Hubungi Melalui DM Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
