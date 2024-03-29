import { useGetSoundPlayer } from "../hooks/useGetSoundPlayer";
// import { useGetNoteList, usePlay, useStop } from '../hooks/useChordPlayer';
import { Keyboard } from './Keyboard'
import { ChordDisplay } from './ChordDisplay'
import PianoControler from "./PianoControler"
import SearchModeSelector from "./SearchModeSelector"
import { useState, useEffect, createContext, useRef } from "react";

export const IsTempContext = createContext({});

export default function PianoPage(props){ //鍵盤を押すことでコードを検索できるようにする機能を実装する
    const [ isTemp, setIsTemp ] = useState(false); //false:本有効 true:仮有効
    const pianoPageStyle = { //cssを指定するためのオブジェクトを用意しておく。
        position: "absolute",
        top: "40px",
        left: "150px",
        display: "flex",
        flexFlow: "row",
        gap: "calc(10 / 430 * 100%)",
        alignItems: "center",
        width: "1000px",
        padding: "32px",
    }

    const keyboardAreaStyle = {
        position: "fixed",
        top: "60px",
        left: "150px",
        width: "1300px",
        height: "250px",
        backgroundColor: "#87cefa",
        zIndex: "99"
    }

    const keyboardSectionStyle = {
        zIndex: "99",
        position: "fixed",
        top: "90px",
        left: "200px",
    }

    const predictChordAreaStyle = {
        position: "absolute",
        top: "300px",
        left: "20px",
        width: "1265px",
        height: "450px",
    }
    const PianoControlerStyle = {
        zIndex: "99",
        position: "fixed",
        top: "90px",
        left: "1100px",
        display: "flex"
    }
    const SearchModeSelectorStyle = {
        zIndex: "99",
        position: "fixed",
        top: "270px",
        left: "180px",
    }

    if(props.mode == 1){//modeはupperHeaderで決まる //windowやdocumentはブラウザで実行する時にしか使えない定数のため、
                                                  //それらをサーバー上で実行する際にはエラーになってしまう。エラー回避のために
        if(typeof(window) === "object"){          //typeof(window) === "object"を書いてある
            document.body.style.backgroundColor = "rgb(166, 225, 255)";
        }
    }else{
        pianoPageStyle["display"] = "none";
    }

    const { PlayFuncs, StopFuncs } = useGetSoundPlayer();
    // const getNoteList = useGetNoteList();
    // const playChord = usePlay(PlayFuncs);
    // const stopChord = useStop(StopFuncs); //今回はコードセットではなく、単音で鳴らすため使わんかも

    

    return(
        <IsTempContext.Provider value={{isTemp, setIsTemp}}>
            <div id="pianoPage" style={pianoPageStyle}>
                <div id="keyboardArea" style={keyboardAreaStyle}>
                    <div id="keyboardSection" style={keyboardSectionStyle}>
                        <Keyboard />
                    </div>
                    <div style={PianoControlerStyle}>
                        <PianoControler/>
                    </div>
                    <div style={SearchModeSelectorStyle}>
                        <SearchModeSelector/>
                    </div>
                </div>
                <div id="predictChordArea" style={predictChordAreaStyle}>
                <ChordDisplay />
                </div>
            </div>
        </IsTempContext.Provider>
    )
}