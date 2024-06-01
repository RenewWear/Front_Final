import React, {useState, useEffect} from "react";
import HeaderComponent from "../components_header/HeaderComponent";
import { useNavigate } from 'react-router-dom';
import UpperSell from "../components_sell/UpperSell";
import LowerSell from "../components_sell/LowerSell";
import "./SellPage.css";
import axios from "axios";

const SellPage = ({user_id}) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [post_id, setPostId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('127.0.0.1:8080/post/getpost/{post_id}'); // API 엔드포인트 변경 필요
        setProduct(response.data);
      } catch (error) {
        console.error("API 호출 에러:", error);
      }
    };

    fetchData();
  }, [user_id]);

const clickFavoriteButton = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:8080/post/like', {
      user_id: user_id,
      post_id: post_id 
    });
    console.log("POST 요청 성공:", response.data);
  }
  catch (error) {
    console.error("POST 요청 에러:", error);
  }
  alert('찜버튼 눌림')
};

const clickChatButton = () => {
  navigate("/chat");
};
  
  return (
    <div>
      <HeaderComponent />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <main className="inner">
        <section className="frame-parent">
        {product.map((prdct,index)=>(
        <UpperSell
        key={index}
        title={prdct.title}
        price={prdct.price}
        size={prdct.size}
        used={prdct.used}
        brand_id={prdct.brand_id}
        category_id={prdct.category_id}
        img_urls ={prdct.img_urls}
        />
      ))}
          <div className="frame-wrapper">
            <div className="frame-group">
              <button className="button-favorite" onClick={clickFavoriteButton}>
                <b className="bFav">찜</b>
              </button>
              <button className="button-chat" onClick={clickChatButton}>
                <b className="bChat">채팅</b>
              </button>
            </div>
          </div>
          {product.map((prdct,index)=>(
            <LowerSell
            key={index}
            location={prdct.location}
            delivery={prdct.delivery}
            exchange={prdct.exchange}
            body={prdct.body}
          />
        ))}
        </section>
      </main>
    </div>
  );
};

export default SellPage;
