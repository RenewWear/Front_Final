import "./UpperSell.css";

const UpperSell = () => {
  return (
    <div className="frame-container">
      <div className="frame-div">
        <div className="wrapper1">
          <img className="product-image" src="../public/favorite.svg" alt='hi' />
        </div>
        <div className="frame-parent1">
          <div className="error-handler-parent">
            <div className="frame-parent2">
              <div className="group">
                <b className="sellElement">제목</b> 
                <span className="sellSubElement">12000원</span>
                <b className="sellElement">사용감</b>
                <span className="sellSubElement">새 상품</span>
                <b className="sellElement">브랜드</b>
                <span className="sellSubElement">Outstanding</span>
                <b className="sellElement">사이즈</b>
                <span className="sellSubElement">L</span>
                <b className="sellElement">카테고리</b>
                <span className="sellSubElement">스니커즈, 스포츠</span>
              </div>
            </div>
          </div>
          
        </div>
        <div className="double-line"></div>
      </div>
      
    </div>
  );
};

export default UpperSell;
