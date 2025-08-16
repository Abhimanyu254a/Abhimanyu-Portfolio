/*
=============================================================================
📄 FILE: src/components/ImageGridBlock.jsx
🔄 ACTION: REPLACE your existing ImageGridBlock.jsx file with this code
=============================================================================
*/

import React from "react";

function ImageGridBlock({ ClassName, desciption }) {
  return (
    <div 
      className={ClassName + "0 grid-block image-block"}
      style={{
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className={ClassName + "1"}>
        {/* 🔄 REPLACE /api/placeholder/200/200 with your actual image path */}
        <img 
          src="/api/placeholder/200/200" 
          alt="Profile" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '8px'
          }}
        />
      </div>
    </div>
  );
}

export default ImageGridBlock;