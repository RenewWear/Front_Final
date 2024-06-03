import HeaderComponent from "../components_header/HeaderComponent";
import InformationUpperUpload from "./InformationUpperUpload";
import InformationLowerUpload from "./InformationLowerUpload";
import FooterUpload from "../components_upload/FooterUpload";
import "./Upload.css";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";

const Upload = () => {
  // useLocation 훅을 사용하여 navigate로부터 받은 state에 접근
  const { state } = useLocation();
  const { postId } = state || {}; // state가 없는 경우를 대비하여 기본값 설정
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [delivery, setDelivery] = useState("");
  const [category, setCategory] = useState("");
  const [selectTrade, setSelectTrade] = useState('trad-possible');
  const [selectSize, setSelectSize] = useState('size_M'); 
  const [selectUsage, setSelectUsage] = useState('usage-little');
  const [selectedBrands, setSelectedBrands] = useState("");
  const [body, setBody] = useState("");
  const [tag, setTag] = useState("");

  return (
    <div>
      <HeaderComponent/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <main className="uploadPage">
        <section className="uploadPageDivided">
        <InformationUpperUpload 
            postId={postId}
            title={title} setTitle={setTitle}
            price={price} setPrice={setPrice}
            location={location} setLocation={setLocation}
            delivery={delivery} setDelivery={setDelivery}
            category={category} setCategory={setCategory}
            tag={tag} setTag={setTag}
        />
          <InformationLowerUpload 
            postId={postId}
            selectTrade={selectTrade} setSelectTrade={setSelectTrade}
            selectSize = {selectSize} setSelectSize={setSelectSize}
            selectUsage = {selectUsage} setSelectUsage={setSelectUsage}
            selectedBrands={selectedBrands} setSelectedBrands={setSelectedBrands}
            body = {body} setBody = {setBody} />
        </section>
      </main>
      <FooterUpload 
        postId={postId}
        title={title} 
        price={price}
        location={location}
        delivery={delivery}
        category={category}
        selectTrade={selectTrade}
        selectSize={selectSize}
        selectUsage={selectUsage}
        selectBrands={selectedBrands}
        body = {body}
        tag = {tag}
      />
    </div>
  );
};

export default Upload;