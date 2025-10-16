import Link from 'next/link'
import React from 'react'
import Button3 from '../buttons/Button3'
import Img from '../common/Img'

export default function BlogItem(props) {
  return (
    <div className="col-lg-4 col-sm-6 fade-up">
      <div className="blog-item-four">
        <div className="image overflow-hidden">
          <Link href={props.btnlink} className="d-block w-100">
            <Img src={props.img} alt="blog-img" className="img-fluid w-100" />
          </Link>
        </div>
        <div className="text">
          <ul className="list-unstyled">
            <li>
              <Link href={`${props.postbylink}`}>{props.postby}</Link>
              <Link href="#">{props.date}</Link>
            </li>
          </ul>
          <Link href={props.btnlink} className="title">{props.title}</Link>
          <Button3 name={props.btn} location={props.btnlink} />
        </div>
      </div>
    </div>
  )
}
