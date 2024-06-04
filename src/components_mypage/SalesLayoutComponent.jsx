import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./SalesLayoutComponent.css"
import axios from "axios";
import SalesPost from "./SalesPost";

const SalesLayoutComponent = () => {
  const [salesData, setSalesData] = useState([]);
  const user_id = localStorage.getItem("user_id");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8080/mypage/sales/${user_id}`);
        const data = response.data.map(item => ({
          title: item.title,
          post_id: item.post_id,
          price: parseInt(item.price, 10),
          created_at: new Date(item.created_at).toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          }).replace(/\. /g, '-').replace(/\./g, ''),
          status: item.status,
          image_url: `data:image/png;base64,${item.image_blob}`
        }));
        setSalesData(data);
      } catch (error) {
        console.error('에러 발생', error);
      }
    };
  
    fetchData();
  }, [user_id]); // 의존성 배열에 user_id를 추가해야 합니다.

  const handleEdit = (post_id) => {
    navigate(`/editpost/${post_id}`); //게시글 수정 화면으로 이동
  };


  console.log(salesData);

  return (
    <div>
      <div className="myTitle">판매 내역</div>
      <div className="myContainer">
        <div className="menu-container">
          <div className="menu-item">정보</div>
          <div className="menu-item">게시 날짜</div>
          <div className="menu-item">상태</div>
        </div>
        {salesData.map((sale, index) => (
          <SalesPost
            key={index}
            price={sale.price}
            title={sale.title}
            created_at={sale.created_at}
            status={sale.status}
            image_url={sale.image_url}
            post_id={sale.post_id}
          />
        ))}
        
      </div>
    </div>
  );
  
}

export default SalesLayoutComponent;

{/*
  "created_at": "Tue, 30 Apr 2024 18:21:27 GMT",
  "image_urls": null,
  "liked_id": 5,
  "post_id": 3,
  "price": null,
  "status": null,
  "title": null,
  "user_id": 3
*/}