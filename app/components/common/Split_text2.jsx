"use client";
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import SplitText from "gsap/SplitText";
import ScrollTrigger from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

export default function SplitText2(props) {
  const TitleRef = useRef(null);
  
  useLayoutEffect(() => {
    if (TitleRef.current) {
      const elements = TitleRef.current;
      const split = new SplitText(elements, {
        type: "lines,words,chars",
        linesClass: "tp-split-line",
      });

      gsap.set(elements, { perspective: 400 });

      let charsAnimation = { opacity: 0 };

      if (elements.classList.contains('right')) {
        charsAnimation.x = "50";
      } else if (elements.classList.contains('left')) {
        charsAnimation.x = "-50";
      } else if (elements.classList.contains('up')) {
        charsAnimation.y = "80";
      } else if (elements.classList.contains('down')) {
        charsAnimation.y = "-80";
      }

      gsap.set(split.chars, charsAnimation);

      gsap.to(split.chars, {
        scrollTrigger: {
          trigger: elements,
          start: "top 80%",
          once: true, 
        },
        x: "0",
        y: "0",
        rotateX: "0",
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.02,
      });
    }
  }, [props.line1]);

  return (
    <h3 ref={TitleRef} className={`${props.cls} split-text right`}>
      {props.line1}
      {props.line2 && <span className="d-block">{props.line2}</span>}
      {props.line6 && <span className="d-xl-block">{props.line6}</span>}
      {props.line3 && <span className="cr">{props.line3}</span>}
      {props.line4 && <span className="br">{props.line4}</span>}
      {props.line5 && <span>{props.line5}</span>}
    </h3>
  );
}
