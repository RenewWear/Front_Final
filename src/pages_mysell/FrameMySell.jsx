import HeaderComponent from "../components_header/HeaderComponent";
import MyPageMenuComponent from "../components_mypage/MyPageMenuComponent";
import SalesLayoutComponent from "../components_mypage/SalesLayoutComponent";
import style from "./FrameMySell.module.css"

const FrameMySell = () => {
  return (
    <div>
      <HeaderComponent/>   {/* 헤더 */}
      <div className={style.contentContainer}>
        <div className={style.myPageMenuComponent}>
          <MyPageMenuComponent/>  {/* 사이드 메뉴 */}
        </div>
        <div className={style.purchaseLayoutComponent}>
          <SalesLayoutComponent user_id={3}/> {/* 판매 레이아웃 */}
        </div>
      </div>
    </div>
  );
};

export default FrameMySell;
