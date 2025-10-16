"use client";
import Link from 'next/link'
import React from 'react'
import Img from '../common/Img';

export default function Button6(props) {
  return (
    <Link className="view-all-btn view-all-btn-primary text-uppercase position-absolute start-50 translate-middle-x"
      href={props.location}>
      {props.name}
      <div className="icon"><Img src="/assets/img/icons/icon-up-right.svg" alt="icon-up-right" /></div>
    </Link>
  )
}
