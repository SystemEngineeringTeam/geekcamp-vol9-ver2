import { useGetSoundPlayer } from "../hooks/useGetSoundPlayer";
import { useGetNoteList, usePlay, useStop } from '../hooks/useChordPlayer';
import { Keyboard } from './Keyboard'
import { ChordDisplay } from './ChordDisplay'
import { useState, useEffect, createContext, useRef } from "react";

export const KeySelectedContext = createContext({});
export const KeyTempSelectedContext = createContext({});
export const IsTempContext = createContext({});

export default function PianoPage(props){ //鍵盤を押すことでコードを検索できるようにする機能を実装する
    const [isSelectedArr, setIsSelectedArr] = useState([]);
    const [isTempSelectedArr, setIsTempSelectedArr] = useState([]);
    const [ isTemp, setIsTemp ] = useState(false); //false:本有効 true:仮有効
    const pianoPageStyle = { //cssを指定するためのオブジェクトを用意しておく。
        position: "absolute",
        top: "40px",
        left: "150px",
        display: "flex",
        flexFlow: "row",
        gap: "calc(10 / 430 * 100%)",
        alignItems: "center",
        width: "100%",
        padding: "32px",
    }

    const keyboardAreaStyle = {
        position: "fixed",
        top: "70px",
        left: "335px",
        width: "950px",
        height: "200px",
        backgroundColor: "#87cefa",
        zIndex: "99"
    }

    const keyboardSectionStyle = {
        zIndex: "99",
        position: "fixed",
        top: "90px",
        left: "350px",
    }

    const predictChordAreaStyle = {
        position: "absolute",
        top: "220px",
        left: "20px",
        width: "1300px",
        height: "450px",
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

    //selectが変更された時にplay実行
    const prevArrRef = useRef([]);
    const prevArr = prevArrRef.current; //前のArrを保持

    useEffect(() => {
        console.log("今の音: " + isSelectedArr);
        console.log("前の音: " + prevArr);
        prevArr
            .filter(dist1 => !(isSelectedArr
                .reduce((result, dist2) => result || (dist1 === dist2), false)))
            .forEach((dist) => {
                console.log(dist);
                StopFuncs[dist]()
            });

        isSelectedArr.sort(); //昇順ソート
        // if (isSelectedArr.length > prevArr.length)
            isSelectedArr.forEach((dist) => PlayFuncs[dist]()); //再生
        prevArrRef.current = [...isSelectedArr];console.log("今の音: " + isSelectedArr);

        /*
        console.log("前の音: " + prevArr);
        prevArr.forEach((dist) => StopFuncs[dist]()); //前の音を止める
        isSelectedArr.sort(); //昇順ソート
        if (isSelectedArr.length > prevArr.length)
            isSelectedArr.forEach((dist) => PlayFuncs[dist]()); //再生
        prevArrRef.current = [...isSelectedArr];// displayChord(isSelectedArr);
        */

    }, [isSelectedArr]);
    //[isSelectedArr]いらないっぽい //※要ります
    
    /*音を鳴らす(本)*/
    useEffect(() => {
        console.log("今の音: " + isTempSelectedArr);
        console.log("前の音: " + prevArr);
        prevArr
            .filter(dist1 => !(isTempSelectedArr
                .reduce((result, dist2) => result || (dist1 === dist2), false)))
            .forEach((dist) => {
                console.log(dist);
                StopFuncs[dist]()
            });

        isTempSelectedArr.sort(); //昇順ソート
        // if (isTempSelectedArr.length > prevArr.length)
            isTempSelectedArr.forEach((dist) => PlayFuncs[dist]()); //再生
        prevArrRef.current = [...isTempSelectedArr];console.log("今の音: " + isTempSelectedArr);

    }, [isTempSelectedArr]);

    return(
        <KeySelectedContext.Provider value={{isSelectedArr, setIsSelectedArr}}>
        <KeyTempSelectedContext.Provider value={{isTempSelectedArr, setIsTempSelectedArr}}>
        <IsTempContext.Provider value={{isTemp, setIsTemp}}>
            <div id="pianoPage" style={pianoPageStyle}>
                <div id="keyboardArea" style={keyboardAreaStyle}>
                    <div id="keyboardSection" style={keyboardSectionStyle}>
                        <Keyboard />
                    </div>
                </div>
                <div id="predictChordArea" style={predictChordAreaStyle}>
                <ChordDisplay />
                </div>
            </div>
        </IsTempContext.Provider>
        </KeyTempSelectedContext.Provider>
        </KeySelectedContext.Provider>
    )
}