import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FrameMyFav from "./pages_myfav/FrameMyFav";
import FrameMySell from "./pages_mysell/FrameMySell";
import ChatListComponent from "./pages_chatting/ChatList";
import FrameSell from "./pages_sell/FrameSell";
import FrameMain from "./pages_main/FrameMain";
import FrameUpload from "./pages_upload/FrameUpload";
import Login from "./pages_login/Login";
import Register from "./pages_login/Register";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<FrameMain />} />
      <Route path="/mysell" element={<FrameMySell />} />
      <Route path="/myfav" element={<FrameMyFav />} />
      <Route path="/chat" element={<ChatListComponent/>} />
      <Route path="/upload" element={<FrameUpload />} />
      <Route path="/sell" element={<FrameSell />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>}/>

    </Routes>
  );
}
export default App;
