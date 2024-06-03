import React, {useState, useEffect} from "react";
import HeaderComponent from "../components_header/HeaderComponent";
import { useNavigate } from 'react-router-dom';
import UpperSell from "../components_sell/UpperSell";
import LowerSell from "../components_sell/LowerSell";
import "./SellPage.css";
import axios from "axios";
import { useParams } from 'react-router-dom';

const SellPage = ({postId}) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  // const [post_id, setPostId] = useState(null);

  const brands = {
    "1": "아디다스",
    "2": "보나츠",
    "3": "트릴리온",
    "4": "라퍼지스토어",
    "5": "노스페이스",
    "6": "토피",
    "7": "반스",
    "8": "파르티멘토",
    "9": "트래블",
    "10": "나이키",
    "11": "커버낫",
    "12": "리",
    "13": "기타"
  };

  const states = {
    "usage-new": "새 상품",
    "usage-little": "적음",
    "usage-many": "많음",
    "usage-broken": "고장"
  };

  const sizes = {
    "size_XS":"XS",
    "size_S":"S",
    "size_M":"M",
    "size_L":"L",
    "size_XL":"XL",
    "size_2XL":"2XL",
    "size_3XL":"3XL",
    "size_Free":"Free"
  };

  const trades = {
    "trade-possible":"교환 가능",
    "trade-impossible":"교환 불가능"
  };

  useEffect(() => { 
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8080/post/getpost/${postId}`);
        const item = response.data;
        const data = {
          title: item.title,
          price: parseInt(item.price,10),
          brand: brands[item.brand],
          tag:item.tag,
          used:states[item.used],
          size: sizes[item.size],
          category: item.category,
          user_id: item.user_id,
          post_id: item.post_id,
          image_urls: `data:image/png;base64,${item.image_blob}`,
          delivery: item.delivery || "직거래",
          exchange: trades[item.exchange],
          location: item.location,
          status: item.status,
          body: item.body
        };
        setProduct([data]);
      } catch (error) {
        console.error("API 호출 에러:", error);
      }
    };

    fetchData();
  }, [postId]);

const clickFavoriteButton = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:8080/post/like', {
      user_id: localStorage.getItem("user_id"),
      post_id: postId 
    });
    console.log("POST 요청 성공:", response.data);
  }
  catch (error) {
    console.error("POST 요청 에러:", error);
  }
  alert('찜버튼 눌림')
};

const clickChatButton = async () => {
  try {
    await axios.get(`http://127.0.0.1:8080/chat/enter`, {
      params: {
        post_id: postId,
        sender_id: localStorage.getItem("user_id")
      }
    });
    navigate("/chat", { state: { postId } });
    // navigate(`/chat/${postId}`);
  } catch (error) {
    console.error("채팅 실패:", error);
  }
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
          brand_id={prdct.brand}
          category_id={prdct.category}
          img_urls ={prdct.image_urls}
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
