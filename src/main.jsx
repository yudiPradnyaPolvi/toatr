import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.scss";

import TripLayout from "./component/Trip/TripLayout.jsx";
import BlogLayout from "./component/Blog/BlogLayout.jsx";
import AboutLayout from "./component/About/AboutLayout.jsx";
import ContactLayout from "./component/Contact/ContactLayout.jsx";
import BaturTrip from "./component/Content_Trip/BaturTrip.jsx";
import LovinaTrip from "./component/Content_Trip/LovinaTrip.jsx";
import NusapenidaTrip from "./component/Content_Trip/NusapenidaTrip.jsx";
import TanjungbenoaTrip from "./component/Content_Trip/TanjungbenoaTrip.jsx";
import TanjungjepunTrip from "./component/Content_Trip/TanjungjepunTrip.jsx";
import WaterfallTrip from "./component/Content_Trip/WaterfallTrip.jsx";
import Blog1 from "./component/Content Blog/Blog1.jsx";
import Blog2 from "./component/Content Blog/Blog2.jsx";
import Blog3 from "./component/Content Blog/Blog3.jsx";
import Blog4 from "./component/Content Blog/Blog4.jsx";
import Blog5 from "./component/Content Blog/Blog5.jsx";
import Blog6 from "./component/Content Blog/Blog6.jsx";
// import Awards from "./component/Awards/Awards.jsx";
// import Certificates from "./component/Certificates/Certificates.jsx";
// import Header from "./component/Header/Header.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Trips", element: <TripLayout /> },
  { path: "/About", element: <AboutLayout /> },
  { path: "/Blogs", element: <BlogLayout /> },
  { path: "/Contact", element: <ContactLayout /> },
  { path: "/Content_Trip/BaturTrip", element: <BaturTrip /> },
  { path: "/Content_Trip/LovinaTrip", element: <LovinaTrip /> },
  { path: "/Content_Trip/NusapenidaTrip", element: <NusapenidaTrip /> },
  { path: "/Content_Trip/TanjungbenoaTrip", element: <TanjungbenoaTrip /> },
  { path: "/Content_Trip/TanjungjepunTrip", element: <TanjungjepunTrip /> },
  { path: "/Content_Trip/WaterfallTrip", element: <WaterfallTrip /> },
  { path: "/Content Blog/Blog1", element: <Blog1 /> },
  { path: "/Content Blog/Blog2", element: <Blog2 /> },
  { path: "/Content Blog/Blog3", element: <Blog3 /> },
  { path: "/Content Blog/Blog4", element: <Blog4 /> },
  { path: "/Content Blog/Blog5", element: <Blog5 /> },
  { path: "/Content Blog/Blog6", element: <Blog6 /> },
  // { path: "/Certificates", element: <Certificates /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
