import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage/Home";
import Contact from "./pages/ContactPage/Contact";
import AboutPage from "./pages/AboutPage/AboutPage";
import Gallery from "./pages/GalleryPage/GalleryPage";
import ServicePage from "./pages/ServicePage/ServicePage";
import AdminPage from "./pages/AdminPage/AdminPage";
import AdminTestimonialPage from "./pages/AdminPage/components/AdminTestimonialPage/AdminTestimonialPage";
import AdminGalleryPage from "./pages/AdminPage/components/AdminGalleryPage/AdminGalleryPage";
import AdminHero from "./pages/AdminPage/components/AdminHero/AdminHero";
import ProtectedRoute from "./utils/ProtectedRoute";
import IntroVideo from "./pages/IntroVideo/IntroVideo";

import "./assets/css/themify-icons.css";
import "./assets/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import AdminAboutPage from "./pages/AdminPage/components/AdminAbout/AdminAboutPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 6000); // 3-second loading screen
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loading-container" style={{ textAlign: "center" }}>
          <video
            muted
            autoPlay
            loop
            playsInline
            style={{ width: "100%", maxWidth: "300px", height: "auto" }} // ⬅️ limit video size
          >
            <source src="/src/assets/video/logo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/voraAdmin" element={<AdminPage />} />

            {/* Protected admin routes */}
            <Route
              path="/admin/gallery"
              element={
                <ProtectedRoute>
                  <AdminGalleryPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/testimonial"
              element={
                <ProtectedRoute>
                  <AdminTestimonialPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/hero"
              element={
                <ProtectedRoute>
                  <AdminHero />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/about"
              element={
                <ProtectedRoute>
                  <AdminAboutPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
