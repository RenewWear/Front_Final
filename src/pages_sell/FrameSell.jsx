
import SellPage from "../components_sell/SellPage";
import "./FrameSell.css";
import { useLocation } from 'react-router-dom';

const FrameSell = () => {
  const location = useLocation();
  const postId = location.state.postId;

  return (
    <div className="div">
      <SellPage
        postId={postId}
       />
    </div>
  );
};

export default FrameSell;
