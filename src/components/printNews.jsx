import React from "react";

function print(props) {
  console.log("rendernews");
  return (
    <div className="data" key={String(props.data.description)}>
      <span id="newsTitle">News</span> <br/>
      <img id="newsImg" alt="NewsImg" src={props.data.urlToImage} />
      <p id="newsArt">{props.data.title}</p>
    </div>
  );
}

export default print;
