/*
=============================================================================
📄 FILE: src/components/GridBlock.jsx
🔄 ACTION: REPLACE your existing GridBlock.jsx file with this code
=============================================================================
*/

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
        {desciption}
      </div>
    </div>
  );
}

export default GridBlock;