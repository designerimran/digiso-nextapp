"use client";
import { useEffect, useRef} from 'react';
import { gsap, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import 'magnific-popup';
import $ from 'jquery';
import Link from 'next/link';
import Img from './Img';


if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function VideoSection(props) {
  
  useEffect(() => {

    let hoverBtns = gsap.utils.toArray(".custom-wrapper-hover");
    const hoverBtnItem = gsap.utils.toArray(".custom-inner-hover");

    hoverBtns.forEach((btn, i) => {
      $(btn).mousemove(function (e) {
        callParallax(e);
      });

      function callParallax(e) {
        parallaxIt(e, hoverBtnItem[i], 40);
      }

      function parallaxIt(e, target, movement) {
        let $this = $(btn);
        let relX = e.pageX - $this.offset().left;
        let relY = e.pageY - $this.offset().top;

        gsap.to(target, 1, {
          x: ((relX - $this.width() / 2) / $this.width()) * movement,
          y: ((relY - $this.height() / 2) / $this.height()) * movement,
          ease: Power2.easeOut,
        });
      }

      $(btn).mouseleave(function (e) {
        gsap.to(hoverBtnItem[i], 1, {
          x: 0,
          y: 0,
          ease: Power2.easeOut,
        });
      });
    });

  }, []);


  const revealContainersRef = useRef([]);
  const parentContainerRef = useRef(null);
  useGSAP(() => {
    let revealContainers = document.querySelectorAll(".reveal");
		revealContainers.forEach((container) => {
			let image = container.querySelector("img");
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: container,
					toggleActions: "play none none none"
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
  }, { scope: revealContainersRef });


  useEffect(() => {
    
    // Magnific Popup for videos
    $('.vidplay').magnificPopup({
      type: 'iframe',
      iframe: {
        markup: '<div class="mfp-iframe-scaler">' +
          '<div class="mfp-close"></div>' +
          '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
          '</div>',
        patterns: {
          youtube: {
            index: 'youtube.com/',
            id: 'v=',
            src: 'https://www.youtube.com/embed/%id%?autoplay=1'
          },
        },
        srcAction: 'iframe_src',
      }
    });

  }, []);

  return (
    <div className={`${props.cls}`} ref={parentContainerRef}>
      <div
        className="video-section reveal zoom-out"
        ref={(el) => revealContainersRef.current[0] = el}
      >
        <div className="image position-relative">
          <Img src={props.img} alt="video-image" className="img-fluid w-100" />
          <div className="play position-absolute top-50 start-50 translate-middle custom-wrapper-hover" >
            <Link className="vidplay position-relative custom-inner-hover" href={`${props.video}`}>
              <Img src="/assets/img/images/video-play-img.png" alt="play-button" className="img-fluid w-100" />
              <span className="position-absolute top-50 start-50 translate-middle text-uppercase">{props.btn}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

