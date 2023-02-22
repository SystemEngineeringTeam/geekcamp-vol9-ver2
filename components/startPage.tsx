import { Grid } from "./grid";
import  Header  from "./header";
import UpperHeader from "./upperHeader";
import { useState, useRef, createContext } from "react";
import { Player, PlayerEvent } from "@lottiefiles/react-lottie-player";
import { Button } from 'react-bootstrap';
import PianoPage from "./pianoPage";

export const LinedDistsContext = createContext({});
export const KeySelectedContext = createContext({});
export const KeyTempSelectedContext = createContext({});
export const SortChordArrContext = createContext({});


export default function StartPage(){
    const [mode, setMode] = useState(0); // 0:辞書モード, 1:ピアノモード upperHeaderとgridとpianoに渡す upperHeaderでsetしてその状態によってgrid, Pianoの状態を管理する
    const [ linedDistsArr, setLinedDistsArr ] = useState({}); //dist参照用連想配列
    const [sortChordArr, setSortChordArr] = useState([]); //ソート用キー配列、上に与える
    const [isSelectedArr, setIsSelectedArr] = useState([]); //本
    const [isTempSelectedArr, setIsTempSelectedArr] = useState([]); //仮
    
    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    const playerRef = useRef<Player>(null);
    const buttonEL = useRef<HTMLButtonElement>(null);
    const startPageEL = useRef<HTMLInputElement>(null);
    //レンダリング後(ロード後)の処理
    const endLoading = (event:PlayerEvent) => {
        if (event === "play") {
            (async () => {
                buttonEL.current!.style.display = 'none';//ボタン非表示
                await sleep(5000); //５秒表示
                const loadingIcon = document.getElementsByClassName("loading") as HTMLCollectionOf<HTMLElement>;
                playerRef.current!.stop();
                loadingIcon[0].style.display = "none"; //ロードアイコン非表示
                buttonEL.current!.style.display = 'inline'; //ボタン表示
                
            })();
        }
    }
    
    //スタート背景
    const startPage:{[key:string]:string} = {
        height: "100%",
        width: "100%",
        zIndex: "1",
        position: "fixed",
        backgroundColor: "#FFEBC1",
        opacity: "0.9"
        
    }

    //スタートボタン
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
    
    //ロードアイコン
    const loadingStyle:{[key:string]:string} = {
        height: "800px",
        width: "800px",
        top: "50%",
        left: "50%",
        marginTop: "-400px",
        marginLeft: "-400px",
        position: "absolute",
        zIndex: "3",
    };

    //ボタン押下
    const removeStartPage = () : void => {
        buttonEL.current!.style.display = 'none';
        startPageEL.current!.style.display = 'none';
    }

    return( 
        <>
            <SortChordArrContext.Provider value={{sortChordArr, setSortChordArr}}>
                <KeySelectedContext.Provider value={{isSelectedArr, setIsSelectedArr}}>
                    <KeyTempSelectedContext.Provider value={{isTempSelectedArr, setIsTempSelectedArr}}>
                        <LinedDistsContext.Provider value={{linedDistsArr, setLinedDistsArr}}>
                            <Player
                                autoplay
                                loop
                                className="loading"
                                src="https://assets1.lottiefiles.com/datafiles/DlRM2jtACyr4IX1u6l5rqtW1QWZKLCkNoBIXWeyH/loading.json"
                                style={
                                    loadingStyle
                                }
                                ref={
                                    playerRef
                                }
                                onEvent={
                                    endLoading
                                }
                            />

                            <Button 
                                variant="primary"
                                style={
                                    styleButton
                                } 
                                ref={
                                    buttonEL
                                }
                                onClick={
                                    removeStartPage
                                }
                                className="disappered"
                                id="startButton"
                            >
                                START
                            </Button>

                            <div style={startPage} ref={startPageEL} className="disappered"></div>
                            
                            <div className="d-flex flex-row w-100" style={{zIndex: "0",position: "absolute" , width: "100%"}}>
                                <UpperHeader setMode={setMode}/>
                                <Header/>
                                <Grid mode={mode}/>
                                <PianoPage mode={mode}/>
                            </div>
                        </LinedDistsContext.Provider>
                    </KeyTempSelectedContext.Provider>
                </KeySelectedContext.Provider>
            </SortChordArrContext.Provider>
        </>
        
    )
}