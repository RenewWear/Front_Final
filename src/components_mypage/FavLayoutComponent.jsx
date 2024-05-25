import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./FavLayoutComponent.module.css";
import PostFavorite from "./PostFavorite";


const FavLayoutComponent = ({ user_id }) => {

  const [postDetails, setPostDetails] = useState([]);

  useEffect ( () => {
    //   if (user_id) {
    //     axios.get(`127.0.0.1:8080/posts/sales/{user_id}`).then(error => {
    //       setSalesData(response.data);
    //     })
    //     .catch(error => {
    //       console.error('에러 발생', error);
    //     });
    //   }
    // }, [user_id]);

    const mockPostdetails = [
      { title: '뉴발란스996',  price: 10000, user_id: 3, post_id: 3, liked_id: 5, image_url: null},
      { title: 'ㅁㄴㅇ', price: 10000, user_id: 3, post_id: 3 , liked_id: 5, image_url: null}, 
      { title: 'ㄴㅇ', price: 10000, user_id: 3, post_id: 3 , liked_id: 5, image_url: null},
      { title: 'ㄴㅇ', price: 10000, user_id: 3, post_id: 3 , liked_id: 5, image_url: null}  
    ];

    setPostDetails(mockPostdetails);
  }, [user_id]);

  const handleClick = (image_url) => {
    alert("post로 이동합니다, image_url")
  };
  return (
    <div>
        <div className="title">목록!!</div>
        <div className="container">
            <div className="menu-container">
                <div className="menu-item">정보</div>
                <div className="menu-item">게시 날짜</div>
                <div className="menu-item">상태</div>
                </div>
        </div>
        {postDetails.map((fav, index) => (
                  <PostFavorite
                  key={index}
                  price={fav.price}
                  title={fav.title}
                  onClick={()=>handleClick(fav.image_url)}
                />
                ))}
    </div>
  
  );
}

export default FavLayoutComponent;
