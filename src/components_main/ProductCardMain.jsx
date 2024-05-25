import "./ProductCardMain.css";

const ProductCardMain = () => {

  const imgClick = () => {
    alert('해당 판매 글 페이지 이동');
  };

  return (
    <div className="mainCard">
      <div className="mainImageWrapper">
        <img className="mainImage" loading="lazy" alt="asd" src="/@2x.png" onClick={imgClick} />
      </div>
      <div className="mainCardTitle">뉴발 996 팝니다 @@@</div>
      <div className="mainCards" style={{ fontSize: "22px" }}>117000원</div>
      <div className="mainCards">스니커즈, 스포츠</div>
      <div className="mainCards">New Balance</div>
      <div className="mainCards">새 상품</div>      
    </div>
  );
};

export default ProductCardMain;
