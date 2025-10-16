"use client";
import { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitText from "gsap/SplitText";
import ScrollTrigger from 'gsap/ScrollTrigger';
import $ from 'jquery';

export default function Split_text(props) {
  const bannerTitleRef = useRef(null);

  useLayoutEffect(() => {
   if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger, SplitText);
    
    let st = $(bannerTitleRef.current);
    
    if (st.length > 0) {
      st.each((index, el) => {
        el.split = new SplitText(el, {
          type: "lines,words,chars",
          linesClass: "tp-split-line",
        });

        gsap.set(el, { perspective: 400 });

        let charsAnimation = { opacity: 0 };

        if ($(el).hasClass('right')) {
          charsAnimation.x = "50";
        } else if ($(el).hasClass('left')) {
          charsAnimation.x = "-50";
        } else if ($(el).hasClass('up')) {
          charsAnimation.y = "80";
        } else if ($(el).hasClass('down')) {
          charsAnimation.y = "-80";
        }

        gsap.set(el.split.chars, charsAnimation);

        el.anim = gsap.to(el.split.chars, {
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
          x: "0",
          y: "0",
          rotateX: "0",
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.02,
        });
      });
    }
  }, [props.line1]);

  return (
    <div>
      <h1 ref={bannerTitleRef} className={`${props.cls} split-text right`}>
        <span className="line-1 d-block">{props.line1}</span>
        <span className="line-2 d-block">{props.line2}</span>
        <span className="line-3 d-block">{props.line3}</span>
      </h1>
    </div>
  )
}
