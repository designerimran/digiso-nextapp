'use client'
import { useEffect, useState } from 'react'
import { errorData } from "@/getData/getData"
import SplitText2 from './components/common/Split_text2';
import Img from './components/common/Img';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetehData = async () => {
      setData(await errorData());
    }
    fetehData();
  }, []);
  return (
    <div className=''>
      <main className="position-relative">
        {/* page header section start  */}
        <section className="page-header pt-0">
          <div className="container">
            <h1 className="page-title text-uppercase position-absolute z-n1">{data.pagetitle}</h1>
          </div>
        </section>
        {/* page header section end  */}
        {/* error section end  */}
        <section className="error-section">
          <div className="container">
            <div className="text-center">
              <h2 className="title text-uppercase">{data.title}</h2>
              <SplitText2 cls="sub-title" line1={data.subtitle2} />
              <p className="mx-auto">{data.content}</p>
              <div className="back-top-home d-flex justify-content-center">
                <button className='view-all-btn back-to-home-btn text-uppercase'
                  onClick={ () => reset()}
                >
                  {data.btn2}
                  <div className="icon"><Img src="assets/img/icons/icon-up-right.svg" alt="icon-up-right" /></div>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* error section end  */}
      </main>
    </div>
  )
}