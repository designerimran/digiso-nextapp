"use client";
import { useState, useEffect, useRef } from 'react';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';

const CounterBlock = (props) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);  
  const odometerRef = useRef(null);

  // useEffect(() => {
  //   const n = Number(odometerRef.current.getAttribute('data-count'));
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setCount(n); 
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.5, 
  //     }
  //   );
  //   if (counterRef.current) {
  //     observer.observe(counterRef.current);
  //   }
  //   return () => {
  //     if (counterRef.current) {
  //       observer.unobserve(counterRef.current); 
  //     }
  //   };
  // }, []);
useEffect(() => {
  const n = Number(odometerRef.current.getAttribute('data-count'));
  const counterNode = counterRef.current; // Store ref value
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCount(n); 
        }
      });
    },
    {
      threshold: 0.5, 
    }
  );
  if (counterNode) {
    observer.observe(counterNode);
  }
  return () => {
    if (counterNode) {
      observer.unobserve(counterNode); 
    }
  };
}, []);

  return (
    <div className="counter-item " ref={counterRef}>
      {props.title && <p>{props.title}</p>}
        <div ref={odometerRef} className={`counter-title ${props.cls}`} data-count={props.value}>
          <Odometer value={count} format="d" />{props.unit}
        </div>
      {props.title2 && <p>{props.title2}</p>}
    </div>
  );
};

export default CounterBlock;

