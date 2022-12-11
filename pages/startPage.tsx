import { Grid } from "./grid";
import  Header  from "./header";
import Loader from 'react-loader-spinner';
import { Player, PlayerEvent } from "@lottiefiles/react-lottie-player";
import { useRef } from "react";

export default function StartPage(){
    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    const playerRef = useRef<Player>(null);

    //レンダリング後(ロード後)の処理
    const endLoading = (event:PlayerEvent) => {
        if (event === "play") {
            (async () => {
                await sleep(5000); //５秒表示
                const loadingIcon = document.getElementsByClassName("loading") as HTMLCollectionOf<HTMLElement>;
                playerRef.current!.stop();
                loadingIcon[0].style.display = "none"; //ロードアイコンを消す
                
            })();
        }
    }
    
    const startPage:{[key:string]:string} = {
        height: "100%",
        width: "100%",
        zIndex: "1",
        position: "absolute",
        backgroundColor: "#FFEBC1",
        opacity: "0.9"
        
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
    
    const loadingStyle:{[key:string]:string} = {
        height: "500px",
        width: "500px",
        top: "50%",
        left: "50%",
        marginTop: "-250px",
        marginLeft: "-250px",
        position: "absolute",
        zIndex: "3",
    };

    const removeStartPage = () : void => {
        const target = document.getElementsByClassName("disappered") as HTMLCollectionOf<HTMLElement>;
        for(let i:number = 0; i<2; i++){
            target[i].style.display = "none";
        }
    }

    return( 
        <>
            <Player
            autoplay
            loop
            className="loading"
            src="https://assets1.lottiefiles.com/datafiles/DlRM2jtACyr4IX1u6l5rqtW1QWZKLCkNoBIXWeyH/loading.json"
            style={loadingStyle}
            ref={playerRef}
            onEvent={endLoading}
            />
            <button style={styleButton} onClick={removeStartPage} className="disappered">スタート</button>
            <div style={startPage} className="disappered"></div>
            <div style={{zIndex: "0",position: "absolute" , width: "100%"}}>
                {/* <Header/> */}
                <Grid/>
            </div>
        </>
        
    )
}