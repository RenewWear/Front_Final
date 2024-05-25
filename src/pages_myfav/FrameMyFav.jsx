import HeaderComponent from "../components_header/HeaderComponent";
import MyPageMenuComponent from "../components_mypage/MyPageMenuComponent";
import FavLayoutComponent from "../components_mypage/FavLayoutComponent";
import style from "./FrameMyFav.module.css"

const FrameMyFav = () => {
  return (
    <div>
      <HeaderComponent/>   {/* 헤더 */}
      <div className={style.contentContainer}>
        <div className={style.myPageMenuComponent}>
          <MyPageMenuComponent/>  {/* 사이드 메뉴 */}
        </div>
        <div className={style.favLayoutComponent}>
          <FavLayoutComponent/> {/* 판매 레이아웃 */}
        </div>
      </div>
    </div>
  );
};

export default FrameMyFav;
