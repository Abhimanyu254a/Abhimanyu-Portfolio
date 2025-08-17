

import React from "react";

function GridBlock({ ClassName, desciption, content, isClickable = true }) {
  return (
    <div 
      className={ClassName + "0 grid-block"} 
      style={{ 
        cursor: isClickable ? 'pointer' : 'default',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className={ClassName + "1"}>
        <h1 className={ClassName+ "-heading"}>{desciption}</h1>
      </div>
    </div>
  );
}

export default GridBlock;