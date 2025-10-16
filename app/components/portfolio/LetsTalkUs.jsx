
import React from 'react'
import Button6 from '../buttons/Button6'
import { workWithUs } from '@/getData/getData'

export default async function LetsTalkUs(props) {
  const data = await workWithUs();
  return (
    <div className="lets-talk-section">
      <div className="container px-0 position-relative">
        <Button6 name={data.letstalkus} location="/contact" />
      </div>
    </div>
  )
}
