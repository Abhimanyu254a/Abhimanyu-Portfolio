

import React from "react";

function GridBlock({ ClassName, desciption, preview, isClickable = true }) {
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
        <div className={ClassName+ "2"}>
        <div ><p className={ClassName+ "-h1"}>{desciption}</p></div>
        <div><p className={ClassName+"-h2"}>{preview}</p></div>
      </div>
      </div>
    </div>
  );
}

export default GridBlock;