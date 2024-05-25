import "./FavoriteMain.css";

const FavoriteMain = () => {
  return (
    <div className="mainFavorite">
      <img
        className="mainFavoriteIcon"
        loading="lazy"
        alt=""
        src="/vector-15.svg"
      />
      <div className="mainFavoriteText">{`찜한 목록 `}</div>
    </div>
  );
};

export default FavoriteMain;
