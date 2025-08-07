import React from "react";

function ImageGridBlock({ ClassName , desciption, image})
{
    return(
        <div className={ ClassName }>
            <img id="fade-in-image" src={image}></img>

            {desciption}

        </div>

    );
}

export default ImageGridBlock;