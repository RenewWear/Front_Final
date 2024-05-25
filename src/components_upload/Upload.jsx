import HeaderComponent from "../components_header/HeaderComponent";
import InformationUpperUpload from "./InformationUpperUpload";
import InformationLowerUpload from "./InformationLowerUpload";
import FooterUpload from "../components_upload/FooterUpload";
import "./Upload.css";

const Upload = () => {
  return (
    <div>
      <HeaderComponent />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <main className="uploadPage">
        <section className="uploadPageDivided">
          <InformationUpperUpload />
          <InformationLowerUpload />
        </section>
      </main>
      <FooterUpload />
    </div>
  );
};

export default Upload;