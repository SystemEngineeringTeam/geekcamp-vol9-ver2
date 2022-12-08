import { useState } from "react";
import { useEffect } from "react";

export const DisplayCard = () =>{
    const [DisplayCard1, setDisplayCard1] = useState("false"); //ディスプレイカードが埋まってるかどうかの状態をチェック
    const [DisplayCard2, setDisplayCard2] = useState("false");
    const [DisplayCard3, setDisplayCard3] = useState("false");
    const [DisplayCard4, setDisplayCard4] = useState("false");

    const styleDisplayCard = {
        height: "140px",
        backgroundColor: "#3282B8",
        margin: "10px",
        fontSize: "25px",
        textAlign: "center",
    }
    
    useEffect( () => { //初回レンダリング時に各ディスプレイカードにdragoverのaddeventlistnerを設置
        const target = document.getElementsByClassName("DisplayCard");
        for(let i=0; i<4; i++){
            target[i].addEventListener("dragover", (event) => { //ドラッグしてディスプレイカードの上に来たときのイベントを追加
                event.preventDefault(); //通常のブラウザではドラッグするとファイルを開くなどの処理が行われるがそういったブラウザ標準の機能を防ぐためのメソッド
                event.dataTransfer.dropEffect = 'copy';
            });

            target[i].addEventListener("drop", (event) => { //ドロップしたときのイベントを追加
                let text = '';
                event.preventDefault();
                if(event.dataTransfer.items){//-----------------------何やってるかわからないゾーン-------------------
                    for(const item of event.dataTransfer.items) {
                        const {kind, type} = item;
                        if(kind === "string"){
                            if(type === "text/plain"){
                                text = event.dataTransfer.getData(type) //-------------------------------------
                                const target = document.getElementsByClassName("DisplayCard");
                                target[i].innerHTML = text; //取得したテキストをディスプレイカードに表示
                                target[i].dataset.occupied = "true"; //枠が埋まったのでoccupiedをtrueに
                                if(i == 0) setDisplayCard1("true") //stateもtrueに
                                if(i == 1) setDisplayCard2("true") //ループ1回目は一つ目のディスプレイカードを対象にしているので一つ目のstateをtrueに
                                if(i == 2) setDisplayCard3("true") //stateもtrueに
                                if(i == 3) setDisplayCard4("true") //stateもtrueに
                            }
                        };
                    }
                }
            })
        } 
    }, []);

    useEffect(() => {//ディスプレイカードの枠が埋まったらドラッグ＆ドロップできるようにする このeffectはdata-occupiedの値が変更されたときに実行される
        const DisplayCards = document.getElementsByClassName("DisplayCard"); //ディスプレイカード4つを取得
        for(let i=0; i<4; i++){
            if(DisplayCards[i].dataset.occupied == "true"){ //もし対象のdata-occupiedがtrueなら
                DisplayCards[i].draggable = true; //枠にカードが置かれたらそこのカードをドラッグできるようにする
                DisplayCards[i].addEventListener("dragstart", (event) =>{ //ドラッグしたときの設定
                    event.dataTransfer.setData('text/plain', event.target.innerHTML);
                })
            } else{
                DisplayCards[i].draggable = false; //枠にカードが置かれたらそこのカードをドラッグできるようにする
                setDisplayCard1("false"); //Header.jsの方のcleanDisplayからoccupiedをfalseにされるのでそれを検知してこちらのstateもfalseにする
                setDisplayCard2("false");
                setDisplayCard3("false");
                setDisplayCard4("false");
            }
        }
        }, [DisplayCard1,DisplayCard2,DisplayCard3,DisplayCard4]) // このeffectはdata-occupiedの値が変更されたときに実行される

    return (
        <div className="DisplayCard" style={styleDisplayCard} data-occupied="false">
            カードをここにドラッグしてドロップ
        </div>
    )
}