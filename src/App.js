import "./App.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter } from "react-router-dom";
import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Navigation from "./Navigation";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Navbar />
        <Navigation />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
