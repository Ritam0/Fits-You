import React, { useState } from 'react'
import './ImageSlide.css';

const ImageSlide = ({slides}) => {
  const[curIndex,setCurIndex]=useState(0);
  const slide={
    height:"100%",
    position: "relative",
  };
  const slideStyles={
    height:"100%",
    width:"100%",
    borderRadius:"10px",
    backgroundSize:"cover",
    backgroundPosition:"center",
    backgroundImage:`url(${slides[curIndex].url})`,
  };
  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };
  
  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };
  const goToPrevious = () => {
    const isFirstSlide = curIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : curIndex - 1;
    setCurIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = curIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : curIndex + 1;
    setCurIndex(newIndex);
  };

  return (
    <div style={slide} >
      <div onClick={goToPrevious} style={leftArrowStyles} className='btn'>❰</div>
      <div onClick={goToNext} style={rightArrowStyles}className='btn'>❱</div>
      <div style={slideStyles}></div>
    </div>
  )
}

export default ImageSlide
