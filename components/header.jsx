import React, { Component, useContext } from 'react'
import  DisplayCard  from "./DisplayCard";
import { useGetSoundPlayer } from "../hooks/useGetSoundPlayer";
import { useGetNoteList, usePlay, useStop } from "../hooks/useChordPlayer";
import { useEffect, useRef } from "react";
import { Button } from 'react-bootstrap';
import { LinedDistsContext } from "./startPage";
// import { KeyTempSelectedContext } from "./startPage";
import { KeySelectedContext } from "./startPage";
// import { SortChordArrContext } from "./startPage";
import { selectBoxValueContext } from "./startPage";


export const Header = () => {
    console.log("Headerレンダリング");
    const {PlayFuncs, StopFuncs} = useGetSoundPlayer();
    const { linedDistsArr, setLinedDistsArr } = useContext(LinedDistsContext);
    // const { sortChordArr, setSortChordArr } = useContext(SortChordArrContext);
    const { isSelectedArr, setIsSelectedArr } = useContext(KeySelectedContext); //本
    const {selectBoxValue, setSelectBoxValue} = useContext(selectBoxValueContext); //絞り込み
    
    // /*絞り込み方法*/ //startpageに移動
    const narDownOptions = [
        { value: "simiR", label: "類似(ルート音固定)" },
        { value: "simi", label: "類似" },
    ];

    const styleDisplayCardDummy/* : { [key: string]: string }  */= {
        position: "relative",
        top: "20px",
        left: "-7px",
        height: "30px",
        width: "120px",
        backgroundColor: "#FFFFFF",
        margin: "10px",
        fontSize: "25px",
        textAlign: "center",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius:" 8px",
        opacity: "0"
    }

    const keypressPlay = (key/* :any */) => {
        if(key.key == 'S' || key.key== 's'){
            console.log('play');
            playDisplay();
        }
    }

    const keypressClean = (key/* :any */) => {
        if(key.key == 'C' || key.key== 'c'){
            console.log('clean');
            cleanDisplay();
        }
    }

    useEffect( () => {
            document.addEventListener("keydown", keypressPlay);
            document.addEventListener("keydown", keypressClean);
            // document.addEventListener("keydown", keypressSwitch1);
            // document.addEventListener("keydown", keypressSwitch2);
            // document.addEventListener("keydown", keypressSwitch3);
            
        return (() => { //第2引数をしていしないため、再レンダリングするたびにイベントリスナーを削除する
            document.removeEventListener("keydown", keypressPlay);
            document.removeEventListener("keydown", keypressClean);
            // document.removeEventListener("keydown", keypressSwitch1);
            // document.removeEventListener("keydown", keypressSwitch2);
            // document.removeEventListener("keydown", keypressSwitch3);
        }) //第２引数に[]を指定すると動作しないバグが発生する。原因は調査中。eventlistenerが重複するから？
    },)

    

    const cleanDisplay = () =>{ //表示されている要素を全て消す
        const nowIndexArr = document.getElementsByClassName("DisplayCards"); //今の順番を取得
        const NumOfDisplayCrads = nowIndexArr.length; //今のディスプレイカードの枚数を保持する
        for(let i=0; i<NumOfDisplayCrads; i++){
            nowIndexArr[0].remove(); //一番上の要素を消すと、一個下の要素が一番上になる。つまり[0]を消し続ければ良い
        }
        setLinedDistsArr(() => []);
        setLinedDistsArr(() => []);
        
    }

    //音鳴らしてるのはここ
    const playDisplay = () => { //表示されている要素にひとつずつイベントを起こしていく
        const nowIndexArr = document.getElementsByClassName("DisplayCards"); //今の順番を取得
        const NumOfDisplayCrads = nowIndexArr.length; //今のディスプレイカードの枚数を保持する
        setSelectBoxValue(() => narDownOptions[0]); //再生したら、絞り込みをルート固定にする

        for(let i=0; i<NumOfDisplayCrads; i++) { //DisplayCardを上から順に取得して処理をしていく
            if(i == 0){ //一個目はすぐに色を変える
                nowIndexArr[i].style.backgroundColor = "orange";
                // setIsSelectedArr(() => [...linedDistsArr[i]]);
                // setIsSelectedArr(() => [...linedDistsArr[nowIndexArr[i].innerHTML]]);
                setIsSelectedArr(() => [...linedDistsArr[nowIndexArr[i].innerHTML]]);
                console.log();
            }else if(i < NumOfDisplayCrads-1){ //初回、最終回以外の処理はここ
                setTimeout( () =>{
                    nowIndexArr[i-1]/* ! */.style.backgroundColor = "#FFFFFF";
                    nowIndexArr[i]/* ! */.style.backgroundColor = "orange";
                    // setIsSelectedArr(() => [...linedDistsArr[i]]);
                    // setIsSelectedArr(() => [...linedDistsArr[nowIndexArr[i].innerHTML]]);
                    setIsSelectedArr(() => [...linedDistsArr[nowIndexArr[i].innerHTML]]);
                }, i * 1000); //二つ目は１秒、三つ目は２秒待つ... とすることで１秒ごと動作させる
            } else{ //一番後ろのディスプレイカードの処理
                setTimeout( () =>{
                    nowIndexArr[i-1]/* ! */.style.backgroundColor = "#FFFFFF";
                    nowIndexArr[i]/* ! */.style.backgroundColor = "orange";
                    // setIsSelectedArr(() => [...linedDistsArr[i]]);
                    // setIsSelectedArr(() => [...linedDistsArr[nowIndexArr[i].innerHTML]]);
                    setIsSelectedArr(() => [...linedDistsArr[nowIndexArr[i].innerHTML]]);
                }, i * 1000); //二つ目は１秒、三つ目は２秒待つ... とすることで１秒ごと動作させる
                setTimeout( () =>{
                    nowIndexArr[i]/* ! */.style.backgroundColor = "#FFFFFF";
                }, (i+1) * 1000);
            }
            
        }
        
    }

    
    

    const styleHeader/* :{[key:string]:string} */ = {
        height: "5420px",
        width: "150px",
        padding: "10px",
        backgroundColor: "#5D99C6",
        position: "absolute",
        zIndex: "1"
    }

    const styleButton/* :{[key:string]:string} */ = {
        position: "relative",
        top: "20px",
        left: "4px",
        width: "120px",
        fontSize: "10px",
    }
    
    

    return (
        <>
            <div style={styleHeader}>
                <p className="text-light font-size-1">ChordCards</p>
                <Button variant="success" style={styleButton} onClick={playDisplay} >再生<div>sキー</div></Button>
                <Button variant="danger" style={styleButton} onClick={cleanDisplay} >リセット<div>cキー</div></Button>
                <span></span>
                <ul id="lined-chords">
                <div style={styleDisplayCardDummy}></div> {/* ダミー */}
                </ul>
            </div>
            <div id="adjust"></div>
        </>
    )
};
export default Header;