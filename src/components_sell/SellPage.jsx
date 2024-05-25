import HeaderComponent from "../components_header/HeaderComponent";
import UpperSell from "../components_sell/UpperSell";
import LowerSell from "../components_sell/LowerSell";
import "./SellPage.css";

const SellPage = () => {

  const clickFavoriteButton = () => {
    alert('찜 목록에 추가 후 추가됐다고 알림');
  };

  const clickChatButton = () => {
    alert('해당 판매자와 채팅하는 페이지로 이동');
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
          <UpperSell />
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
          <LowerSell />
        </section>
      </main>
    </div>
  );
};

export default SellPage;
