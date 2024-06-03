import "./UpperSell.css";
import React, {useEffect, useState} from "react";
import axios from 'axios';

const UpperSell = ({title, price, size, used, brand_id, category_id,img_urls}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % img_urls.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + img_urls.length) % img_urls.length);
  };

  return (
    <div className="frame-container">
      <div className="frame-div">
        <div className="wrapper1">
        <img className="product-image" src={img_urls} alt='Product' />
        <div className="button-container">
        <button className="button-prev" onClick={handlePrev}>Previous</button>
        <button className="button-next" onClick={handleNext}>Next</button>
        </div>
        </div>
        <div className="frame-parent1">
          <div className="error-handler-parent">
            <div className="frame-parent2">
              <div className="group">
                <b className="sellElement">제목</b>
                <span className="sellSubElement">{title}</span>
                <b className="sellElement">가격</b> 
                <span className="sellSubElement">{price}원</span>
                <b className="sellElement">사용감</b>
                <span className="sellSubElement">{used}</span>
                <b className="sellElement">브랜드</b>
                <span className="sellSubElement">{brand_id}</span>
                <b className="sellElement">사이즈</b>
                <span className="sellSubElement">{size}</span>
                <b className="sellElement">카테고리</b>
                <span className="sellSubElement">{category_id}</span>
              </div>
            </div>
          </div>
          
        </div>
        <div className="double-line"></div>
      </div>
    </div>
  );
};

export default UpperSell;
