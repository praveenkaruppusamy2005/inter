
import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./style.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./LandingPage";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Privacy from "./pages/Privacy";
import Refund from "./pages/Refund";
import Terms from "./pages/Terms";
import Policies from "./pages/Policies";
import ContactInfo from "./pages/ContactInfo";
import HowToUse from "./pages/HowToUse";
import DownloadPage from "./pages/DownloadPage";
import PaymentComplete from "./pages/PaymentComplete";
import PaymentCancelled from "./pages/PaymentCancelled";
import Features from "./pages/Features";
import UseCases from "./pages/UseCases";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Standalone route without header/footer */}
        <Route path="/payment-complete" element={<PaymentComplete />} />
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/download/windows" element={<DownloadPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/how-to-use" element={<HowToUse />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-info" element={<ContactInfo />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/payment-cancelled" element={<PaymentCancelled />} />
          <Route path="*" element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

function Layout() {
  return (
    <div
      className="app-root light"
      style={{
        overflowY: "auto",
        height: "100vh",
        display: "block",
        position: "relative",
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

function DownloadRedirect() {
  const windowsDownloadUrl =
    import.meta.env.VITE_WINDOWS_DOWNLOAD_URL ||
    "https://www.dropbox.com/scl/fi/7d5t6ea1ihzqaml92embp/imodule-Setup-1.0.17.exe?rlkey=82pc09ux8qxe3sprxkcltba1a&st=jzat6w1u&dl=0";

  React.useEffect(() => {
    window.location.href = windowsDownloadUrl;
  }, [windowsDownloadUrl]);

  return (
    <main className="legal-main">
      <div className="legal-wrap">
        <h1 className="legal-h1">Starting download…</h1>
        <p className="legal-p">
          If it doesn’t start automatically,{" "}
          <a href={windowsDownloadUrl} style={{ color: "#8ab4f8", fontWeight: 900, textDecoration: "none" }}>
            click here
          </a>
          .
        </p>
      </div>
    </main>
  );
}
