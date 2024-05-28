import React from "react";
import { useNavigate } from "react-router-dom";
import headerStyle from "./HeaderComponent.module.css";
import axios from 'axios';

import MyPageIcon from "/user.svg";
import LikeIcon from "/vector-15.svg";
import ChatIcon from "/chat_alt_2_light.svg";

const HeaderComponent = () => {
  const navigate = useNavigate(); 

  //메인페이지로 이동
  const handleToMainPage = () => {
    navigate("/");
  };

  //업로드 페이지로 이동  
  const handleToSalesPage = async(event) => {
    try{
      const response = await axios.post("http://127.0.0.1:8080/post/create_postid");  //post_id 생성 & 반환 
      const postId = response.data;
      console.count("반환받은 post id :",postId)
      navigate("/upload", { state: { postId: postId } }); //반환 받은 post_id를 FrameUpload 컴포넌트에 전달 & 화면 이동 
    }catch (error){
      console.error("Error creating post id:", error);
    }
    catch (error) {
      alert("실패");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // 기본 form 제출 동작을 방지합니다.
    try {
        const requestBody = {
            "login_id": id,
            "pw": password
        };
        const response = await axios.post(`http://localhost:8080/auth/login`, requestBody);
        const userId = response.data.user_id;
        localStorage.setItem("user_id",userId);
        navigate("/");
    } catch (error) {
        alert("로그인 실패 : 없는 회원이거나 비밀번호가 틀렸습니다.");
    }
  };

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
    navigate("/login")
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
