import styles from "./SalesPost.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SalesPurchase = ({ title, price, status, created_at, 
  image_url,post_id}) => {

    const navigate = useNavigate();

    const handleClick = () => {
      navigate(`/sell`, { state: { postId: post_id } });
    };

    const handleDelete = () => {
      axios.delete(`http://127.0.0.1:8080/post/deletepost/${post_id}`)
        .then(response => {
          if (response.status === 200) {
            alert("게시글이 삭제되었습니다.");
            // setSalesData(salesData.filter(post => post.post_id !== postId));
          } else {
            alert("게시글 삭제 실패");
          }
        })
        .catch(error => {
          console.error('삭제 에러', error);
          alert("서버 오류로 게시글 삭제 실패");
        });
    }; 

    const handleEdit = () => {
      navigate(`/upload`); //게시글 수정 화면으로 이동
    };

  return (
    <div className={styles.textParent}>
      <b className={styles.text}>{` `}</b>
      <div className={styles.groupChild}>
        <img src={image_url} alt="사진" onClick={handleClick} className={styles.fixedSizeImage} />  
      </div>
      <b className={styles.bMy}>{title}</b>
      <div className={styles.divMy}>{price}원</div>
      <div className={styles.daTe}>{created_at}</div>
      <div className={styles.staTus}>{status}</div>
      <div className={styles.deleTe} onClick={handleDelete}>삭제</div>
      <div className={styles.corrEct} onClick={handleEdit}>수정</div>

    </div>
  );
};

export default SalesPurchase;
