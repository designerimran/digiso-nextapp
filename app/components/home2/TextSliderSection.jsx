"use client";
import React from 'react'

export default function TextSliderSection({headingData}) {
  return (
    <section className="text-slider-section text-slider-section-two">
      <div className="slider-main d-flex align-items-center">
        <div className="slider-item d-flex align-items-center">
          <h4 className="title">
            {headingData.textSlider}</h4>
          <h4 className="title">
            {headingData.textSlider}</h4>
        </div>
        <div className="slider-item d-flex align-items-center">
          <h4 className="title">
            {headingData.textSlider}</h4>
          <h4 className="title">
            {headingData.textSlider}</h4>
        </div>
      </div>
    </section>
  )
}
