import { useEffect } from "react";
import { DisplayCard } from "./DisplayCard";

export const Header = () =>{
    useEffect( () => {
        document.addEventListener("keydown", keypressPlay);
        document.addEventListener("keydown", keypressClean);
        document.addEventListener("keydown", keypressSwitch1);
        document.addEventListener("keydown", keypressSwitch2);
        document.addEventListener("keydown", keypressSwitch3);
    }, [])

    const keypressPlay = (key) => {
        if(key.key == 'S' || key.key== 's'){
            console.log('play');
            playDisplay();
        }
    }

    const keypressClean = (key) => {
        if(key.key == 'C' || key.key== 'c'){
            console.log('clean');
            cleanDisplay();
        }
    }

    const keypressSwitch1 = (key) => {
        if(key.key == '1' || key.key== '!'){
            console.log('switch1');
            const DisplayCards = document.getElementsByClassName("DisplayCard");
            const temp_state = DisplayCards[0].dataset.occupied;
            console.log(temp_state);
            const temp_html = DisplayCards[0].innerHTML;
            DisplayCards[0].innerHTML = DisplayCards[Number(0)+1].innerHTML;
            DisplayCards[0].dataset.occupied = DisplayCards[Number(0)+1].dataset.occupied;
            DisplayCards[Number(0)+1].innerHTML = temp_html;
            DisplayCards[Number(0)+1].dataset.occupied = temp_state;
        }
    }

    const keypressSwitch2 = (key) => {
        if(key.key == '2' || key.key== '@'){
            console.log('switch2');
            const DisplayCards = document.getElementsByClassName("DisplayCard");
            const temp_state = DisplayCards[1].dataset.occupied;
            console.log(temp_state);
            const temp_html = DisplayCards[1].innerHTML;
            DisplayCards[1].innerHTML = DisplayCards[Number(1)+1].innerHTML;
            DisplayCards[1].dataset.occupied = DisplayCards[Number(1)+1].dataset.occupied;
            DisplayCards[Number(1)+1].innerHTML = temp_html;
            DisplayCards[Number(1)+1].dataset.occupied = temp_state;
        }
    }

    const keypressSwitch3 = (key) => {
        if(key.key == '3' || key.key== '#'){
            console.log('switch3');
            const DisplayCards = document.getElementsByClassName("DisplayCard");
            const temp_state = DisplayCards[2].dataset.occupied;
            console.log(temp_state);
            const temp_html = DisplayCards[2].innerHTML;
            DisplayCards[2].innerHTML = DisplayCards[Number(2)+1].innerHTML;
            DisplayCards[2].dataset.occupied = DisplayCards[Number(2)+1].dataset.occupied;
            DisplayCards[Number(2)+1].innerHTML = temp_html;
            DisplayCards[Number(2)+1].dataset.occupied = temp_state;
        }
    }

    const styleHeader = {
        display: "grid",
        height: "160px",
        width: "1500px",
        gridTemplateColumns: "100px 100px 50px 250px 40px 250px 40px 250px 40px 250px",
        gridTemplateRows: "160px",
        backgroundColor: "#497df7a4",
        fontSize: "30px",
        position: "fixed" ,
        top: "0"
    }

    const styleButton = {
        marginTop : "60px",
        height: "30px",
        width: "45px",
        fontSize: "10px",
    }

    const cleanDisplay = () =>{ //表示されている要素を全て消す
        const DisplayCards = document.getElementsByClassName("DisplayCard");
        for(let i=0; i<4; i++){
            DisplayCards[i].innerHTML = "カードをクリックまたはドラッグ&ドロップ";
            DisplayCards[i].dataset.occupied = "false";
            DisplayCards[i].draggable = false;
        }
        
    }

    const playDisplay = () =>{ //表示されている要素にひとつずつイベントを起こしていく
        
        const DisplayCards = document.getElementsByClassName("DisplayCard");
        for(let i=0; i<4; i++){ //DisplayCardを左から順に色をつけていく
            if(DisplayCards[i].dataset.occupied == "false"){ //カードが無かったら処理を停止
                setTimeout( () =>{
                    DisplayCards[i-1].style.backgroundColor = "#3282B8"
                }, i * 1000) //選んだカードの一番後ろのオレンジ灯火を戻すための処理
                break;
            }
            if(i  == 0){ //一個目はすぐに色を変える
                DisplayCards[i].style.backgroundColor = "orange";
            }else if(i < 3){ //初回、最終回以外の処理はここ
                setTimeout( () =>{
                    DisplayCards[i-1].style.backgroundColor = "#3282B8";
                    DisplayCards[i].style.backgroundColor = "orange";    
                }, i * 1000); //二つ目は１秒、三つ目は２秒待つ... とすることで１秒ごと動作させる
            } else if(i == 3){
                setTimeout( () =>{
                    DisplayCards[i-1].style.backgroundColor = "#3282B8";
                    DisplayCards[i].style.backgroundColor = "orange";    
                }, i * 1000); //二つ目は１秒、三つ目は２秒待つ... とすることで１秒ごと動作させる
                setTimeout( () =>{
                    DisplayCards[i].style.backgroundColor = "#3282B8";    
                }, (i+1) * 1000);
            }
            
            
        }
        
    }

    const switchCard = (event) => { //ボタンをクリックして前後を入れ替える
        const DisplayCards = document.getElementsByClassName("DisplayCard");
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
                <button onClick={playDisplay} >再生 <div>sキー</div></button>
                <button onClick={cleanDisplay} >リセット <div>cキー</div></button>
                <span></span>
                < DisplayCard />
                <button id="0" style={styleButton} onClick={switchCard}>←→<div>1キー</div></button>
                < DisplayCard />
                <button id="1" style={styleButton} onClick={switchCard}>←→<div>2キー</div></button>
                < DisplayCard />
                <button id="2" style={styleButton} onClick={switchCard}>←→<div>3キー</div></button>
                < DisplayCard />
            </header>
            <div id="adjust"></div>
        </>
    )
};
export default Header;