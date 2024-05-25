import "./LowerSell.css";

const LowerSell = () => {
  return (
    <div className="frame-wrapper3">
      <div className="line-parent">
        <div className="line-div" />
        <div className="frame-wrapper4">
          <div className="frame-parent3">
            <div className="frame-wrapper5">
              <div className="frame-parent4">
                <div className="line-group">
                  <div className="frame-child1" />
                  <b className="b11">상품정보</b>
                </div>
                <div className="wrapper6">
                  <div className="div6">
                    <span className="txt">
                      <p className="product-information">
                        hi 헬ㄹ우 월드
                      </p>
                    </span>
                  </div>
                </div>
                <div className="frame-wrapper6">
                  <div className="line-container">
                    <div className="frame-child2" />
                    <div className="frame-parent5">
                      <div className="frame-wrapper7">
                        <div className="frame-parent6">
                          <div className="wrapper7">
                            <b className="b12">거래지역</b>
                          </div>
                          <b className="place">거래지역어디</b>
                        </div>
                      </div>
                      <div className="frame-parent7">
                        <div className="wrapper8">
                          <b className="b14">배송비</b>
                        </div>
                        <b className="delivery-fee">직거래 or 무료배송 (0원)</b>
                      </div>
                      <div className="frame-wrapper8">
                        <div className="frame-parent8">
                          <div className="wrapper9">
                            <b className="b16">교환가능여부</b>
                          </div>
                          <b className="trade-ok">가능/불가</b>
                        </div>
                      </div>
                    </div>
                    <div className="line-frame">
                      <div className="frame-child3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className="line-icon" loading="lazy" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowerSell;
