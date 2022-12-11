import { memo, useEffect } from "react";
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

export default memo( function Card(props:Props){
    console.log(`Card${props.num}レンダリング`);
    // インラインでのスタイル指定
    // https://qiita.com/Statham/items/05870fd52320a0644acd
    const CardStyle: { [key: string]: string } = {
        width: "100%",
        height: "69px",
        paddingTop: "8px",
        paddingBottom: "8px",
        backgroundColor: "#FFFFFF",
        borderWidth: "0px",
    }

    const LineLayout: { [key: string]: string } = {
        border: "4px solid #757575",
        borderRadius: "4px",
        margin : "0px 16px",
    }
    

    const EnterChangeColor = () =>{ //カード要素にカーソルが入ってきたら背景色をオレンジにするコード
        const target = document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>; //ここの変数targetには'Grid.js'で使った"Card"コンポーネントをすべて含む配列が入る。
        target[props.num].style.backgroundColor = "orange"; //targetには全ての"Card”コンポーネントが入ってるので'props.num'で識別する。
        props.usePlayChord(props.useGetNoteList(props.children));

    }
    const LeaveChangeColor = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{ //カード要素からカーソルが離れたら色を元に戻すコード
        if(event.shiftKey){
            const target = document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>;
            target[props.num].style.backgroundColor = "#FFFFFF";
        }else{
            const target = document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>;
            target[props.num].style.backgroundColor = "#FFFFFF";
            props.useStopChord(props.useGetNoteList(props.children));
        }
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

    const muteChords = (event: KeyboardEvent) => {
        if(event.shiftKey){//←これで動く
            const target = document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>;
            target[props.num].style.pointerEvents = "none";
        }else{
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
        document.addEventListener("keyup", muteChords)
    }, []);

    return(
        <>
            <Button
                variant="text-center"
                draggable="true"
                className="card"
                style={CardStyle}
                onClick={() => {
                    ClickEvent();
                }}
                onMouseEnter={() => {
                    EnterChangeColor();
                }}
                onMouseLeave={(event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                    LeaveChangeColor(event);
                }}
            >
                {props.children}
            </Button>

            <hr style={LineLayout}/>
        </>
    )
});
