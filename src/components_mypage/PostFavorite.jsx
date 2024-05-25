import styles from "./PostFavorite.module.css";


const PostFavorite = ({ title, price,image_url,post_id=3}) => {


  return (
    <div className={styles.textParent} >
      <b className={styles.b}>{title}</b> 
      <div className={styles.div}>{price}원</div> 
    </div>
  );
};

export default PostFavorite;

