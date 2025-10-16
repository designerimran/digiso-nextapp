import React from 'react'
import SplitText2 from './Split_text2'

export default function Pageheder(props) {
  return (
    <section className="page-header">
      <div className="container px-0">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <SplitText2 cls="page-sub-title w-100 text-uppercase" line1={props.subtitle} />
          </div>
          <div className="col-lg-6 align-self-end">
            <p className={`short-info ${props.cls} mb-0`}>{props.content}</p>
          </div>
        </div>
        <h1 className="page-title text-uppercase position-absolute z-n1 pricing-title">{props.title}</h1>
      </div>
    </section>
  )
}
