import "./ProductCardMain.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCardMain = ({ title, price, tag, category, used, brand, status, post_id,img_urls}) => {
  const navigate = useNavigate();

  const imgClick = () => {
    navigate(`/sell`, { state: { postId: post_id } });
  };

  const categorySplit = category ? category.split(',') : [];
  // 첫 번째 요소는 category로 사용
  const cat = categorySplit[0];
  // 나머지 요소들은 subcategory로 조합
  const subcat = categorySplit.slice(1).join(',');
  return (
    <div className="mainCard">
      <div className="mainImageWrapper">
        <img className="mainImage" loading="lazy" alt="asd" src={img_urls} onClick={imgClick} />
      </div>
      <div className="mainCardTitle">{title}</div>
      <div className="mainTag">#{tag}</div>
      <div className="mainCards" style={{ fontSize: "22px" }}>{price}원</div>
      <div className="mainCards">카테고리 : {cat} - {subcat}</div>
      <div className="mainCards">브랜드 : {brand}</div>
      <div className="mainCards">사용감 : {used}</div>      
    </div>
  );
};

export default ProductCardMain;
