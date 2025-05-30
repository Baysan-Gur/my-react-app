import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Storage from "../Storage/Storage.jsx";
import ServiceDescription from "../ServiceDescription/ServiceDescription.jsx";
import HowWeWork from "../HowWeWork/HowWeWork.jsx";
import Advantages from "../Advantages/Advantages.jsx";
import styles from "./App.module.css";
import TruckBg from "../fon-icon/truckBg.jpg";

const App = () => {
  return (
    <Router>
      <div className={styles.appWrapper}>
        <img src={TruckBg} alt="truck background" className={styles.bgImage} />
        <div className={styles.gradientOverlay}></div>

        <div className={styles.app}>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/storage" element={<Storage />} />
            <Route
              path="/service-Description"
              element={<ServiceDescription />}
            />
            <Route path="/how-We-Work" element={<HowWeWork />} />
            <Route path="/advantages" element={<Advantages />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
