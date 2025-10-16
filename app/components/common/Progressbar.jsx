"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Progressbar(props) {
  gsap.registerPlugin(ScrollTrigger);
  const progressRef = useRef(null);

  useEffect(() => {
    const bar = progressRef.current;
    
    gsap.fromTo(
      bar, 
      { width: '0%' }, 
      {
        width: `${props.value}%`,
        scrollTrigger: {
          trigger: bar,
          start: 'top 90%',
          toggleActions: 'play none none none',
          once: true,
        }
      }
    );
  }, [props.value]);

  return (
    <div className="progress-item">
      <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow={props.value}
        aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar" ref={progressRef} style={{width: '0%'}}>
        </div>
      </div>
      <h6 className="progress-title">{props.title}<span>{props.value}%</span></h6>
    </div>
  );
}
