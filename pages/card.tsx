import { useEffect } from "react";
import { useGetSoundPlayer } from "./hooks/useGetSoundPlayer";
import { useGetNoteList, usePlay, useStop } from "./hooks/useChordPlayer";

type Props = {
    children : string
    num : number
    useGetNoteList : (chord: string) => number[]
    usePlayChord : (noteList: number[]) => void
    useStopChord : (noteList: number[]) => void
}

export default function Card(props:Props){
    // インラインでのスタイル指定
    // https://qiita.com/Statham/items/05870fd52320a0644acd
    const CardStyle: { [key: string]: string } = {
        textAlign: "center",
        border: "1px solid #0F4C75",
        width: "250px",
        height: "100px",
        backgroundColor: "#BBE1FA",
        padding: "1px"
    }


    const EnterChangeColor = () =>{ //カード要素にカーソルが入ってきたら背景色をオレンジにするコード
        const target = document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>; //ここの変数targetには'Grid.js'で使った"Card"コンポーネントをすべて含む配列が入る。
        target[props.num].style.backgroundColor = "orange"; //targetには全ての"Card”コンポーネントが入ってるので'props.num'で識別する。
        props.usePlayChord(props.useGetNoteList(props.children));

    }
    const LeaveChangeColor = () =>{ //カード要素からカーソルが離れたら色を元に戻すコード
        const target = document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>;
        target[props.num].style.backgroundColor = "#BBE1FA";
        props.useStopChord(props.useGetNoteList(props.children));
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


    useEffect( () => { //初回レンダリング時にカードにaddeventlistnerを設置
        const target = document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>;
        target[props.num].addEventListener("dragstart", (event:any) =>{
            event.dataTransfer.setData('text/plain', event.target.innerHTML); //ドラッグしたらドラッグした要素のテキストをdataTransferItemListにぶち込む
        });
    }, []);

    return(
        <button
            draggable="true"
            className="card"
            style={CardStyle}
            onClick={() => {
                ClickEvent();
            }}
            onMouseEnter={() => {
                EnterChangeColor();
            }}
            onMouseLeave={() => {
                LeaveChangeColor();
            }}
        >
            {props.children}
        </button>

    )
};
