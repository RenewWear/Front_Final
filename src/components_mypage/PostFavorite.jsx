import styles from "./PostFavorite.module.css";


const PostFavorite = ({ title, price,image_url,onClick,status, created_at,post_id=3}) => {


  return (
    <div className={styles.textParent} >
      <b className={styles.text}>{` `}</b>
      <div className={styles.groupChild}>
        <img src={image_url} alt="사진" onClick={onClick} />  
      </div>
      <div className={styles.date}>{created_at}</div>
      <div className={styles.status}>{status}</div>
      <b className={styles.b}>{title}</b> 
      <div className={styles.div}>{price}원</div> 
    </div>
  );
};

export default PostFavorite;

