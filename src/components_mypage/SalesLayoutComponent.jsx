import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./SalesLayoutComponent.css"
import axios from "axios";
import SalesPost from "./SalesPost";

const SalesLayoutComponent = ({ user_id }) => {
  const [salesData, setSalesData] = useState([]);


  useEffect( () => {
  //   if (user_id) {
  //     axios.get(`127.0.0.1:8080/posts/sales/{user_id}`).then(error => {
  //       setSalesData(response.data);
  //     })
  //     .catch(error => {
  //       console.error('에러 발생', error);
  //     });
  //   }
  // }, [user_id]);


  const mockSalesData = [
    { title: '뉴발란스996',  price: 10000, created_at: '2024-05-24', status: '판매 중', user_id: 3, post_id: 3, liked_id: 5, image_url: null},
    { title: 'ㅁㄴㅇ', price: 10000, created_at: '2024-05-25', status: '판매 중', user_id: 3, post_id: 3 , liked_id: 5, image_url: null}, 
    { title: 'ㄴㅇ', price: 10000, created_at: '2024-05-26', status: '판매 중', user_id: 3, post_id: 3 , liked_id: 5, image_url: null},
    { title: 'ㄴㅇ', price: 10000, created_at: '2024-05-26', status: '판매 중', user_id: 3, post_id: 3 , liked_id: 5, image_url: null}  
  ];
  setSalesData(mockSalesData); // 임의의 데이터를 salesData 상태에 설정합니다.
  }, [user_id]);


  const handleClick = (image_url) => {
    alert("post로 이동합니다", image_url);
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
            onClick={() => handleClick(sale.image_url)}
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