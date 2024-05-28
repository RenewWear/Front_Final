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

  useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8080/api/product'); // API 엔드포인트 변경 필요
  //       setProduct(response.data);
  //     } catch (error) {
  //       console.error("API 호출 에러:", error);
  //     }
  //   };

  //   fetchData();
  // }, [user_id]);

  const mockProduct = [
    { title: '뉴발란스996',  price: 10000, size: 'L', used: 'nono', user_id:3,
    brand_id: 3, category_id: 4, location:'동작', delivery:'안됨',exchange:"안됨",
    post_id: 3, body:'sadfsdhflkasjfdhsdl;afjkasl;dfkjsa;ldkfjasld;fkjasdsadlfkjsaldfkjlajs;ldfksajd;flkㅣㅁㄴ;ㅏ얼;ㅣㅏㅁㄴ얼;ㅣ남얼;ㅣㅇㄴㅁ츠ㅟ;ㅜㅏㅓ;adsfhlaw;eflasl;fdkjv;lskafjdglfdkdkjvndskfbhadkfjvndslkfjvbndk;fjbnad;flkjvar[oghrwoiuahsdklvjdflvkjsdflkjhasdfklgjadskljvsdbnfkjadbg;krajghw;rugh;aewrghaudfkvand;ㅁ니어론미ㅏㅇ러니마어롲ㅂ댜려ㅗㅁㅈ뎌ㅗㅎ  ㅈㄷ힘뎢ㄱ헤;ㄷㄱㅈ해34ㅗㅔ9ㅅ8ㅎ9ㅔㅎㄷ괨녀ㅑㅗㅁ;나엄;s;fklvjanwr;kgjwe;gkbnfda;kjvb;fakjbvds;kfja;rkj];lfkjsa;ldkfjsal;dkfjsa;ldkfjas;lkfaskldfjsahflsㅣㅓ낭;ㅁ라ㅣ러닝ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ2932#$^$%&^*%&^(*&)(*&%^$%#$@!dkfhsk',
    img_urls:'https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grj4OJvKrLmc65T3rWiLaKlnFop_H2MLACdTFqAQnmQiDB9wZIcCoxgEmQeQUgIgHEZ3JiZmBgrQAyIhlAgI-vtCinILEoMVevPDOlJENQw4BIIMzu4hri6OkTDACYh-QJ6QAAAA?wid=850'}
  ];

  setProduct(mockProduct);
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
