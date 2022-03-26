import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./index.css";

const FileCard = (props) => {
  const { cardName, files, size, onClick } = props;
  return (
    <div className="itemCard" onClick={() => onClick(props)}>
      <div>
        <img
          src="https://www.pngall.com/wp-content/uploads/2018/05/Files-High-Quality-PNG.png"
          alt="file"
          width={50}
        />
      </div>
      <div className="cardInfo">
        <b> {cardName} </b>
        <br />
        <h6> {`${files.length},${size} `} </h6>
      </div>
      <BsThreeDotsVertical fontSize={25} />
    </div>
  );
};

export default FileCard;
