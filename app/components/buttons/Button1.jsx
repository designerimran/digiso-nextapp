"use client";
import Link from 'next/link'
import React from 'react'
import Img from '../common/Img';

export default function Button1(props) {
  return (
    <Link href={props.location} className="theme-btn position-relative">{props.name} <span
      className="d-flex justify-content-center align-items-center position-absolute top-0">
      <Img src="/assets/img/icons/icon-up-right.svg" alt="icon-up-right" /></span>
    </Link>
  )
}
