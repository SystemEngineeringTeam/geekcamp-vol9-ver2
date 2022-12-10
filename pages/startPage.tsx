import { Grid } from "./grid";
import  Header  from "./header";
import { useState, useRef } from "react";

export default function StartPage(){
    const startPage:{[key:string]:string} = {
        height: "100%",
        width: "100%",
        zIndex: "1",
        position: "absolute",
        backgroundColor: "grey",
        opacity: "0.6"
        
    }

    const styleButton:{[key:string]:string} = {
        height: "50px",
        width: "100px",
        top: "50%",
        left: "50%",
        marginTop: "-25px",
        marginLeft: "-50px",
        zIndex: "2",
        position: "absolute"
    }

    const buttonEL = useRef(null);
    const startPageEL = useRef(null);

    const removeStartPage = () : void => {
        buttonEL.current.style.display = 'none';
        startPageEL.current.style.display = 'none';
    }

    return( 
        <>
            <button style={styleButton} ref={buttonEL} onClick={removeStartPage} className="disappered">スタート</button>
            <div style={startPage} ref={startPageEL} className="disappered"></div>
            <div style={{zIndex: "0",position: "absolute"}}>
                <Header/>
                <Grid/>
            </div>
        </>
        
    )
}