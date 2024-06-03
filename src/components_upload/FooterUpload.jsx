import "./FooterUpload.css";
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';


const FooterUpload = ({
  postId,
  title,
  price,
  location,
  delivery,
  category,
  selectTrade,
  selectSize,
  selectUsage,
  selectBrands,
  body,
  tag,

}) => {
  const navigate = useNavigate(); 

  const handleClickUpload = async() => {

    const requestBody = {
      "title":title,
      "user_id": localStorage.getItem("user_id"),
      "tag": tag,
      "category": category,
      "price": price,
      "location": location,
      "size": selectSize,
      "brand": selectBrands,
      "used": selectUsage,
      "body": body,
      "status": "판매중",
      "exchange": selectTrade,
      "delivery": delivery,
    };
  
    try {
      const response = await axios.put(`http://127.0.0.1:8080/post/updatepost/${postId}`, requestBody, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        console.log('Success:', response.data);
        alert("등록 완료! 메인페이지로 이동 ");
        navigate("/");
        // 성공적으로 요청이 처리된 경우 추가 작업 수행
      } else {
        console.error('Error:', response.statusText);
        // 요청이 실패한 경우 추가 작업 수행
      }
    } catch (error) {
      console.error('Error:', error);
      // 요청 중 오류가 발생한 경우 추가 작업 수행
    }
  };

  const handleClickCancel = async() => { 

    try {
      const response = await axios.delete(`http://127.0.0.1:8080/post/deletepost/${postId}`, {
      });

      if (response.status === 200) {
        console.log('Success:', response.data);
        alert("취소 완료!");
        navigate("/");
        
        // 성공적으로 요청이 처리된 경우 추가 작업 수행
      } else {
        console.error('Error:', response.statusText);
        // 요청이 실패한 경우 추가 작업 수행
      }
    } catch (error) {
      console.error('Error:', error);
      // 요청 중 오류가 발생한 경우 추가 작업 수행
    }

  }

  return (
    <footer className="uploadFooter">
      <img className="uploadFooterLine" loading="lazy" alt="" />
      <div className="uploadFooterSize">
        <div className="uploadFooterColor">
          <br></br>
          <div className="uploadFooterEffect">
            <div className="uploadFooterPath">
              <div className="uploadSuccessWrapper">
                <button className="uploadSuccess" onClick={handleClickUpload} ><b>등록</b></button>
              </div>
              <div className="uploadFailedWrapper">
                <button className="uploadFailed" onClick={handleClickCancel}><b>취소</b></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterUpload;
