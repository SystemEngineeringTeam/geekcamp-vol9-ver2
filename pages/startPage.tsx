import { Grid } from "./grid";
import  Header  from "./header";

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

    const removeStartPage = () : void => {
        const target = document.getElementsByClassName("disappered") as HTMLCollectionOf<HTMLElement>;
        for(let i:number = 0; i<2; i++){
            target[i].style.display = "none";
        }
    }

    return( 
        <>
            <button style={styleButton} onClick={removeStartPage} className="disappered">スタート</button>
            <div style={startPage} className="disappered"></div>
            <div style={{zIndex: "0",position: "absolute"}}>
                <Header/>
                <Grid/>
            </div>
        </>
        
    )
}