import React from 'react'
import SplitText2 from '../common/Split_text2'
import { teampage } from '@/getData/getData'

export default async function Pageheder() {
  const data = await teampage();
  const headerData = data.pageheader;
  return (
    <section className="page-header">
      <div className="container px-0">
        <div className="row">
          <div className="col-lg-5 align-self-center">
            <SplitText2 cls="page-sub-title text-uppercase w-100" line1={headerData.subtitle} />
          </div>
          <div className="col-lg-7 align-self-end">
            <p className="short-info portfolio-short-info mb-0">{headerData.content}</p>
          </div>
        </div>
        <h1 className="page-title text-uppercase position-absolute z-n1 pricing-title">{headerData.title}</h1>
      </div>
    </section>
  )
}
