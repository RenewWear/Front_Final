import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "./InformationLowerUpload.css";
import { useState } from 'react';

const InformationLowerUpload = ({
  selectTrade, setSelectTrade,
  selectSize, setSelectSize,
  selectUsage, setSelectUsage,
  selectedBrands, setSelectedBrands,
  body, setBody,
}) => {
  
  const handleTrade = (state) => {
    setSelectTrade(state);
    console.log(state);
  };

  const handleSize = (state) => {
    setSelectSize(state);
    console.log(state);
  };

  const handleUsage = (state) => {
    setSelectUsage(state);
    console.log(state);
  };

  const handleBody = (event) => {
    setBody(event.target.value);
    console.log(body);
  }

  const brands = {
    "1": "Covernat",
    "2": "Adidas",
    "3": "Nike",
    "4": "기타"
  };

  const handleBrandChange = (event) => {
    setSelectedBrands(event.target.value);
    console.log(selectedBrands);
  };

  return (
    <div className="task-assistant">
      <div className="div26" />
      <div className="information-retriever">
        <div className="gender">
          <h2 className="h25">사이즈</h2>
        </div>
        <div className="icon-inventory-wrapper">
          <div className="icon-inventory">
            <button className={`size_XS ${selectSize === 'size_XS' ? 'selected' : ''}`} onClick={() => handleSize('size_XS')}><b>XS</b></button>
            <div className="s-wrapper">
              <button className={`size_S ${selectSize === 'size_S' ? 'selected' : ''}`} onClick={() => handleSize('size_S')}><b>S</b></button>
            </div>
            <div className="m-wrapper">
              <button className={`size_M ${selectSize === 'size_M' ? 'selected' : ''}`} onClick={() => handleSize('size_M')}><b>M</b></button>
            </div>
            <div className="l-wrapper">
              <button className={`size_L ${selectSize === 'size_L' ? 'selected' : ''}`} onClick={() => handleSize('size_L')}><b>L</b></button>
            </div>
            <div className="xl-wrapper">
              <button className={`size_XL ${selectSize === 'size_XL' ? 'selected' : ''}`} onClick={() => handleSize('size_XL')}><b>XL</b></button>
            </div>
            <div className="xl-container">
              <button className={`size_2XL ${selectSize === 'size_2XL' ? 'selected' : ''}`} onClick={() => handleSize('size_2XL')}><b>2XL</b></button>
            </div>
            <button className={`size_3XL ${selectSize === 'size_3XL' ? 'selected' : ''}`} onClick={() => handleSize('size_3XL')}><b>3XL</b></button>
          </div>
        </div>
        <div className="stroke-set">
          <button className={`size_Free ${selectSize === 'size_Free' ? 'selected' : ''}`} onClick={() => handleSize('size_Free')}><b>Free</b></button>
        </div>
      </div>
      <div className="blend-builder">
        <div className="proximity-processor">
          <div className="aligner-assembly">
            <h2 className="h26">브랜드</h2>
            <select className="mainListCategoryyy" value={selectedBrands} onChange={handleBrandChange}>
            <option value="">브랜드</option>
            {Object.entries(brands).map(([key, brand]) => {
              return (
                <option key={key} value={key}>
                  {brand}
                </option>
              );
            })}
          </select>
          </div>
        </div>
      </div>
      <div className="path-parser">
        <div className="layer-linker">
          <h2 className="h27">사용감</h2>
          <button className={`usage-new ${selectUsage === 'usage-new' ? 'selected' : ''}`} onClick={() => handleUsage('usage-new')}><b>새 상품</b></button>
          <button className={`usage-little ${selectUsage === 'usage-little' ? 'selected' : ''}`} onClick={() => handleUsage('usage-little')}><b>적음</b></button>
          <button className={`usage-many ${selectUsage === 'usage-many' ? 'selected' : ''}`} onClick={() => handleUsage('usage-many')}><b>많음</b></button>
          <button className={`usage-broken ${selectUsage === 'usage-broken' ? 'selected' : ''}`} onClick={() => handleUsage('usage-broken')}><b>고장</b></button>
        </div>
      </div>
      
      <h2 className="h28">교환 가능 여부</h2>
      <div className="trade">
        <button className={`trade-possible ${selectTrade === 'trade-possible' ? 'selected' : ''}`} onClick={() => handleTrade('trade-possible')}><b>가능</b></button>
        <button className={`trade-impossible ${selectTrade === 'trade-impossible' ? 'selected' : ''}`} onClick={() => handleTrade('trade-impossible')}><b>불가</b></button>
      </div>

      <div className="description">
        <h2 className="h29">설명</h2>
        <Form.Group className="formgroup">
          <Form.Control as="textarea" defaultValue="" className="css-textarea" onChange={handleBody} />
        </Form.Group>
      </div>
    </div>
  );
};

export default InformationLowerUpload;
