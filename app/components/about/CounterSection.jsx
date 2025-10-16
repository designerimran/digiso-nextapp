"use client";
import React, { useEffect, useState } from 'react'
import CounterBlock from '../common/CounterBlock'
import { about } from '@/getData/getData';

export default function CounterSection() {
  const [counterData, setdata] = useState([]);
  useEffect(() => {
    const fetehData = async () => {
      const Data = await about();
      setdata(Data.counter);
    }
    fetehData();
  }, []);
  return (
    <section className="counter-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 ms-auto">
            <div className="counter-area">
              <div className="row g-4">
                {counterData && counterData.map((item,index)=>(
                <div key={index} className="col-lg-4 col-md-4 col-sm-6 counter-label">
                  <CounterBlock title={item.title} value={item.value} unit={item.unit} />
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
