import React from "react";

function ColorBlock(props) {
  return (
    <div className="colorBlock" style={{ backgroundColor: props.color }}>
      <p>{props.color}</p>
    </div>
  );
}

// Do NOT forget to export your component once you have built it!
export default ColorBlock;
