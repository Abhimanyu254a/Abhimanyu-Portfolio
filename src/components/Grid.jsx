import React from "react"
import GridBlock from "./GridBlock";
import ImageGridBlock from "./ImageGridBlock";

    //width-560px;
    //height-525px;

function Grid()
{ 
    return (
        <>
        <div className="Container">
        <div className="top">
        <GridBlock  ClassName='large-top' desciption={'About me'}/>
        
        <GridBlock ClassName='small-bottom-left' desciption={'Tech_Stack'}/> 
        <GridBlock ClassName='small-bottom-right' desciption={'Certication'}/> 
        </div>
        <div className="center">
            <GridBlock  ClassName='middle-top' desciption={'Projects'}/>
            <ImageGridBlock ClassName='middle' desciption={'ME'} image ={'./src/asset/IMG_20241019_104502_277.jpg'}/>
            <GridBlock ClassName='middle-bottom' desciption={'Achievement'}/> 
            </div> 
        
        <div className="bottom">

        <GridBlock  ClassName='small-top-left' desciption={'G & L'}/>
        <GridBlock ClassName='small-top-right' desciption={'Contact'}/>


        <GridBlock ClassName='large-bottom' desciption={'Resume'}/> 
        </div>
        </div>
        </>
    );
}
export default Grid;