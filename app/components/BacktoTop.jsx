"use client";
import React from 'react';
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`scroll-to-top position-fixed ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
      style={{
        display: isVisible ? "block" : "none",
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6 15l6 -6l6 6" />
      </svg>
    </button>
  );
};

export default ScrollToTop;
