
import React from 'react'
import Link from 'next/link'
import Button2 from '../buttons/Button2'
import Img from '../common/Img'

export default function PortfolioBlock(props) {
  return (
    <div className="col-lg-4 col-sm-6 fade-up ">
      <div className="portfolio-item">
        <div className="img">
          <Link href={props.link} className="d-block w-100">
            <Img src={props.img} alt="portfolio-img" className="img-fluid w-100"/>
          </Link>
        </div>
        <div className="text">
          <Link href={props.link} className="title">{props.title}</Link>
          <Button2 name={props.btn} location={props.link} />
        </div>
      </div>
    </div>
  )
}
