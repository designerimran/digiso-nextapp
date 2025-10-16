
import Image from 'next/image'
import React from 'react'

export default function Img({ src, alt, className, loading }) {
  return (
    // <div className={`w-100 h-100 `}>
      <img
      // fill={true} style={{objectFit:"contain"}}
      loading={loading} 
      // priority
      src={src} alt={alt} className={className} />
    // </div>
  )
}
