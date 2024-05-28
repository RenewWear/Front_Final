import Upload from "../components_upload/Upload";
import { useLocation } from 'react-router-dom';
import "./FrameUpload.css";

const FrameUpload = () => {
  // useLocation 훅을 사용하여 navigate로부터 받은 state에 접근
  const { state } = useLocation();
  const { postId } = state || {}; // state가 없는 경우를 대비하여 기본값 설정
  console.log("post_id in frame upload jsx : ",postId)

  return (
    <div className="divUpload">
      <Upload postId={postId} />
    </div>
  );
};

export default FrameUpload;
