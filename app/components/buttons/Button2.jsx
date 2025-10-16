"use client";
import Link from 'next/link'
import React from 'react'
import Img from '../common/Img';

export default function Button2(props) {
  return (
    <Link className={`view-all-btn2 ${props.cls}`} href={`${props.location}`}>
      <span className="btn-wrap">
        <span className="text-one">{props.name}</span>
        <span className="text-two">{props.name}</span>
      </span>
      <Img className="ms-1" src="/assets/img/icons/icon-right.svg" alt="icon-right" />
    </Link>
  )
}
