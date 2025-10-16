//Include css file
import "./globals.css";
import "@/public/assets/css/bootstrap.min.css";
import "@/public/assets/fontawsome/css/all.min.css";
import "@/public/assets/fontawsome/css/fontawesome.min.css";
import "@/public/assets/css/slick.css";
import "@/public/assets/css/magnific-popup.css";
import "@/public/assets/css/animate.min.css";
import 'animate.css';
import "@/public/assets/css/odometer.css";
import "@/public/assets/sass/style.scss";
//Include css file
import "@/public/assets/js/gsap.js";
import "@/public/assets/js/gsap-scroll-trigger.js";
import "@/public/assets/js/gsap-split-text.js";
import "@/public/assets/js/script.js";
//landing js file
import "@/public/landing/assets/js/type.js";
import "@/public/landing/assets/js/main.js";
//Include component
import BacktoTop from "./components/BacktoTop";
import CHeader from "./components/CHeader";

export const metadata = {
  title: "Digiso - Digital Business Branding Agency React Template",
  description: "Digiso",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CHeader />
        <BacktoTop />
        {children}
      </body>
    </html>
  );
}
