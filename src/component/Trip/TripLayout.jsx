import React from "react";

import Header from "../Header/Header";
import Trips from "./Trips";
import Footer from "../Footer/Footer";

function TripLayout() {
  return (
    <>
      <Header />

      <section id="trip">
        <Trips />
      </section>
      <Footer />
    </>
  );
}

export default TripLayout;
