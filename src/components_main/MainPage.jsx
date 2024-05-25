import HeaderComponent from "../components_header/HeaderComponent";
import ProductListMain from "./ProductListMain";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div>
      <HeaderComponent />
      <section className="mainList">
        <ProductListMain />
      </section>
    </div>
  );
};

export default MainPage;
