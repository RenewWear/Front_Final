import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "./InformationUpperUpload.css";
import { useState } from 'react';

const InformationUpperUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(URL.createObjectURL(imageFile));
  };

  const handleClick = () => {
    // 파일 선택 버튼 클릭 시 input 요소를 활성화
    document.getElementById('fileInput').click();
  };


{/* 가격, 거래 희망 장소 관련 버튼들 */}
  const [active_delivery, setActive_delivery] = useState(false);

  const buttonClick_delivery = () => {
    setActive_delivery(!active_delivery);
  }
{/**/}
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


  return (
    <div className="frame-container">
      <div className="frame-div">
        <div className="frame-parent1-upload">
          <div className="frame-parent2-upload">
            <div className="parent" style={{ position: 'relative', width: '100%', height: '100%' }}>
              <h2 className="xxx-xxx-container" onClick={handleClick} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                <span className="xxx-xxx-container1">
                  {selectedImage && (
                    <div style={{maxWidth: '500px', maxHeight: '500px', objectFit: 'contain', width: '100%', height: '100%', position: 'relative' }}>
                      <img src={selectedImage} alt="Uploaded" style={{width: '100%', height: '100%', objectFit: 'cover'}} /> 
                    </div>
                  )}
                  <input type="file" accept="image/*" onChange={handleImageChange} style={{display: 'none'}} id='fileInput' />    
                </span>
              </h2>
            </div>
            <p style={{fontSize: '12px'}}>사진 등록 (위 박스 클릭) </p>
          </div>
          <div className="frame-wrapper1">
            <div className="frame-parent3-upload">
              <div className="logical-operators-wrapper">
                <div className="logical-operators">
                  <div className="logical-operators-inner">
                    <div className="frame-parent4-upload">
                      <div className="data-aggregator-parent">
                        <div className="data-aggregator">
                          <h2 className="h2"> 제목</h2>
                          <div className="shape-array">
                            <Form className="connection-nexus">
                              <Form.Control className='colors' type="text" />
                            </Form>
                          </div>
                        </div>
                        <div className="pattern-finder">
                          <div className="image-cluster">
                            <h2 className="h21">카테고리</h2>
                            <select className="mainListCategoryy"  value={selectedCategory} onChange={handleCategoryChange}>
                            {Object.entries(categories).map(([key, value]) => (
                              <option key={key} value={key}>{value}</option>
                             ))}
                            </select>
      
                            {selectedCategory !== "1" && subCategories[selectedCategory] && (
                              <select className="mainListCategoryy" value={selectedSubCategory} onChange={handleSubCategoryChange}>
                                <option value="">세부 카테고리</option>
                                {subCategories[selectedCategory].map((subCategory, index) => (
                                  <option key={index} value={subCategory}>{subCategory}</option>
                              ))}
                              </select>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="instruction-tree">
                    <h2 className="h22">가격</h2>
                    <div className="connection-matrix">
                      <div className="event-dispatcher">
                        <Form.Control className='colors'type="number" placeholder="숫자만 입력하시오" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="queue-manager">
                <div className="graph-creator">
                  <h2 className="h23">거래 희망 장소</h2>    
                </div>
                <div className="database-access">
                <Form.Control className='colors' type="text" />
                  <div className="place">
                    <div className="div17">
                      <button 
                      className={active_delivery ? "price-negotiate active" : "price-negotiate"}
                      onClick={buttonClick_delivery}>택배 거래</button>
                    </div>
                    <Form className="delivery-fee">
                      <div className="delivery-text">배송비</div>
                      <Form.Control className='colors' 
                      type="number" disabled={!active_delivery}
                      placeholder="숫자만 입력하시오" />
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationUpperUpload;
