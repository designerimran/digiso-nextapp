// "use client";
// import { useEffect, useLayoutEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';
// import SplitText from "gsap/SplitText";
// import ScrollTrigger from 'gsap/ScrollTrigger';

// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(ScrollTrigger, SplitText);
// }

// export default function SplitText2(props) {
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
//   }, [props.line1]);

//   return (
//     <h3 ref={TitleRef} className={`${props.cls} split-text right`}>
//       {props.line1}
//       {props.line2 && <span className="d-block">{props.line2}</span>}
//       {props.line6 && <span className="d-xl-block">{props.line6}</span>}
//       {props.line3 && <span className="cr">{props.line3}</span>}
//       {props.line4 && <span className="br">{props.line4}</span>}
//       {props.line5 && <span>{props.line5}</span>}
//     </h3>
//   );
// }

// new codes from here
"use client";
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitText from "gsap/SplitText";
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function SplitText2(props) {
  const TitleRef = useRef(null);
  
  useLayoutEffect(() => {
    // 1. Register Plugins
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger, SplitText);
    }

    let ctx;
    let timer;

    // 2. Wait for fonts to be fully loaded
    document.fonts.ready.then(() => {
      
      // 3. Add delay for reload stability
      timer = setTimeout(() => {
        
        // Safety Check: Component mounted?
        if (!TitleRef.current) return;

        // 4. Context for Cleanup
        ctx = gsap.context(() => {
          const element = TitleRef.current;
          
          // Safety Check: Text exists?
          if (!element.innerText.trim()) return;

          const split = new SplitText(element, {
            type: "lines,words,chars",
            linesClass: "tp-split-line",
          });

          // Safety Check: Chars generated?
          if (!split.chars || split.chars.length === 0) return;

          gsap.set(element, { perspective: 400 });

          let charsAnimation = { opacity: 0 };

          if (element.classList.contains('right')) {
            charsAnimation.x = "50";
          } else if (element.classList.contains('left')) {
            charsAnimation.x = "-50";
          } else if (element.classList.contains('up')) {
            charsAnimation.y = "80";
          } else if (element.classList.contains('down')) {
            charsAnimation.y = "-80";
          }

          gsap.set(split.chars, charsAnimation);

          gsap.to(split.chars, {
            scrollTrigger: {
              trigger: element,
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

    // Cleanup
    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };

  }, [props.line1, props.line2, props.line3, props.line4, props.line5, props.line6]);

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