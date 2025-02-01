import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.scss";

import TripLayout from "./component/Trip/TripLayout.jsx";
import BlogLayout from "./component/Blog/BlogLayout.jsx";
import AboutLayout from "./component/About/AboutLayout.jsx";
import ContactLayout from "./component/Contact/ContactLayout.jsx";
// import Awards from "./component/Awards/Awards.jsx";
// import Certificates from "./component/Certificates/Certificates.jsx";
// import Header from "./component/Header/Header.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Trips", element: <TripLayout /> },
  { path: "/About", element: <AboutLayout /> },
  { path: "/Blogs", element: <BlogLayout /> },
  { path: "/Contact", element: <ContactLayout /> },
  // { path: "/Certificates", element: <Certificates /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
