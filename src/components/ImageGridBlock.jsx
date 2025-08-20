

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
          src="https://avatars.githubusercontent.com/u/115303576?s=400&u=592c407633b4bddc1634e83fe9c13cd02c7c925c&v=4" 
          alt="Profile" 
          style={{
            width: '100%',
            objectFit: 'cover',
            borderRadius: '8px',
            height : '215px'
          }}
        />
      </div>
    </div>
  );
}

export default ImageGridBlock;