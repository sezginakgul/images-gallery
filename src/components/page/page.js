import React from "react";
import data from "../helper/data";

function page() {
  console.log(data);
  return (
    <div>
      <h1>Gallery</h1>
      <div>
        {data.map((image, i) => {
          return (
            <div className="container" key={i}>
              <div className="card">
                <div className="img">
                  <img src={image.src.large} alt="img" />
                </div>
                <div className="info">
                  <p>{image.photographer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default page;
