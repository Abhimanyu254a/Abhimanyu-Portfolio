

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
          src="./src/asset/IMG_20241019_104502_277.jpg" 
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