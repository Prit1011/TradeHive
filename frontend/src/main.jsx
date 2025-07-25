import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/Home/HomePage';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
// import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/About/AboutPage";
import ProductsPage from './landing_page/products/ProductsPage';
import PricingPage from './landing_page/Pricing/PricingPage';
import SupportPage from './landing_page/Support/SupportPage';

import NotFound from "./landing_page/NotFound";
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/product" element={<ProductsPage />} />
    <Route path="/pricing" element={<PricingPage />} />
    <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} /> 

  </Routes>
  <Footer />
  </BrowserRouter>
);
