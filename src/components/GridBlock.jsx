import React from "react";

function GridBlock({ ClassName , desciption})
{
    return(
        <div className={ ClassName +"0"}>
        <div className={ ClassName +"1"}>

            {desciption}

        </div>
        </div>

    );
}

export default GridBlock;



