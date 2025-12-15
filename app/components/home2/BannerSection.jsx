// "use client";
// import React from 'react'
// import { useEffect, useLayoutEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';
// import SplitText from "gsap/SplitText";
// import ScrollTrigger from 'gsap/ScrollTrigger';

// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(ScrollTrigger, SplitText);
// }

// import CounterBlock from '../common/CounterBlock';
// import Img from '../common/Img';

// export default function BannerSection({bannerData}) {
//   const TitleRef = useRef(null);
  
//   useLayoutEffect(() => {
//     if (TitleRef.current) {
//       const elements = TitleRef.current;
//       const split = new SplitText(elements, {
//         type: "lines,words,chars",
//         linesClass: "tp-split-line",
//       });

//       gsap.set(elements, { perspective: 400 });

//       let charsAnimation = { opacity: 0 };

//       if (elements.classList.contains('right')) {
//         charsAnimation.x = "50";
//       } else if (elements.classList.contains('left')) {
//         charsAnimation.x = "-50";
//       } else if (elements.classList.contains('up')) {
//         charsAnimation.y = "80";
//       } else if (elements.classList.contains('down')) {
//         charsAnimation.y = "-80";
//       }

//       gsap.set(split.chars, charsAnimation);

//       gsap.to(split.chars, {
//         scrollTrigger: {
//           trigger: elements,
//           start: "top 80%",
//           once: true, 
//         },
//         x: "0",
//         y: "0",
//         rotateX: "0",
//         scale: 1,
//         opacity: 1,
//         duration: 0.5,
//         stagger: 0.02,
//       });
//     }
//   }, [bannerData.titleline1, bannerData.titleline2, bannerData.titleline3]);
//   return (
//     <section className="banner-section-two position-relative">
//       <Img src="assets/img/bg/banner-two-bg.svg" alt="banner-two-bg"
//         className="banner-two-bg z-n1 position-absolute top-0 end-0" />
//       <div className="container px-0">
//         <div className="content">
//           <div className="row">
//             <div className="col-lg-3">
//               <div className="left-content position-relative">
//                 <h4 className="wecome-text">
//                   <span className="shape d-block">
//                     <Img src="assets/img/we-provide/section-sub-title-shape.svg" alt="section-sub-title-shape" />
//                   </span>
//                   {bannerData.wlcText}
//                 </h4>
//                 <p>{bannerData.content1}
//                 </p>
//                 <div className="left-shape position-absolute">
//                   <Img src="assets/img/images/banner-two-shape-1.svg" alt="banner-two-shape" />
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-7">
//               <div className="middle-content position-relative">
//                 <h1 ref={TitleRef} className="title split-text right">
//                   <span>{bannerData.titleline1}<Img className="ms-3" src="assets/img/images/banner-two-shape-3.svg" alt="banner-two-shape-3" /></span>
//                   <span className="d-block">{bannerData.titleline2}</span>
//                   <span>{bannerData.titleline3}</span>
//                 </h1>
//                 <p className="position-absolute">{bannerData.content2}</p>
//               </div>
//             </div>
//             <div className="col-lg-2">
//               <div className="stars text-end">
//                 <Img src="assets/img/images/banner-two-shape-2.svg" alt="banner-two-shape" />
//               </div>
//             </div>
//           </div>
//           <div className="feedback-counter">
//             <div className="row">
//               <div className="col-sm-6 col-lg-2 align-self-end">
//                 <div className="feedback d-flex align-items-center">
//                   <Img className="position-relative" src="assets/img/icons/star.svg" alt="star" />
//                   <p><b>{bannerData.feedbackNum}</b>{bannerData.feedbackText}</p>
//                 </div>
//               </div>
//               <div className="col-sm-6 col-lg-3 ms-auto">
//                 <div className="counter-info position-relative">
//                   <div className="row g-3">
//                     {bannerData.counter && bannerData.counter.map((item, idx) => (
//                       <div key={idx} className="col-sm-6 col-lg-6 col-6">
//                         <CounterBlock cls="title" value={item.value} unit={item.unit} title2={item.title} />
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="image reveal zoom-out overflow-hidden">
//           <Img src={bannerData.img} alt="banner-two-img" className="img-fluid w-100" />
//         </div>
//       </div>
//     </section>
//   )
// }

// new codes from here
"use client";
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitText from "gsap/SplitText";
import ScrollTrigger from 'gsap/ScrollTrigger';

import CounterBlock from '../common/CounterBlock';
import Img from '../common/Img';

export default function BannerSection({ bannerData }) {
  const TitleRef = useRef(null);
  
  useLayoutEffect(() => {
    // 1. Register Plugins Safely
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger, SplitText);
    }

    let ctx;
    let timer;

    // 2. Wait for Fonts to Load (Fixes "SplitText called before fonts loaded")
    document.fonts.ready.then(() => {
      
      // 3. Small delay for Reload Stability (Fixes Hydration issues)
      timer = setTimeout(() => {
        
        // Safety Check
        if (!TitleRef.current) return;

        // 4. Use GSAP Context for Cleanup
        ctx = gsap.context(() => {
          const elements = TitleRef.current;
          
          // Safety: Text must exist
          if (!elements.innerText.trim()) return;

          const split = new SplitText(elements, {
            type: "lines,words,chars",
            linesClass: "tp-split-line",
          });

          // Safety: Chars must exist
          if (!split.chars || split.chars.length === 0) return;

          gsap.set(elements, { perspective: 400 });

          let charsAnimation = { opacity: 0 };

          // Your Original Logic
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

        }, TitleRef);

      }, 200); // 200ms Delay
    });

    // Cleanup Function
    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };

  }, [bannerData.titleline1, bannerData.titleline2, bannerData.titleline3]);

  return (
    <section className="banner-section-two position-relative">
      <Img src="assets/img/bg/banner-two-bg.svg" alt="banner-two-bg"
        className="banner-two-bg z-n1 position-absolute top-0 end-0" />
      <div className="container px-0">
        <div className="content">
          <div className="row">
            <div className="col-lg-3">
              <div className="left-content position-relative">
                <h4 className="wecome-text">
                  <span className="shape d-block">
                    <Img src="assets/img/we-provide/section-sub-title-shape.svg" alt="section-sub-title-shape" />
                  </span>
                  {bannerData.wlcText}
                </h4>
                <p>{bannerData.content1}
                </p>
                <div className="left-shape position-absolute">
                  <Img src="assets/img/images/banner-two-shape-1.svg" alt="banner-two-shape" />
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="middle-content position-relative">
                <h1 ref={TitleRef} className="title split-text right">
                  <span>{bannerData.titleline1}<Img className="ms-3" src="assets/img/images/banner-two-shape-3.svg" alt="banner-two-shape-3" /></span>
                  <span className="d-block">{bannerData.titleline2}</span>
                  <span>{bannerData.titleline3}</span>
                </h1>
                <p className="position-absolute">{bannerData.content2}</p>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="stars text-end">
                <Img src="assets/img/images/banner-two-shape-2.svg" alt="banner-two-shape" />
              </div>
            </div>
          </div>
          <div className="feedback-counter">
            <div className="row">
              <div className="col-sm-6 col-lg-2 align-self-end">
                <div className="feedback d-flex align-items-center">
                  <Img className="position-relative" src="assets/img/icons/star.svg" alt="star" />
                  <p><b>{bannerData.feedbackNum}</b>{bannerData.feedbackText}</p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 ms-auto">
                <div className="counter-info position-relative">
                  <div className="row g-3">
                    {bannerData.counter && bannerData.counter.map((item, idx) => (
                      <div key={idx} className="col-sm-6 col-lg-6 col-6">
                        <CounterBlock cls="title" value={item.value} unit={item.unit} title2={item.title} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image reveal zoom-out overflow-hidden">
          <Img src={bannerData.img} alt="banner-two-img" className="img-fluid w-100" />
        </div>
      </div>
    </section>
  )
}