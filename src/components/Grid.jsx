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
        <GridBlock  ClassName='middle' desciption={'Projects'}/>
        <GridBlock  ClassName='small' desciption={'Github_Linkdin'}/>
        <GridBlock ClassName='small' desciption={'Contact_Me'}/>
        </div> 
        <GridBlock ClassName='center' desciption={'Me'}/>
        <div className="bottom">

        <GridBlock ClassName='small' desciption={'Tech_Stack'}/> 
        <GridBlock ClassName='small' desciption={'Certication'}/> 
        <GridBlock ClassName='middle' desciption={'Achievement'}/> 
        <GridBlock ClassName='large-bottom' desciption={'Resume'}/> 
        </div>
        </div>
        </>
    );
}
export default Grid;