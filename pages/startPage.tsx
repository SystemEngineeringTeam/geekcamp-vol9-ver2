import { Grid } from "./grid";
import  Header  from "./header";
import Loader from 'react-loader-spinner';
import { Button } from 'react-bootstrap';

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
            <Button variant="primary" style={styleButton} onClick={removeStartPage} className="disappered">スタート</Button>
            <div style={startPage} className="disappered"></div>
            <div className="d-flex flex-row w-100" style={{zIndex: "0",position: "absolute" , width: "100%"}}>
                <Header/>
                <Grid/>
            </div>
        </>
        
    )
}