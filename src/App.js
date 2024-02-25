import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import DiscoveryAndCoaches from "./pages/discoveryCoaches";
import MainLayout from "./layout/MainLayout";
import Header from "./components/header/Header";
import HomePage from "./components/HomePage";
import Footer from "./components/footer/Footer";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import OurCookies from "./pages/OurCookies";
import FAQS from "./pages/FAQS";
import Contact from "./pages/Contact";
import Subscription from "./pages/Subscription";
import SubscriptionPlan from "./pages/Subscription";
import Afterloginprofilepage from "./pages/Afterloginprofilepage";
import SignIn from "./pages/SignIn";
import SubscriptionActive from "./pages/SubscriptionActive";
import PurchaseSuccessful from "./pages/PurchaseSuccessful";
import PurchaseError from "./pages/PurchaseError";
import CurvePage from "./pages/home/CurvePage";

function App() {
  return (
  <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<MainLayout />}> */}
          <Route path='/home' exact element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<OurCookies />} />
            <Route path="/faqs" element={<FAQS />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/subscriptionplan" element={<SubscriptionPlan />} />
            <Route path="/Afterloginprofilepage" element={<Afterloginprofilepage />} />
            <Route path="/" element={<SignIn/>} />
            <Route path="/subscriptionActive" element={<SubscriptionActive/>} />
            <Route path="/purchaseSuccessful" element={<PurchaseSuccessful/>} />
            <Route path="/purchaseerror" element={<PurchaseError/>} />
            <Route path="/CurvePage" element={<CurvePage/>} />


            <Route path="discovery-coaches" element={<DiscoveryAndCoaches />} />
        </Routes>
        <Footer />
      </BrowserRouter>
   </>
  );
}

export default App;

