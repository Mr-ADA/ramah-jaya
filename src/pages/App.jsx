import "../styles/App.css";
import Jumbotron from "../components/Jumbotron.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "../components/AboutUs.jsx";
import Location from "../components/Location.jsx";
import Services from "../components/Services.jsx";
import Reviews from "../components/Reviews.jsx";
import Gallery from "../components/Gallery.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes></Routes>
        <Jumbotron />
        <AboutUs />
        <Location />
        <Gallery />
        <Services />
        <Reviews />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
