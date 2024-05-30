import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { CustomRouter } from "./router/router.tsx";
import Footer from "./components/footer.tsx";
import Header from "./components/header.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <CustomRouter />
    <Footer />
  </React.StrictMode>
);
