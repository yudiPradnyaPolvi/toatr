import React from "react";

import Header from "../Header/Header";
import About from "./About";
import Footer from "../Footer/Footer";

function AboutLayout() {
  return (
    <>
      <Header />

      <section id="About">
        <About />
      </section>
      <Footer />
    </>
  );
}

export default AboutLayout;
