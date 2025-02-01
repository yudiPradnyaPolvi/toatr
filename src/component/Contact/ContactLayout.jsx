import React from "react";

import Header from "../Header/Header";
import Contact from "./Contact";
import Footer from "../Footer/Footer";

function ContactLayout() {
  return (
    <>
      <Header />

      <section id="Contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default ContactLayout;
