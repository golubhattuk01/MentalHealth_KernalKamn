import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { FirebaseProvider } from "./FirebaseSetup/Context.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";
import ChatWithUs from "./component/chatwithus.jsx";
import ChatBot from "./component/ChatBot.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <FirebaseProvider>
        <Navbar></Navbar>
        <App />
        <Footer></Footer>
      </FirebaseProvider>
    </BrowserRouter>
  </>
);
