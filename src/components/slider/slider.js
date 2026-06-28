'use client'
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import css from '../../images/slider/css-icon.svg'
import git from '../../images/slider/git-icon.svg'
import tailwind from '../../images/slider/tailwind-icon.svg'
import typeScript from '../../images/slider/typescript-icon.svg'
import js from '../../images/slider/js-logo.svg'
import reactIcon from '../../images/slider/react-icon.svg'
import htmlIcon from '../../images/slider/html-icon.svg'
import stack from '../../images/slider/stack-overflow-icon.svg'
import linkedin from '../../images/linkedIn-icon.svg'
import ghub from '../../images/github-icon.svg'

const animation = { duration: 30000, easing: (t) => t };

const Slide = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    vertical: true,
    drag: false,
    slides: {
      perView: 2
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    }
  });
  return (
    <div ref={sliderRef} className="keen-slider  border-t border-sky-300 md:border-0" style={{ height: 390 }}>
      <div className="keen-slider__slide number-slide1 flex justify-around ">
        <Image src={htmlIcon} height={100} width={100} alt="html-icon" />
        <Image src={css} height={100} width={100} alt="css-icon" />
      </div>
      <div className="keen-slider__slide number-slide2 flex justify-around">
        <Image src={js} height={100} width={100} alt="js-icon" />
        <Image src={reactIcon} height={50} width={120} alt="react-icon" />
        <Image src={typeScript} height={100} width={100} alt="css-icon" />
      </div>
      <div className="keen-slider__slide number-slide3 flex justify-around">
        <Image src={git} height={100} width={100} alt="css-icon" />
        <Image src={tailwind} height={100} width={100} alt="css-icon" />
      </div>
      <div className="keen-slider__slide number-slide4 flex justify-around">
        <Image src={ghub} height={100} width={100} alt="css-icon" />
        <Image src={stack} height={100} width={100} alt="css-icon" />
        <Image src={linkedin} height={100} width={100} alt="css-icon" />
      </div>

    </div>
  );
};

export { Slide }
