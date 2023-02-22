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


export const Header = () => {
    console.log("Headerレンダリング");
    const {PlayFuncs, StopFuncs} = useGetSoundPlayer();
    const { linedDistsArr, setLinedDistsArr } = useContext(LinedDistsContext);
    // const { sortChordArr, setSortChordArr } = useContext(SortChordArrContext);
    const { isSelectedArr, setIsSelectedArr } = useContext(KeySelectedContext); //本
    

    const displayCardEl1 = useRef/* <HTMLInputElement> */(null);//displaycardにアクセスするためのRef
    const displayCardEl2 = useRef/* <HTMLInputElement> */(null);//displaycardにアクセスするためのRef
    const displayCardEl3 = useRef/* <HTMLInputElement> */(null);//displaycardにアクセスするためのRef
    const displayCardEl4 = useRef/* <HTMLInputElement> */(null);//displaycardにアクセスするためのRef
    const DisplayCards = [displayCardEl1.current, displayCardEl2.current, displayCardEl3.current, displayCardEl4.current];

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
        for(let i=0; i<4; i++){
            DisplayCards[i]/* ! */.innerHTML = "";
            DisplayCards[i]/* ! */.dataset.occupied = "false";
        }
        setLinedDistsArr(() => []);
        setLinedDistsArr(() => []);
        
    }

    //音鳴らしてるのはここ
    const playDisplay = () => { //表示されている要素にひとつずつイベントを起こしていく
        const nowIndexArr = document.getElementsByClassName("DisplayCard"); //今の順番を取得
        for(let i=0; i<4; i++) { //DisplayCardを左から順に色をつけていく
            if(nowIndexArr[i]/* ! */.dataset.occupied == "false"){ //カードが無かったら処理を停止
                if(nowIndexArr[i-1] == undefined){
                    break;
                }
                setTimeout( () =>{
                    nowIndexArr[i-1]/* ! */.style.backgroundColor = "#FFFFFF";
                }, i * 1000) //選んだカードの一番後ろのオレンジ灯火を戻すための処理
                break;
            }
            if(i == 0){ //一個目はすぐに色を変える
                nowIndexArr[i]/* ! */.style.backgroundColor = "orange";
                // setIsSelectedArr(() => [...linedDistsArr[i]]);
                // setIsSelectedArr(() => [...linedDistsArr[nowIndexArr[i].innerHTML]]);
                setIsSelectedArr(() => [...linedDistsArr[nowIndexArr[i].innerHTML]]);
                console.log();
            }else if(i < 3){ //初回、最終回以外の処理はここ
                setTimeout( () =>{
                    nowIndexArr[i-1]/* ! */.style.backgroundColor = "#FFFFFF";
                    nowIndexArr[i]/* ! */.style.backgroundColor = "orange";
                    // setIsSelectedArr(() => [...linedDistsArr[i]]);
                    // setIsSelectedArr(() => [...linedDistsArr[nowIndexArr[i].innerHTML]]);
                    setIsSelectedArr(() => [...linedDistsArr[nowIndexArr[i].innerHTML]]);
                }, i * 1000); //二つ目は１秒、三つ目は２秒待つ... とすることで１秒ごと動作させる
            } else if(i == 3){
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
        height: "750px",
        width: "150px",
        padding: "10px",
        backgroundColor: "#5D99C6",
        position: "fixed",
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
                < DisplayCard ref={displayCardEl1}/>
                < DisplayCard ref={displayCardEl2}/>
                < DisplayCard ref={displayCardEl3}/>
                < DisplayCard ref={displayCardEl4}/>
                </ul>
            </div>
            <div id="adjust"></div>
        </>
    )
};
export default Header;