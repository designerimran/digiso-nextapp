"use client";
import React from 'react'

export default function Faqbody({data}) {
  return (
    <div className="faq-body">
      <div className="accordion" id="accordionExample">
        {data.faqItem && data.faqItem.map((item, index) => (
          <div key={index} className="accordion-header" id={item.id}>
            <button className={`accordion-button ${item.collapse}`} type="button" data-bs-toggle="collapse"
              data-bs-target={`#${item.target}`} aria-expanded={item.aria_expanded} aria-controls={item.target}>
              {item.question}
            </button>
            <div id={item.target} className={`accordion-collapse collapse ${item.show}`} aria-labelledby={item.id}
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
