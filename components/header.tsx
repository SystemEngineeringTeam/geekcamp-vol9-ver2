import React, { Component } from 'react'
import  DisplayCard  from "./displayCard";
import { useGetSoundPlayer } from "../hooks/useGetSoundPlayer";
import { useGetNoteList, usePlay, useStop } from "../hooks/useChordPlayer";
import { useEffect, useRef } from "react";
import { Button } from 'react-bootstrap';

export const Header = () =>{

    console.log("Headerレンダリング");

    const displayCardEl1 = useRef<HTMLInputElement>(null);//displaycardにアクセスするためのRef
    const displayCardEl2 = useRef<HTMLInputElement>(null);//displaycardにアクセスするためのRef
    const displayCardEl3 = useRef<HTMLInputElement>(null);//displaycardにアクセスするためのRef
    const displayCardEl4 = useRef<HTMLInputElement>(null);//displaycardにアクセスするためのRef
    const DisplayCards = [displayCardEl1.current, displayCardEl2.current, displayCardEl3.current, displayCardEl4.current];

    const keypressPlay = (key:any) => {
        if(key.key == 'S' || key.key== 's'){
            console.log('play');
            playDisplay();
        }
    }

    const keypressClean = (key:any) => {
        if(key.key == 'C' || key.key== 'c'){
            console.log('clean');
            cleanDisplay();
        }
    }

    const keypressSwitch1 = (key:any) => {
        if(key.key == '1' || key.key== '!'){
            console.log('switch1');
            const temp_state = DisplayCards[0]?.dataset.occupied;
            const temp_html = DisplayCards[0]?.innerHTML;
            DisplayCards[0]!.innerHTML = DisplayCards[1]?.innerHTML || "";
            DisplayCards[0]!.dataset.occupied = DisplayCards[1]?.dataset.occupied;
            DisplayCards[1]!.innerHTML = temp_html || "";
            DisplayCards[1]!.dataset.occupied = temp_state;
        }
    }

    const keypressSwitch2 = (key:any) => {
        if(key.key == '2' || key.key== '@'){
            console.log('switch2');
            const temp_state = DisplayCards[1]?.dataset.occupied;
            const temp_html = DisplayCards[1]?.innerHTML;
            DisplayCards[1]!.innerHTML = DisplayCards[Number(1)+1]?.innerHTML || "";
            DisplayCards[1]!.dataset.occupied = DisplayCards[Number(1)+1]?.dataset.occupied;
            DisplayCards[Number(1)+1]!.innerHTML = temp_html || "";
            DisplayCards[Number(1)+1]!.dataset.occupied = temp_state;
        }
    }

    const keypressSwitch3 = (key:any) => {
        if(key.key == '3' || key.key== '#'){
            console.log('switch3');
            const temp_state = DisplayCards[2]?.dataset.occupied;
            const temp_html = DisplayCards[2]?.innerHTML;
            DisplayCards[2]!.innerHTML = DisplayCards[Number(2)+1]?.innerHTML || "";
            DisplayCards[2]!.dataset.occupied = DisplayCards[Number(2)+1]?.dataset.occupied;
            DisplayCards[Number(2)+1]!.innerHTML = temp_html || "";
            DisplayCards[Number(2)+1]!.dataset.occupied = temp_state;
        }
    }

    useEffect( () => {
            document.addEventListener("keydown", keypressPlay);
            document.addEventListener("keydown", keypressClean);
            document.addEventListener("keydown", keypressSwitch1);
            document.addEventListener("keydown", keypressSwitch2);
            document.addEventListener("keydown", keypressSwitch3);
        return (() => { //第2引数をしていしないため、再レンダリングするたびにイベントリスナーを削除する
            document.removeEventListener("keydown", keypressPlay);
            document.removeEventListener("keydown", keypressClean);
            document.removeEventListener("keydown", keypressSwitch1);
            document.removeEventListener("keydown", keypressSwitch2);
            document.removeEventListener("keydown", keypressSwitch3);
        }) //第２引数に[]を指定すると動作しないバグが発生する。原因は調査中。eventlistenerが重複するから？
    },)


    const {PlayFuncs, StopFuncs} = useGetSoundPlayer();
    const getNoteList = useGetNoteList();
    const playChord = usePlay(PlayFuncs);
    const stopChord = useStop(StopFuncs);

    const cleanDisplay = () =>{ //表示されている要素を全て消す
        for(let i=0; i<4; i++){
            DisplayCards[i]!.innerHTML = "";
            DisplayCards[i]!.dataset.occupied = "false";
        }
        
    }

    const playDisplay = () =>{ //表示されている要素にひとつずつイベントを起こしていく
        for(let i=0; i<4; i++){ //DisplayCardを左から順に色をつけていく
            if(DisplayCards[i]!.dataset.occupied == "false"){ //カードが無かったら処理を停止
                if(DisplayCards[i-1] == undefined){
                    break;
                }
                setTimeout( () =>{
                    console.log(DisplayCards[i-1])
                    DisplayCards[i-1]!.style.backgroundColor = "#FFFFFF";
                    stopChord(getNoteList(DisplayCards[i-1]!.innerHTML));
                }, i * 1000) //選んだカードの一番後ろのオレンジ灯火を戻すための処理
                break;
            }
            if(i  == 0){ //一個目はすぐに色を変える
                DisplayCards[i]!.style.backgroundColor = "orange";
                playChord(getNoteList(DisplayCards[i]!.innerHTML))
            }else if(i < 3){ //初回、最終回以外の処理はここ
                setTimeout( () =>{
                    DisplayCards[i-1]!.style.backgroundColor = "#FFFFFF";
                    stopChord(getNoteList(DisplayCards[i-1]!.innerHTML))
                    DisplayCards[i]!.style.backgroundColor = "orange";
                    playChord(getNoteList(DisplayCards[i]!.innerHTML))
                }, i * 1000); //二つ目は１秒、三つ目は２秒待つ... とすることで１秒ごと動作させる
            } else if(i == 3){
                setTimeout( () =>{
                    DisplayCards[i-1]!.style.backgroundColor = "#FFFFFF";
                    stopChord(getNoteList(DisplayCards[i-1]!.innerHTML));
                    DisplayCards[i]!.style.backgroundColor = "orange";
                    playChord(getNoteList(DisplayCards[i]!.innerHTML));
                }, i * 1000); //二つ目は１秒、三つ目は２秒待つ... とすることで１秒ごと動作させる
                setTimeout( () =>{
                    DisplayCards[i]!.style.backgroundColor = "#FFFFFF";
                    stopChord(getNoteList(DisplayCards[i]!.innerHTML));  
                }, (i+1) * 1000);
            }
            
            
        }
        
    }

    const switchCard = (event:any) => { //ボタンをクリックして前後を入れ替える
        const id = event.currentTarget.id;
        const temp_state = DisplayCards[id]?.dataset.occupied;
        console.log(temp_state);
        const temp_html = DisplayCards[id]!.innerHTML;
        DisplayCards[id]!.innerHTML = DisplayCards[Number(id)+1]?.innerHTML || "";
        DisplayCards[id]!.dataset.occupied = DisplayCards[Number(id)+1]?.dataset.occupied;
        DisplayCards[Number(id)+1]!.innerHTML = temp_html;
        DisplayCards[Number(id)+1]!.dataset.occupied = temp_state;
    }

    

    const styleHeader:{[key:string]:string} = {
        height: "auto",
        width: "350px",
        padding: "10px",
        backgroundColor: "#5D99C6",
        // position: "fixed",
    }

    const styleButton:{[key:string]:string} = {
        width: "120px",
        fontSize: "10px",
        margin: "10px",
    }

    return (
        <>
            <div style={styleHeader}>
                <p className="text-light font-size-1">ChordCards</p>
                <span></span>
                <Button variant="success" style={styleButton} onClick={playDisplay} >再生<div>sキー</div></Button>
                <Button variant="danger" style={styleButton} onClick={cleanDisplay} >リセット<div>cキー</div></Button>
                <span></span>
                < DisplayCard ref={displayCardEl1}/>
                <Button id="0" style={styleButton} onClick={switchCard}>←→<div>1キー</div></Button>
                < DisplayCard ref={displayCardEl2}/>
                <Button id="1" style={styleButton} onClick={switchCard}>←→<div>2キー</div></Button>
                < DisplayCard ref={displayCardEl3}/>
                <Button id="2" style={styleButton} onClick={switchCard}>←→<div>3キー</div></Button>
                < DisplayCard ref={displayCardEl4}/>
            </div>
            <div id="adjust"></div>
        </>
    )
};
export default Header;