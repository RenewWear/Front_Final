import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostFavorite from "./PostFavorite";
import styles from "./FavLayoutComponent.module.css"
import axios from "axios";

const FavLayoutComponent = () => {

  const [postDetails, setPostDetails] = useState([]);
  const user_id = localStorage.getItem("user_id");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8080/mypage/liked/${user_id}`);
        const data = response.data.map(item => ({
          title: item.title,
          price: parseInt(item.price, 10),
          post_id: item.post_id,
          created_at: new Date(item.created_at).toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          }).replace(/\. /g, '-').replace(/\./g, ''),
          status: item.status,
          image_url: `data:image/png;base64,${item.image_blob}`
        }));
        setPostDetails(data);
      } catch (error) {
        console.error('에러 발생', error);
      }
    };
  
    fetchData();
  }, [user_id]); 

  const handleClick = (image_url) => {
    alert("post로 이동합니다", image_url);
  };
  return (
    <div>
        <div className={styles.title}>찜 목록</div>
        <div className={styles.container}>
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
                  status={fav.status}
                  created_at={fav.created_at}
                  image_url={fav.image_url}
                  post_id = {fav.post_id}
                  // onClick={()=>handleClick(fav.image_url)}
                />
                ))}
    </div>
  
  );
}

export default FavLayoutComponent;
