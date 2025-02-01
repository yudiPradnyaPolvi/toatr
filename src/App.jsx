import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import Footer from "./component/Footer/Footer";
import Swiper from "./component/Swiper/Swiper";
import Card from "./component/Card/Card";
import Reviews from "./component/Review Tour/Review";
import Reasons from "./component/Reasons/Reasons";
// import Trip from "./component/Trip/Trip";
// import About from "./component/About/About";
// import { Outlet } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Swiper />
      <Hero />
      <Card />

      <Reviews />
      <Reasons />

      <Footer />
    </>
  );
}

export default App;
