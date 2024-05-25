import React from "react";
import { useNavigate } from "react-router-dom";
import headerStyle from "./HeaderComponent.module.css";

import MyPageIcon from "/user.svg";
import LikeIcon from "/vector-15.svg";
import ChatIcon from "/chat_alt_2_light.svg";

const HeaderComponent = () => {
  const navigate = useNavigate(); 

  //메인페이지로 이동함수 
  const handleToMainPage = () => {
    alert("메인페이지로 이동합니다."); // 클릭 시 알람 표시
    // navigate.push("/");
  };

  //판매 내역으로 이동 
  const handleToSalesPage = () => {
    navigate("/mysell");
  }

  //마이페이지로 이동 
  const handleToMyPage = ()=> {
    navigate("/mysell");
  }

  //찜 목록으로 이동 
  const handleToLike = ()=>{
    navigate("/myfav")
  }

  //채팅 페이지로 이동 
  const handleToChatPage = ()=>{
    navigate("/chat")
  }

  //로그아웃 API 연결 
  const handleClickLogout = () =>{
    
  }


  return (
    <header className={headerStyle.header}>
      <div className={headerStyle.left}>
        <div className={headerStyle.main_title} onClick={handleToMainPage}>RenewWear</div>
      </div>
      <div className={headerStyle.right}>
        <div className={headerStyle.menu_button} onClick={handleToSalesPage}>판매하기</div>
        <div className={headerStyle.menu_button} onClick={handleToMyPage}>
          <img className={headerStyle.icon} src={MyPageIcon} alt="MyPageIcon"/>
          마이페이지
        </div>
        <div className={headerStyle.menu_button} onClick={handleToLike}>
          <img className={headerStyle.icon} src={LikeIcon} alt="LikeIcon"/>
          찜한 목록
        </div>
        <div className={headerStyle.menu_button} onClick={handleToChatPage}>
          <img className={headerStyle.icon} src={ChatIcon} alt="ChatIcon"/>
          채팅
        </div>
        <div className={headerStyle.menu_button} onClick={handleClickLogout}>로그아웃</div>
      </div>
    </header>
  );
  
}

export default HeaderComponent;
