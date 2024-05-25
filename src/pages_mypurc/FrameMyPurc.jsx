import PurchaseHistory from "../components_mypurc/PurchaseHistory";
import Favorites from "../components_mypurc/Favorites";
import SaleHistory from "../components_mypurc/SaleHistory";
import WithDraw from "../components_mypurc/WithDraw";
import ToMainPage from "../components_mypurc/ToMainPage";
import MyPage from "../components_mypurc/MyPage";
import Save from "../components_mypurc/Save";
import Chat from "../components_mypurc/Chat";
import LogOut from "../components_mypurc/LogOut";
import Sell from "../components_mypurc/Sell";
import styles from "./FrameMyPurc.module.css";
import PostPurchase from "../components_mypurc/PostPurchase";

const FrameMyPurc = () => {
  return (
    <div className={styles.div}>
      <div className={styles.child} />
      <div className={styles.item} />
      <PurchaseHistory />
      <Favorites />
      <SaleHistory />
      <img className={styles.icon} alt="" src="/@2x.png" />
      <div className={styles.aaaa}>
        <span className={styles.aaaa1}>aaaa</span>
        <span>{`님 `}</span>
      </div>
      {/*<div className={styles.div1}>판매 내역</div>
      <div className={styles.div2}>구매 내역</div>
  <div className={styles.div3}>관심 목록</div>*/}
      <div className={styles.myPage}>My Page</div>
      <div className={styles.div4}>
        <WithDraw />
        <div className={styles.div5}>회원 탈퇴</div>
      </div>
      <div className={styles.div6}>구매 내역</div>
      <div className={styles.inner} />
      <div className={styles.top}>
        <ToMainPage />
      </div>
      <div className={styles.text}>{` `}</div>
      {/* Post7로 구현 가능 */}
      {/* PostPurchase */}
      <PostPurchase />
      <PostPurchase />
      <PostPurchase />
      <PostPurchase />
      <PostPurchase />
      <div className={styles.text1}>{` `}</div>
      <div className={styles.shopaccount}>
        <div className={styles.account}>
          <img className={styles.userIcon} alt="" src="/user.svg" />
          <MyPage />
        </div>
        <div className={styles.shopping}>
          <img className={styles.bagAltIcon} alt="" src="/bag-alt.svg" />
          <div className={styles.shoping} />
        </div>
      </div>
      <div className={styles.favorite}>
        <img className={styles.favoriteChild} alt="" src="/vector-15.svg" />
        <div className={styles.div7}>{`찜한 목록 `}</div>
      </div>
      <Save />
      <div className={styles.div8}>
        <img
          className={styles.chatAlt2LightIcon}
          alt=""
          src="/chat-alt-2-light.svg"
        />
        <Chat />
      </div>
      <div className={styles.div9}>
        <LogOut />
      </div>
      <div className={styles.div10}>
        <Sell />
      </div>
    </div>
  );
};

export default FrameMyPurc;
