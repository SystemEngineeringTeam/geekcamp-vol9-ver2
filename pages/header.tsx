import  DisplayCard  from "./displayCard";
import { useGetSoundPlayer } from "./hooks/useGetSoundPlayer";
import { useGetNoteList, usePlay, useStop } from "./hooks/useChordPlayer";
import { useEffect } from "react";
import { Button } from 'react-bootstrap';

export const Header = () =>{

    console.log("Headerレンダリング");

    useEffect( () => {
        document.addEventListener("keydown", keypressClean);
        document.addEventListener("keydown", keypressSwitch1);
        document.addEventListener("keydown", keypressSwitch2);
        document.addEventListener("keydown", keypressSwitch3);
    }, [])

    useEffect( () => {
        document.addEventListener("keydown", keypressPlay);
        return (() => { //第2引数をしていしないため、再レンダリングするたびにイベントリスナーを削除する
            document.removeEventListener("keydown", keypressPlay);
        }) //←'keypressPlay'は第２引数に何も指定しないと正常に動作する。原因は調査中。
    },)

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


    const {PlayFuncs, StopFuncs} = useGetSoundPlayer();
    const getNoteList = useGetNoteList();
    const playChord = usePlay(PlayFuncs);
    const stopChord = useStop(StopFuncs);

    const cleanDisplay = () =>{ //表示されている要素を全て消す
        const DisplayCards = document.getElementsByClassName("DisplayCard") as HTMLCollectionOf<HTMLElement>;
        for(let i=0; i<4; i++){
            DisplayCards[i].innerHTML = "";
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
                    DisplayCards[i-1].style.backgroundColor = "#FFFFFF";
                    stopChord(getNoteList(DisplayCards[i-1].innerHTML));
                }, i * 1000) //選んだカードの一番後ろのオレンジ灯火を戻すための処理
                break;
            }
            if(i  == 0){ //一個目はすぐに色を変える
                DisplayCards[i].style.backgroundColor = "orange";
                playChord(getNoteList(DisplayCards[i].innerHTML))
            }else if(i < 3){ //初回、最終回以外の処理はここ
                setTimeout( () =>{
                    DisplayCards[i-1].style.backgroundColor = "#FFFFFF";
                    stopChord(getNoteList(DisplayCards[i-1].innerHTML))
                    DisplayCards[i].style.backgroundColor = "orange";
                    playChord(getNoteList(DisplayCards[i].innerHTML))
                }, i * 1000); //二つ目は１秒、三つ目は２秒待つ... とすることで１秒ごと動作させる
            } else if(i == 3){
                setTimeout( () =>{
                    DisplayCards[i-1].style.backgroundColor = "#FFFFFF";
                    stopChord(getNoteList(DisplayCards[i-1].innerHTML));
                    DisplayCards[i].style.backgroundColor = "orange";
                    playChord(getNoteList(DisplayCards[i].innerHTML));
                }, i * 1000); //二つ目は１秒、三つ目は２秒待つ... とすることで１秒ごと動作させる
                setTimeout( () =>{
                    DisplayCards[i].style.backgroundColor = "#FFFFFF";
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
                <p className="text-light font-size-1">SoundCard</p>
                <span></span>
                <Button variant="success" style={styleButton} onClick={playDisplay} >再生<div>sキー</div></Button>
                <Button variant="danger" style={styleButton} onClick={cleanDisplay} >リセット<div>cキー</div></Button>
                <span></span>
                < DisplayCard/>
                <Button id="0" style={styleButton} onClick={switchCard}>←→<div>1キー</div></Button>
                < DisplayCard/>
                <Button id="1" style={styleButton} onClick={switchCard}>←→<div>2キー</div></Button>
                < DisplayCard/>
                <Button id="2" style={styleButton} onClick={switchCard}>←→<div>3キー</div></Button>
                < DisplayCard/>

                
            </div>
            <div id="adjust"></div>
        </>
    )
};
export default Header;