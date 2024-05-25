import "./FooterUpload.css";

const showAlert_b1 = () => {
  alert("등록 완료! 해당 글 페이지로 이동");
};

const showAlert_b2 = () => {
  alert("취소 완료! 마이페이지로 이동");
};

const FooterUpload = () => {
  return (
    <footer className="uploadFooter">
      <img className="uploadFooterLine" loading="lazy" alt="" />
      <div className="uploadFooterSize">
        <div className="uploadFooterColor">
          <br></br>
          <div className="uploadFooterEffect">
            <div className="uploadFooterPath">
              <div className="uploadSuccessWrapper">
                <button className="uploadSuccess" onClick={showAlert_b1}><b>등록</b></button>
              </div>
              <div className="uploadFailedWrapper">
                <button className="uploadFailed" onClick={showAlert_b2}><b>취소</b></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterUpload;
