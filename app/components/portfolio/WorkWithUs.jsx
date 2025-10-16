import React from 'react'
import { workWithUs } from '@/getData/getData'
import SplitText2 from '../common/Split_text2';

export default async function WorkWithUs() {
  const data = await workWithUs();
  return (
    <section className="work-with-us-section">
      <div className="container">
        <div className="text text-center">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h4 className="sub-title text-uppercase">{data.subtitle}</h4>
              <div className="section-title-block">
                <SplitText2 cls="section-title" line1={data.title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
