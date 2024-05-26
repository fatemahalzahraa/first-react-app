import React from "react";

const Card = ({ name, image, price }) => {
  return (
    //note that the curly brackets refers to the info. (ask ALI why??)
    <div
      style={{
        border: "1px black solid",
      }}
    >
      {/* image */}
      <div style={{ width: "200px", height: "200px" }}>
        <img
          src={image}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      {/* info */}
      <div>
        <h1>{name}</h1>
        <h4>{price}</h4>
      </div>
    </div>
  );
};

export default Card;
