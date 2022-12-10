import  DisplayCard  from "./displayCard";
import { useGetSoundPlayer } from "./hooks/useGetSoundPlayer";
import { useGetNoteList, usePlay, useStop } from "./hooks/useChordPlayer";
import { useEffect, useRef } from "react";
import { useKey } from "react-use";

export const Header = () =>{

    console.log("Headerレンダリング");

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
            const DisplayCards = document.getElementsByClassName("DisplayCard") as HTMLCollectionOf<HTMLElement>;
            const temp_state = DisplayCards[0].dataset.occupied;
            const temp_html = DisplayCards[0].innerHTML;
            DisplayCards[0].innerHTML = DisplayCards[Number(0)+1].innerHTML;
            DisplayCards[0].dataset.occupied = DisplayCards[Number(0)+1].dataset.occupied;
            DisplayCards[Number(0)+1].innerHTML = temp_html;
            DisplayCards[Number(0)+1].dataset.occupied = temp_state;
        }
    }

    const keypressSwitch2 = (key:any) => {
        if(key.key == '2' || key.key== '@'){
            console.log('switch2');
            const DisplayCards = document.getElementsByClassName("DisplayCard") as HTMLCollectionOf<HTMLElement>;
            const temp_state = DisplayCards[1].dataset.occupied;
            const temp_html = DisplayCards[1].innerHTML;
            DisplayCards[1].innerHTML = DisplayCards[Number(1)+1].innerHTML;
            DisplayCards[1].dataset.occupied = DisplayCards[Number(1)+1].dataset.occupied;
            DisplayCards[Number(1)+1].innerHTML = temp_html;
            DisplayCards[Number(1)+1].dataset.occupied = temp_state;
        }
    }

    const keypressSwitch3 = (key:any) => {
        if(key.key == '3' || key.key== '#'){
            console.log('switch3');
            const DisplayCards = document.getElementsByClassName("DisplayCard") as HTMLCollectionOf<HTMLElement>;
            const temp_state = DisplayCards[2].dataset.occupied;
            const temp_html = DisplayCards[2].innerHTML;
            DisplayCards[2].innerHTML = DisplayCards[Number(2)+1].innerHTML;
            DisplayCards[2].dataset.occupied = DisplayCards[Number(2)+1].dataset.occupied;
            DisplayCards[Number(2)+1].innerHTML = temp_html;
            DisplayCards[Number(2)+1].dataset.occupied = temp_state;
        }
    }

    useEffect( () => {
        document.addEventListener("keydown", keypressPlay);
        return (() => { //第2引数をしていしないため、再レンダリングするたびにイベントリスナーを削除する
            document.removeEventListener("keydown", keypressPlay);
        }) //←'keypressPlay'は第２引数に何も指定しないと正常に動作する。原因は調査中。
    },)

    useKey("c", keypressClean);
    useKey("1", keypressSwitch1);
    useKey("2", keypressSwitch2);
    useKey("3", keypressSwitch3);

    const styleHeader:{[key:string]:string} = {
        display: "grid",
        height: "160px",
        width: "1500px",
        gridTemplateColumns: "100px 100px 50px 250px 30px 250px 30px 250px 30px 250px 87px",
        gridTemplateRows: "160px",
        backgroundColor: "#497df7a4",
        fontSize: "30px",
        position: "fixed" ,
        top: "0"
    }

    const styleButton:{[key:string]:string} = {
        marginTop : "60px",
        height: "30px",
        width: "45px",
        fontSize: "10px",
    }

    const {PlayFuncs, StopFuncs} = useGetSoundPlayer();
    const getNoteList = useGetNoteList();
    const playChord = usePlay(PlayFuncs);
    const stopChord = useStop(StopFuncs);

    const cleanDisplay = () =>{ //表示されている要素を全て消す
        const DisplayCards = document.getElementsByClassName("DisplayCard") as HTMLCollectionOf<HTMLElement>;
        for(let i=0; i<4; i++){
            DisplayCards[i].innerHTML = "カードをここにドラッグしてドロップ";
            DisplayCards[i].dataset.occupied = "false";
        }
    }

    const playDisplay = () =>{ //表示されている要素にひとつずつイベントを起こしていく
        
        const DisplayCards = document.getElementsByClassName("DisplayCard") as HTMLCollectionOf<HTMLElement>;
        for(let i=0; i<4; i++){ //DisplayCardを左から順に色をつけていく
            if(DisplayCards[i].dataset.occupied == "false"){ //カードが無かったら処理を停止
                if(DisplayCards[i-1] == undefined){
                    break;
                }
                setTimeout( () =>{
                    console.log(DisplayCards[i-1])
                    DisplayCards[i-1].style.backgroundColor = "#3282B8";
                    stopChord(getNoteList(DisplayCards[i-1].innerHTML));
                }, i * 1000) //選んだカードの一番後ろのオレンジ灯火を戻すための処理
                break;
            }
            if(i  == 0){ //一個目はすぐに色を変える
                DisplayCards[i].style.backgroundColor = "orange";
                playChord(getNoteList(DisplayCards[i].innerHTML))
            }else if(i < 3){ //初回、最終回以外の処理はここ
                setTimeout( () =>{
                    DisplayCards[i-1].style.backgroundColor = "#3282B8";
                    stopChord(getNoteList(DisplayCards[i-1].innerHTML))
                    DisplayCards[i].style.backgroundColor = "orange";
                    playChord(getNoteList(DisplayCards[i].innerHTML))
                }, i * 1000); //二つ目は１秒、三つ目は２秒待つ... とすることで１秒ごと動作させる
            } else if(i == 3){
                setTimeout( () =>{
                    DisplayCards[i-1].style.backgroundColor = "#3282B8";
                    stopChord(getNoteList(DisplayCards[i-1].innerHTML));
                    DisplayCards[i].style.backgroundColor = "orange";
                    playChord(getNoteList(DisplayCards[i].innerHTML));
                }, i * 1000); //二つ目は１秒、三つ目は２秒待つ... とすることで１秒ごと動作させる
                setTimeout( () =>{
                    DisplayCards[i].style.backgroundColor = "#3282B8";
                    stopChord(getNoteList(DisplayCards[i].innerHTML));  
                }, (i+1) * 1000);
            }
            
            
        }
        
    }

    const switchCard = (event:any) => { //ボタンをクリックして前後を入れ替える
        const DisplayCards = document.getElementsByClassName("DisplayCard") as HTMLCollectionOf<HTMLElement>;
        const id = event.currentTarget.id;
        const temp_state = DisplayCards[id].dataset.occupied;
        console.log(temp_state);
        const temp_html = DisplayCards[id].innerHTML;
        DisplayCards[id].innerHTML = DisplayCards[Number(id)+1].innerHTML;
        DisplayCards[id].dataset.occupied = DisplayCards[Number(id)+1].dataset.occupied;
        DisplayCards[Number(id)+1].innerHTML = temp_html;
        DisplayCards[Number(id)+1].dataset.occupied = temp_state;
    }

    return (
        <>
            <header style={styleHeader}>
                <button onClick={playDisplay} >再生<div>sキー</div></button>
                <button onClick={cleanDisplay} >リセット<div>cキー</div></button>
                <span></span>
                < DisplayCard/>
                <button id="0" style={styleButton} onClick={switchCard}>←→<div>1キー</div></button>
                < DisplayCard/>
                <button id="1" style={styleButton} onClick={switchCard}>←→<div>2キー</div></button>
                < DisplayCard/>
                <button id="2" style={styleButton} onClick={switchCard}>←→<div>3キー</div></button>
                < DisplayCard/>
            </header>
            <div id="adjust"></div>
        </>
    )
};
export default Header;