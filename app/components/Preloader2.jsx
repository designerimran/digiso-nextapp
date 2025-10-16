"use client"

import Img from "./common/Img"

export default function Preloader2() {
  return (
    <div id="preloader" className="preloader">
      <div className="loader-circle">
        <div className="loader-line-mask">
          <div className="loader-line"></div>
        </div>
        <div className="loader-logo">
          <Img className="w-50" src="/landing/assets/images/logo/logo3.svg" alt="Site Logo" />
        </div>
      </div>
    </div>
  )
}
