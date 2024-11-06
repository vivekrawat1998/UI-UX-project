import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Cookiespolicy from "./components/Cookiespolicy";
import HomePage from "./components/Homepage";
import Footer from "./components/Footer";
import Fairgamepolicy from "./components/Fairgamepolicy";
import Refundpolicy from "./components/Refundpolicy";
import TermsConditions from "./components/Termsconsitions";
import PrivacyPolicy from "./components/PrivacyPolicy";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cookiespolicy" element={<Cookiespolicy />} />
          <Route path="/fairplaypolicy" element={<Fairgamepolicy />} />
          <Route path="/refundpolicy" element={<Refundpolicy />} />
          <Route path="/termsconditions" element={<TermsConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
