"use client";
import { useEffect, useRef, useState } from 'react';
import { gsap, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Img from '../common/Img';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Revealimg(props) {

  const revealContainersRef = useRef([]);
  useGSAP(() => {
    let revealContainers = document.querySelectorAll(".reveal");
    revealContainers.forEach((container) => {
      let image = container.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "play none none none",
        }
      });

      tl.set(container, {
        autoAlpha: 1
      });

      if (container.classList.contains('zoom-out')) {
        tl.from(image, 1.5, {
          scale: 1.4,
          ease: Power2.out
        });
      } else if (container.classList.contains('left') || container.classList.contains('right')) {
        let xPercent = container.classList.contains('left') ? -100 : 100;
        tl.from(container, 1.5, {
          xPercent,
          ease: Power2.out
        });
        tl.from(image, 1.5, {
          xPercent: -xPercent,
          scale: 1,
          delay: -1.5,
          ease: Power2.out
        });
      }
    });
  }, { dependencies: [props.img], scope: revealContainersRef, revertOnUpdate: true  });

  return (
    <div className={`team-inner-banner reveal ${props.cls} overflow-hidden`}
    ref={(el) => revealContainersRef.current[0] = el}
    >
      <Img src={props.img} alt="team-inner-banner" className="img-fluid w-100" />
    </div>
  )
}
