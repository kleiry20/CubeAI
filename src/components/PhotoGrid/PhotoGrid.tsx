import "./PhotoGrid.css";

const PhotoGrid = ({ imageList }: any) => {
  return (
    <>
      <div className="photo-grid-wrapper">
        {imageList.map((item: any) => (
          <div key={item.id}>
            <p>{item.id}</p>
            <img className="photo-grid" src={item.message} />
          </div>
        ))}
      </div>

      {/* <div className="photo-grid-wrapper">
        <div className="photo-grid"></div>
        <div className="photo-grid"></div>
        <div className="photo-grid"></div>
        <div className="photo-grid"></div>
        <div className="photo-grid"></div>
        <div className="photo-grid"></div>
        <div className="photo-grid"></div>
        <div className="photo-grid"></div>
        <div className="photo-grid"></div>
      </div> */}
    </>
  );
};

export default PhotoGrid;
