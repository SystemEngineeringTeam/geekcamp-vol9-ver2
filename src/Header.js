import { useEffect } from "react";
import { DisplayCard } from "./DisplayCard";

export const Header = () =>{
    useEffect( () => {
        document.addEventListener("keydown", keypressPlay);
        document.addEventListener("keydown", keypressClean);
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

    const styleHeader = {
        display: "grid",
        height: "160px",
        width: "1500px",
        gridTemplateColumns: "100px 100px 50px 250px 30px 250px 30px 250px 30px 250px",
        gridTemplateRows: "160px",
        backgroundColor: "#497df7a4",
        fontSize: "30px",
        position: "fixed" ,
        top: "0"
    }

    const cleanDisplay = () =>{ //表示されている要素を全て消す
        const DisplayCards = document.getElementsByClassName("DisplayCard");
        for(let i=0; i<4; i++){
            DisplayCards[i].innerHTML = "カードをここにドラッグしてドロップ";
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

    return (
        <>
            <header style={styleHeader}>
                <button onClick={playDisplay} >再生 <div>sキー</div></button>
                <button onClick={cleanDisplay} >リセット <div>cキー</div></button>
                <span></span>
                < DisplayCard id="1"/>
                <span></span>
                < DisplayCard id="2"/>
                <span></span>
                < DisplayCard id="3"/>
                <span></span>
                < DisplayCard id="4"/>
            </header>
            <div id="adjust"></div>
        </>
    )
};
export default Header;