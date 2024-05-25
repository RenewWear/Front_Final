import React from "react";
import { useNavigate } from "react-router-dom";
import "./MyPageMenuComponent.css"


const MyPageMenuComponent = () => {
  const navigate = useNavigate(); 

  //판매내역 페이지로 이동
  const handleToSalesPage = () => {
    navigate("/mysell");
  };

  //구매내역 페이지로 이동
  const handleToPurcPage = () => {
    navigate("/mypurc");
  };

  const handleToLikePage = () => {
    navigate("/myfav");
  };

  return (
    <div className="menu-background">
      <div className="mypage-title">My Page</div>
      <img className="user-icon" alt="" src="/@2x.png" />
      <div className="name">aaa님</div>
      <div className="menu">
        <div className="item" onClick={handleToSalesPage}>판매 내역</div>
        <div className="item" onClick={handleToPurcPage}>구매 내역</div>
        <div className="item" onClick={handleToLikePage}>찜한 목록</div>
      </div>
    </div>
  );
  
}

export default MyPageMenuComponent;
