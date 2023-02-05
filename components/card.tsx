import { memo, useEffect, useState } from "react";
import { useGetSoundPlayer } from "../hooks/useGetSoundPlayer";
import { useGetNoteList, usePlay, useStop } from "../hooks/useChordPlayer";
import { Button } from 'react-bootstrap';

type Props = {
    children : string
    num : number
    useGetNoteList : (chord: string) => number[]
    usePlayChord : (noteList: number[]) => void
    useStopChord : (noteList: number[]) => void
}


export default function Card(props:Props){

    const [isHovered, setIsHovered] = useState(false);

    console.log(`Card${props.num}レンダリング`);
    // インラインでのスタイル指定
    // https://qiita.com/Statham/items/05870fd52320a0644acd
    const NotHoveredCardStyle: { [key: string]: string } = { //マウスカーソルが上にないときのカードのスタイル
        width: "100%",
        height: "69px",
        paddingTop: "8px",
        paddingBottom: "8px",
        borderWidth: "0px",
        backgroundColor: "#FFFFFF00"
    }

    const HoveredCardStyle: { [key: string]: string } = { //マウスカーソルが上にあるときのカードのスタイル
        width: "100%",
        height: "69px",
        paddingTop: "8px",
        paddingBottom: "8px",
        borderWidth: "0px",
        backgroundColor: "orange"
    }

    const LineLayout: { [key: string]: string } = {
        border: "4px solid #757575",
        borderRadius: "4px",
        margin : "0px 16px",
    }

    const ClickEvent = () =>{ //カードがクリックされたら、ヘッダーにクリックされたカードの要素名を追加。 ヘッダーを親要素としてspanタグを子要素に加えて追加していく。
        const DisplayCards = document.getElementsByClassName("DisplayCard") as HTMLCollectionOf<HTMLElement>;
        for(let i=0; i<4; i++){ //htmlのdata属性にはdatasetを参照する必要がある
            if(DisplayCards[i].dataset.occupied == "false"){
                DisplayCards[i].innerHTML = props.children;
                DisplayCards[i].dataset.occupied = "true";
                break;
            }
        }
    }

    const muteChords = (event: KeyboardEvent) => {//キーボードが押された時に実行される
        if(event.shiftKey){//shiftキーが押されてたら
            const target = document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>;
            target[props.num].style.pointerEvents = "none";
        }else{//shiftキーが押されてなかったら↑でnoneになったものをautoに戻す
            const target = document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>;
            target[props.num].style.pointerEvents = "auto";
        }
    }


    useEffect( () => { //初回レンダリング時にカードにaddeventlistnerを設置
        const target = document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>;
        target[props.num].addEventListener("dragstart", (event:any) =>{
            event.dataTransfer.setData('text/plain', event.target.innerHTML); //ドラッグしたらドラッグした要素のテキストをdataTransferItemListにぶち込む
        });
        document.addEventListener("keydown", muteChords)
        document.addEventListener("keyup", muteChords) //keyupの時にも判定しないとpointerEventsがnoneになったままでイベントに反応しないままになってしまう
    }, []);

    if(!isHovered){ //マウスカーソルがカードの上にないときの処理
        return(
            <>
                <Button
                    variant="text-center"
                    draggable="true"
                    className="card"
                    style={NotHoveredCardStyle}
                    onMouseEnter={() => {
                        setIsHovered(true);//マウスカーソルが上に来たらisHoveredをtrueにする
                        props.usePlayChord(props.useGetNoteList(props.children));//音を再生する
                    }}
                >
                    {props.children}
                </Button>
    
                <hr style={LineLayout}/>
            </>
        )
    }else{ //マウスカーソルがカードの上にいるときの処理
        return(
            <>
                <Button
                    variant="text-center"
                    draggable="true"
                    className="card"
                    style={HoveredCardStyle}
                    onClick={() => {
                        ClickEvent();
                    }}
                    onMouseLeave={() => {
                        setIsHovered(false);//マウスカーソルがいなくなったらisHoveredをfalseにする
                        props.useStopChord(props.useGetNoteList(props.children)); //再生した音を止める
                    }}
                >
                    {props.children}
                </Button>
    
                <hr style={LineLayout}/>
            </>
        )
    }
    
};
