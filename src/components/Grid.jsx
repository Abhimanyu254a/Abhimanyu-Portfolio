import React from "react"
import GridBlock from "./GridBlock";

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
            <GridBlock ClassName='middle' desciption={'Cyberpunk '}/>
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