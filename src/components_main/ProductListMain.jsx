import { useState } from "react";
import ProductCardMain from "./ProductCardMain";
import "./ProductListMain.css";

const ProductListMain = () => {
/// 카테고리 함수
  const categories = {
    "1" : "카테고리",
    "2": "상의",
    "3": "아우터",
    "4": "바지",
    "5": "원피스",
    "6": "스커트",
    "7": "스니커즈",
    "8": "신발",
    "9": "기타"
  };
  const subCategories = {
    "2": ["전체", "니트/스웨터", "후드", "맨투맨/스웨트셔츠",
  "긴소매", "셔츠/블라우스", "반소메", "피케/카라", "민소매", "스포츠", "기타"],
    "3": ["전체", "후드 집업", "블루종/MA-1", "레더/라이더스", "무스탕/퍼", "트러커 재킷",
  "슈트/블레이저", "카디건", "아노락", "플리스", "트레이닝", "스타디움", "코트", "롱패딩", "숏패딩", "베스트", "사파리/헌팅", "나일론/코치", "기타"],
    "4": ["전체", "데님 팬츠", "코튼 팬츠", "슈트/슬랙스", "트레이닝/조거", "숏", "레깅스", "점프 슈트/오버올", "스포츠", "기타"],
    "5": ["전체", "미니 원피스", "미디 원피스", "맥시 원피스", "기타"],
    "6": ["전체", "미니스커트", "미디스커트", "롱스커트", "기타"],
    "7": ["전체", "캔버스/단화", "패션", "스포츠", "기타"],
    "8": ["전체", "구두", "로퍼", "힐/펌프스", "플랫 슈즈", "블로퍼", "샌들",
  "슬리퍼", "모카신/보트", "부츠", "기타"],
    "9": ["기타"]
  };
  const [selectedCategory, setSelectedCategory] = useState("1");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedSubCategory(""); // Reset subcategory when category changes
  };
  const handleSubCategoryChange = (e) => {
    setSelectedSubCategory(e.target.value);
  };

/// 브랜드 함수
  const brands = {
    "1": "Covernat",
    "2": "Adidas",
    "3": "Nike",
    "4": "기타"
  };
  const [selectedBrand, setSelectedBrand] = useState("");
  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

/// 사이즈 함수
  const sizes = {
    "1": "XS",
    "2": "S",
    "3": "M",
    "4": "L",
    "5": "XL",
    "6": "2XL",
    "7": "3XL",
    "8": "Free"
  };
  const [selectedSize, setSelectedSize] = useState("");
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

/// 사용감 함수
  const states = {
    "1": "새 상품",
    "2": "적음",
    "3": "많음",
    "4": "고장"
  };
  const [selectedState, setSelectedState] = useState("");
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

/// 가격 함수
  const prices = {
    "1": "~10,000원",
    "2": "10,000 ~ 30,000원",
    "3": "30,000 ~ 50,000원",
    "4": "50,000 ~ 100,000원",
    "5": "100,000 ~ 200,000원",
    "6": "200,000원~"
  }
  const [selectedPrice, setSelectedPrice] = useState("");
  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };
///

  return (
    <div className="mainListWrapper">
      <div className="mainListParent">
        <div className="mainListTitleWrapper">
          <input className="mainListTitle" type="text" placeholder="제목 검색" />
        </div>
        <div className="mainListTitleWrapper">
          <div className="mainList">

          

          <select className="mainListCategory"  value={selectedCategory} onChange={handleCategoryChange}>
            {Object.entries(categories).map(([key, value]) => (
              <option key={key} value={key}>{value}</option>
            ))}
          </select>
      
          {selectedCategory !== "1" && subCategories[selectedCategory] && (
            <select className="mainListCategory" value={selectedSubCategory} onChange={handleSubCategoryChange}>
              <option value="">세부 카테고리</option>
              {subCategories[selectedCategory].map((subCategory, index) => (
                <option key={index} value={subCategory}>{subCategory}</option>
            ))}
            </select>
          )}

          <select className="mainListCategory" value={selectedBrand} onChange={handleBrandChange}>
            <option value="">브랜드</option>
            {Object.entries(brands).map(([key, brand]) => {
              return (
                <option key={key} value={key}>
                  {brand}
                </option>
              );
            })}
          </select>
          
          <select className="mainListCategory" value={selectedSize} onChange={handleSizeChange}>
            <option value="">사이즈</option>
            {Object.entries(sizes).map(([key, size]) => {
              return (
                <option key={key} value={key}>
                  {size}
                </option>
              );
            })}
          </select>

          <select className="mainListCategory" value={selectedState} onChange={handleStateChange}>
            <option value="">사용감</option>
            {Object.entries(states).map(([key, state]) => {
              return (
                <option key={key} value={key}>
                  {state}
                </option>
              );
            })}
          </select>
            
          <select className="mainListCategory" value={selectedPrice} onChange={handlePriceChange}>
            <option value="">가격</option>
            {Object.entries(prices).map(([key, price]) => {
              return (
                <option key={key} value={key}>
                  {price}
                </option>
              );
            })}
          </select>

            <button className="mainSearch">
              <div className="mainSearchText"><b>검색</b></div>
            </button>
          </div>
          
        </div>
        

        {/* ProductCard 추가될 때 마다 제품 추가됨 */}
        {/* div를 추가하는 형식도 가능 */}
        <div className="mainProductList">
          <ProductCardMain />
          <ProductCardMain />
          <ProductCardMain />
          <ProductCardMain />
          <ProductCardMain />
          <ProductCardMain />
          <ProductCardMain />
          <ProductCardMain />
        </div>
        
          
        
      </div>
    </div>
  );
};

export default ProductListMain;
