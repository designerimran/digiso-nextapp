import { subsrcibenow } from '@/getData/getData'
import Link from 'next/link'
import React from 'react'
import Img from './Img';

export default async function SubscribeNow() {
  const data = await subsrcibenow();
  return (
    <section className="subscribe-now-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <div className="logo"><Link href="index.html"><Img src={data.logo} alt="logo2"/></Link></div>
        </div>
        <div className="col-lg-7">
          <div className="subscribe">
            <h4 className="subscribe-title">{data.title}</h4>
            <form action="#">
              <label>{data.label}</label>
              <div className="input-group position-relative">
                <input type="email" placeholder="infoolex@info.com"/>
                <button className="position-absolute end-0 bg-transparent border-0" type="submit"><Img
                    src={data.btn} alt="icon-up-right"/></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
