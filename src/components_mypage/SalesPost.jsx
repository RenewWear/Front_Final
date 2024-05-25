import styles from "./SalesPost.module.css";

const SalesPurchase = ({ title, price, status, created_at, 
  image_url, onClick, post_id=3}) => {
  
  
  return (
    <div className={styles.textParent}>
      <b className={styles.text}>{` `}</b>
      <div className={styles.groupChild}>
        <img src={image_url} alt="사진" onClick={onClick} />  
      </div>
      <b className={styles.bMy}>{title}</b>
      <div className={styles.divMy}>{price}원</div>
      <div className={styles.daTe}>{created_at}</div>
      <div className={styles.staTus}>{status}</div>
      <div className={styles.deleTe}>삭제</div>
      <div className={styles.corrEct}>수정</div>

    </div>
  );
};

export default SalesPurchase;
