import React from "react";

import Header from "../Header/Header";
import Blog from "./Blog";
import Footer from "../Footer/Footer";

function BlogLayout() {
  return (
    <>
      <Header />

      <section id="Blog">
        <Blog />
      </section>
      <Footer />
    </>
  );
}

export default BlogLayout;
