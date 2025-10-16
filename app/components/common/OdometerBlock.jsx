"use client";
import { useState, useEffect, useRef } from 'react';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';

const OdometerBlock = (props) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);  // To track the DOM element
  const odometerRef = useRef(null);

  // useEffect(() => {
  //   const n = Number(odometerRef.current.getAttribute('data-count'));
  //   // Function to start odometer when element is in view
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setCount(n);  // Start odometer when element comes into view
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.5,  // Trigger when 50% of the element is visible
  //     }
  //   );

  //   if (counterRef.current) {
  //     observer.observe(counterRef.current);
  //   }

  //   return () => {
  //     if (counterRef.current) {
  //       observer.unobserve(counterRef.current);  // Clean up observer
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
          setCount(n);  // Start odometer when element comes into view
        }
      });
    },
    {
      threshold: 0.5,  // Trigger when 50% of the element is visible
    }
  );

  if (counterNode) {
    observer.observe(counterNode);
  }

  return () => {
    if (counterNode) {
      observer.unobserve(counterNode);  // Clean up observer
    }
  };
}, []);

  return (
    <div className="counter-item text-center" ref={counterRef}>
      <div className="number ">
        <div ref={odometerRef} className="odometer" data-count={props.value}>
          <Odometer value={count} format="d" style={{ fontFamily: `${props.font}` }} />{props.item}
        </div>
      </div>
      <p>{props.title}</p>
    </div>
  );
};

export default OdometerBlock;

