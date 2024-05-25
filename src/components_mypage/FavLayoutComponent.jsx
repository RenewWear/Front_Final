import React from "react";
import { useNavigate } from "react-router-dom";
import "./FavLayoutComponent.module.css"

const FavLayoutComponent = () => {

  return (
    <div>
        <div className="title">찜한 목록</div>
        <div className="container">
            <div className="menu-container">
                <div className="menu-item">정보</div>
                <div className="menu-item">게시 날짜</div>
                <div className="menu-item">상태</div>
        </div>
    </div>
  </div>
  );
  
}

export default FavLayoutComponent;
