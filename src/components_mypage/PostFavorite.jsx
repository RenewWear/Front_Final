import styles from "./PostFavorite.module.css";
import { useNavigate } from "react-router-dom";


const PostFavorite = ({ title, price,image_url,onClick,status, created_at,post_id}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/sell`, { state: { postId: post_id } });
  };

  return (
    <div className={styles.textParent} >
      <b className={styles.text}>{` `}</b>
      <div className={styles.groupChild}>
        <img src={image_url} alt="사진" onClick={handleClick} className={styles.fixedSizeImage} />  
      </div>
      <div className={styles.date}>{created_at}</div>
      <div className={styles.status}>{status}</div>
      <b className={styles.b}>{title}</b> 
      <div className={styles.div}>{price}원</div> 
    </div>
  );
};

export default PostFavorite;

