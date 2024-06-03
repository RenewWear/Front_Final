import "./ProductCardMain.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCardMain = ({ title, price, tag, category, subcategory, brand, status, post_id,img_urls}) => {
  const navigate = useNavigate();

  const imgClick = () => {
      navigate(`/sell/${post_id}`);
     alert('해당 판매 페이지 이동')
  };

  return (
    <div className="mainCard">
      <div className="mainImageWrapper">
        <img className="mainImage" loading="lazy" alt="asd" src={img_urls} onClick={imgClick} />
      </div>
      <div className="mainCardTitle">{title}</div>
      <div className="mainTag">#{tag}</div>
      <div className="mainCards" style={{ fontSize: "22px" }}>{price}원</div>
      <div className="mainCards">카테고리 : {category}-{subcategory}</div>
      <div className="mainCards">브랜드 : {brand}</div>
      <div className="mainCards">사용감 : {status}</div>      
    </div>
  );
};

export default ProductCardMain;
