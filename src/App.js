import { BrowserRouter } from 'react-router-dom';
import { useEffect } from "react";
import Navbar from './components/Navbar';
import $ from 'jquery';
import logo from './logo.svg';
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';

function App() {
  // Preloader
  $(window).on("load", function () {
    if ($("#preloader").length) {
      $("#preloader")
        .delay(100)
        .fadeOut("slow", function () {
          $(this).remove();
        });
    }
  });

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <div id="preloader">
          <h2 className="name-load  animate-character">l O A D I N G</h2>
        </div>
        <div className="homepage">
          <Navbar />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
