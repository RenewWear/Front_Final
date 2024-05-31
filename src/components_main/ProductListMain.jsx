import { useState, useEffect } from "react";
import ProductCardMain from "./ProductCardMain";
import "./ProductListMain.css";
// import axios from "axios";

const ProductListMain = ({ user_id }) => {
/// 카테고리 함수
  const categories = {
    "1": "카테고리",
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
    "2": ["니트/스웨터", "후드", "맨투맨/스웨트셔츠",
  "긴소매", "셔츠/블라우스", "반소메", "피케/카라", "민소매", "스포츠", "기타"],
    "3": ["후드 집업", "블루종/MA-1", "레더/라이더스", "무스탕/퍼", "트러커 재킷",
  "슈트/블레이저", "카디건", "아노락", "플리스", "트레이닝", "스타디움", "코트", "롱패딩", "숏패딩", "베스트", "사파리/헌팅", "나일론/코치", "기타"],
    "4": ["데님 팬츠", "코튼 팬츠", "슈트/슬랙스", "트레이닝/조거", "숏", "레깅스", "점프 슈트/오버올", "스포츠", "기타"],
    "5": ["미니 원피스", "미디 원피스", "맥시 원피스", "기타"],
    "6": ["미니스커트", "미디스커트", "롱스커트", "기타"],
    "7": ["캔버스/단화", "패션", "스포츠", "기타"],
    "8": ["구두", "로퍼", "힐/펌프스", "플랫 슈즈", "블로퍼", "샌들",
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
    "1": "아디다스",
    "2": "보나츠",
    "3": "트릴리온",
    "4": "라퍼지스토어",
    "5": "노스페이스",
    "6": "토피",
    "7": "반스",
    "8": "파르티멘토",
    "9": "트래블",
    "10": "나이키",
    "11": "커버낫",
    "12": "리",
    "13": "기타"
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
  const [salesData, setSalesData] = useState([]);
  const [originalSalesData, setOriginalSalesData] = useState([]);

  // useEffect(() => {
  //   if (user_id) {
  //     axios.get(`http://127.0.0.1:8080/post/getpost`)
  //       .then(response => {
  //         const data = response.data.map(item => ({
  //           title: item.title,
  //           price: parseInt(item.price, 10),
  //           brand: brands[item.brand_id] || "기타",
  //           tag: item.tag,
  //           used: item.used,
  //           size: item.size,
  //           category: categories[item.category_id],
  //           subcategory: "기타", // Assuming there's no subcategory in API response
  //           user_id: item.user_id,
  //           post_id: item.post_id,
  //           liked_id: item.liked_id
  //         }));
  //         setOriginalSalesData(data);
  //         setSalesData(data);
  //       })
  //       .catch(error => {
  //         console.error('에러 발생', error);
  //       });
  //   }
  // }, [user_id]);

  useEffect( () => {
 
  const mockSalesData = [
    { title: '뉴발란스996',  price: 10000, brand: '나이키', tag: "태그", used: '새 상품', size: 'M', category: '상의', subcategory: '후드', user_id: 3, post_id: 3, liked_id: 5},
    { title: '뉴발란스995',  price: 20000, brand: '나이키', tag: "태asdas그", used: '새 상품', size: 'L', category: '상의', subcategory: '후드', user_id: 3, post_id: 3, liked_id: 5},
    { title: '뉴발란스994',  price: 30000, brand: '나이키', tag: "태그", used: '새 상품', size: 'S', category: '아우터', subcategory: '후드', user_id: 3, post_id: 3, liked_id: 5},
    { title: '뉴발란스993',  price: 40000, brand: '노스페이스', tag: "태그", used: '적음', size: 'L', category: '상의', subcategory: '후드', user_id: 3, post_id: 3, liked_id: 5},
    { title: '뉴발란스992',  price: 50000, brand: '트릴리온', tag: "태그", used: '고장', size: 'XL', category: '바지', subcategory: '후드', user_id: 3, post_id: 3, liked_id: 5},
    { title: '뉴발란스992',  price: 90000, brand: '노스페이스', tag: "태그", used: '적음', size: 'L', category: '상의', subcategory: '후드', user_id: 3, post_id: 3, liked_id: 5},
    { title: '뉴발란스992',  price: 110000, brand: '트릴리온', tag: "태그", used: '적음', size: 'XL', category: '신발', subcategory: '후드', user_id: 3, post_id: 3, liked_id: 5},
    { title: '뉴발란스996',  price: 150000, brand: '노스페이스', tag: "태그", used: '고장', size: 'L', category: '상의', subcategory: '후드', user_id: 3, post_id: 3, liked_id: 5},
    { title: '뉴발란스991',  price: 230000, brand: '트래블', tag: "태그", used: '많음', size: 'L', category: '상의', subcategory: '후드', user_id: 3, post_id: 3, liked_id: 5}

  ];
  setOriginalSalesData(mockSalesData); // 원본 데이터 설정
  setSalesData(mockSalesData); // 임의의 데이터를 salesData 상태에 설정합니다.
  }, [user_id]);
  console.log(salesData);

  const handleReset = () => {
    // 필터 초기화
    setSalesData(originalSalesData); // 원본 데이터로 재설정
  };

  const handleSearch = () => {
    handleReset();
    const filteredData = originalSalesData.filter((item) => {
      let passCategory = true;
      let passSubCategory = true;
      let passBrand = true;
      let passSize = true;
      let passState = true;
      let passPrice = true;
  
      if (selectedCategory !== "1") {
        passCategory = item.category === categories[selectedCategory];
      }
  
      if (selectedSubCategory !== "") {
        passSubCategory = item.subcategory === selectedSubCategory;
      }
  
      if (selectedBrand !== "") {
        passBrand = item.brand === brands[selectedBrand];
      }
  
      if (selectedSize !== "") {
        passSize = item.size === sizes[selectedSize];
      }
  
      if (selectedState !== "") {
        passState = item.used === states[selectedState];
      }
  
      if (selectedPrice !== "") {
        const priceRanges = {
          "1": [0, 10000],
          "2": [10000, 30000],
          "3": [30000, 50000],
          "4": [50000, 100000],
          "5": [100000, 200000],
          "6": [200000, Infinity]
        };
        const [minPrice, maxPrice] = priceRanges[selectedPrice];
        passPrice = item.price >= minPrice && item.price <= maxPrice;
      }

      return passCategory && passSubCategory && passBrand && passSize && passState && passPrice;
    });
  
    setSalesData(filteredData); // 검색 결과를 상태로 업데이트

    
  };

  const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태 추가

  useEffect(() => {
    const filteredData = originalSalesData.filter((item) => {
      // 검색어를 포함하는 게시물만 필터링하는 코드 추가
      return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSalesData(filteredData); // 필터링된 결과를 상태로 업데이트
  }, [searchTerm, originalSalesData]);
  
  

  return (
    <div className="mainListWrapper">
      <div className="mainListParent">
        <div className="mainListTitleWrapper">
          <input className="mainListTitle" type="text" placeholder="제목 검색"  value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
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
            {Object.entries(brands).map(([key, value]) => {
              return (
                <option key={key} value={key}>
                  {value}
                </option>
              );
            })}
          </select>
          
          <select className="mainListCategory" value={selectedSize} onChange={handleSizeChange}>
            <option value="">사이즈</option>
            {Object.entries(sizes).map(([key, value]) => {
              return (
                <option key={key} value={key}>
                  {value}
                </option>
              );
            })}
          </select>

          <select className="mainListCategory" value={selectedState} onChange={handleStateChange}>
            <option value="">사용감</option>
            {Object.entries(states).map(([key, value]) => {
              return (
                <option key={key} value={key}>
                  {value}
                </option>
              );
            })}
          </select>
            
          <select className="mainListCategory" value={selectedPrice} onChange={handlePriceChange}>
            <option value="">가격</option>
            {Object.entries(prices).map(([key, value]) => {
              return (
                <option key={key} value={key}>
                  {value}
                </option>
              );
            })}
          </select>

            <button className="mainSearch" onClick={handleSearch}>
              <div className="mainSearchText"><b>검색</b></div>
            </button>
          </div>
          
        </div>
        

        {/* ProductCard 추가될 때 마다 제품 추가됨 */}
        {/* div를 추가하는 형식도 가능 */}
        <div className="mainProductList">
          {salesData.map((sale, index) => (
            <ProductCardMain
              key={index}
              tag={sale.tag}
              price={sale.price}
              title={sale.title}
              category={sale.category}
              subcategory={sale.subcategory}
              used={sale.used}
              size={sale.size}
              brand={sale.brand}
              />
          ))}
        </div>
        
          
        
      </div>
    </div>
  );
};



export default ProductListMain;
