import "./PhotoGrid.css";

const PhotoGrid = ({ imageList }: any) => {
  return (
    <>
      <div className="photo-grid-wrapper">
        {imageList.map((item: any, index: number) => (
          <div key={index}>
            <img className="photo-grid" src={item.picture.medium} />
          </div>
        ))}
      </div>
    </>
  );
};

export default PhotoGrid;
