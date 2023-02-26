import { memo, useEffect, useState, useContext, createElement } from "react";
import { useGetSoundPlayer } from "../hooks/useGetSoundPlayer";
import { useGetNoteList, usePlay, useStop } from "../hooks/useChordPlayer";
import { Button } from 'react-bootstrap';
import { LinedDistsContext } from "./startPage";
import DisplayCard from "./DisplayCard";
import { ReactDOM } from "react";
// import { SortChordArrContext } from "./startPage";

// type Props = {
//     children : string
//     num : number
//     useGetNoteList : (chord: string) => number[]
//     usePlayChord : (noteList: number[]) => void
//     useStopChord : (noteList: number[]) => void
// }


export default function Card(props/*:Props*/){
    let DraggingElem;
    const [isHovered, setIsHovered] = useState(false);

    const { linedDistsArr, setLinedDistsArr } = useContext(LinedDistsContext);
    // const { sortChordArr, setSortChordArr } = useContext(SortChordArrContext);

    //ルーツ
    const Roots = {
        "C": 36, 
        "C#": 37,
        "Db": 37,
        "D": 38,
        "D#": 39,
        "Eb": 39,
        "E": 40,
        "F": 41,
        "F#": 42,
        "Gb": 42,
        "G": 43,
        "G#": 44,
        "Ab": 44,
        "A": 45,
        "A#": 46,
        "Bb": 46,
        "B": 47, //全12個
    };


    //ディスツ
    const Dists = { //数字はルートからの半音の距離、上の逆バージョン
        "": [0, 4, 7], //C
        "6": [0, 4, 7, 9], //C6
        "M7": [0, 4, 7, 11], //CM7
        "M9": [0, 4, 7, 11, 14], //CM9
        "M11": [0, 4, 7, 11, 14, 17], //CM11
        "M7(#5)": [0, 4, 8, 11], //CM7(#5)
        "M7(#11)": [0, 4, 7, 11, 18], //CM7(#11)
        "M9(#11)": [0, 4, 7, 11, 14, 18], //CM9(#11)
        "sus4": [0, 5, 7], //Csys4
        "aug": [0, 4, 8], //Caug
        "(b5)": [0, 4, 6], //C(b5)
        "5": [0, 7], //C5
        "69": [0, 4, 7, 9, 14], //C69
        "69(#11)": [0, 4, 7, 9, 14, 18], //C69(#11)
        "add9": [0, 4, 7, 14], //Cadd9
        "add2": [0, 2, 4, 7], //Cadd2
        "add4": [0, 4, 5, 7], //Cadd4
        "m": [0, 3, 7], //Cm
        "m7-5": [0, 3, 6, 10], //Cm7-5
        "maug": [0, 3, 8], //Cmaug
        "m6": [0, 3, 7, 9], //Cm6
        "m69": [0, 3, 7, 9, 14], //Cm69
        "mM7": [0, 3, 7, 11], //CmM7
        "mM9": [0, 3, 7, 11, 14], //CmM9
        "madd9": [0, 3, 7, 14], //Cmadd9
        "7": [0, 4, 7, 10], //C7
        "9": [0, 4, 7, 10, 14], //C9
        "11": [0, 4, 7, 10, 14, 17], //C11
        "m11": [0, 3, 7, 10, 14, 17], //Cm11
        "13": [0, 4, 7, 10, 14, 17, 21], //C13
        "m13": [0, 3, 7, 10, 14, 17, 21], //Cm13
        "M13": [0, 4, 7, 11, 14, 17, 21], //CM13
        "7sus4": [0, 5, 7, 10], //C7sus4
        "7(b5)": [0, 4, 6, 10], //C7(b5)
        "7(b5,b9)": [0, 4, 6, 10, 13], //C(b5,b9)
        "7(b5,#9)": [0, 4, 6, 10, 15], //C7(b5,#9)
        "7(b5,b9,13)": [0, 4, 6, 10, 13, 21], //C7(b5,b9,13)
        "7(b9)": [0, 4, 7, 10, 13], //C7(b9)
        "7(b9,11)": [0, 4, 7, 10, 13, 17], //C7(b9,11)
        "7(b9,13)": [0, 4, 7, 10, 13, 21], //C7(b9,13)
        "7(b9,b13)": [0, 4, 7, 10, 13, 20], //C7(b9,b13)
        "7(#9)": [0, 4, 7, 10, 15], //C7(#9)
        "7(#9,13)": [0, 4, 7, 10, 15, 21], //C7(#9,13)
        "7(#9,b13)": [0, 4, 7, 10, 15, 20], //C7(#9,b13)
        "7(13)": [0, 4, 7, 10, 21], //C7(13)
        "7(#11)": [0, 4, 7, 10, 18], //C7(#11)
        "9sus4": [0, 5, 7, 10, 14], //C9sus4
        "9(b5)": [0, 4, 6, 10, 14], //C9(b5)
        "9(b5,13)": [0, 4, 6, 10, 14, 21], //C9(b5,13)
        "9(#11)": [0, 3, 7, 10, 14, 18], //C9(#11)
        "aug7": [0, 4, 8, 10], //Caug7
        "aug7(b9)": [0, 4, 8, 10, 13], //Caug7(b9)
        "aug9": [0 ,4, 8, 10, 14], //Caug9
        "aug9(#11)": [0, 4, 8, 10, 14, 18], //Caug9(#11)
        "m7": [0, 3, 7, 10], //Cm7
        "m9": [0, 3, 7, 10, 14], //Cm9
        "m7(b9)": [0, 3, 7, 10, 13], //Cm7(b9)
        "m7(11)": [0, 3, 7, 10, 17], //Cm7(11)
        "M7(11)": [0, 4, 7, 11, 17], //CM7(11)
        "M7(13)": [0, 4, 7, 11, 21], //CM7(13)
        "M7(9,13)": [0, 4, 7, 11, 14, 21], //CM7(9,13)
        "M7(9,#11,13)": [0, 4, 7, 11, 14, 18, 21], //CM7(9,#11,13)
        "m9(11)": [0 ,3, 7, 10, 14, 17], //Cm9(11)
        "m7(13)": [0, 3, 7, 10, 21], //Cm7(13)
        "m7(b5)": [0, 3, 6, 10], //Cm7(b5)
        "m7(b5,11)": [0, 3, 6, 10, 17], //Cm7(b5,11)
        "m7(b5,b13)": [0, 3, 6, 10, 20], //Cm7(b5,b13)
        "dim": [0, 3, 6], //Cdim
        "dim7": [0, 3, 6, 9], //Cdim7
            //Cim(addD)以降はちょっと保留
        };
    // console.log(`Card${props.num}レンダリング`);
    // インラインでのスタイル指定
    // https://qiita.com/Statham/items/05870fd52320a0644acd
    const NotHoveredCardStyle/*: { [key: string]: string } */= { //マウスカーソルが上にないときのカードのスタイル
        width: "100%",
        height: "69px",
        paddingTop: "8px",
        paddingBottom: "8px",
        borderWidth: "0px",
        backgroundColor: "#FFFFFF00"
    }

    const HoveredCardStyle/*: { [key: string]: string } */= { //マウスカーソルが上にあるときのカードのスタイル
        width: "100%",
        height: "69px",
        paddingTop: "8px",
        paddingBottom: "8px",
        borderWidth: "0px",
        backgroundColor: "orange"
    }

    const LineLayout/*: { [key: string]: string }*/ = {
        border: "4px solid #757575",
        borderRadius: "4px",
        margin : "0px 16px",
    }

    /*dragに関する4つの関数を付与する関数*/
    const addDragFuncs = (elem) => { //4つの関数を付与
        elem.ondragstart = () => { //ドラッグスタート
            event.dataTransfer.setData('text/plain', event.target.id);
            DraggingElem = elem;
        };

        elem.ondragover = () => { //どこにドロップするかの目印をつける
            event.preventDefault();
            elem.style.marginLeft = '10px';
        };

        elem.ondragleave = () => { //目印解除
            elem.style.marginLeft = '';
        };

        elem.ondrop = () => {
            event.preventDefault();
            // let id = event.dataTransfer.getData('text/plain');
            const listElem = document.getElementById("lined-chords");
            // console.log(listElem);
            // console.log(elem);
            listElem.insertBefore(DraggingElem, elem);
            elem.style.marginLeft = '';
        };
    }

    /*Chordをrootとstructureに分解する関数*/
    const splitChord = (chord) => {
        let root = chord.slice(0, 2); //先頭2文字 //仮のルート、実際は使わない
        let structure = chord.slice(1); //先頭以外
        if (root.slice(-1) === "#" || root.slice(-1) === "b") {
            structure = structure.slice(1); //先頭以外(余分カット)
        } else {
            root = root.slice(0, 1); //先頭のみ(余分カット)
        }
        return { root, structure };
    }

    const ClickEvent = () => { //カードがクリックされたら、ヘッダーにクリックされたカードの要素名を追加。
        const targetOfHeader = document.getElementById("lined-chords"); 
        const childrenNum = targetOfHeader.childElementCount; //カードをクリックした時点で、ディスプレイに表示されている要素数を数える
        const createDiv = document.createElement("div"); //ヘッダーに表示する文字ごとにdiv要素を作る 
        createDiv.className = "DisplayCards"; //クラス名をDisplayCardsにしてcssでデザインを指定
        createDiv.innerHTML = props.children;
        //////
        const liElem = document.createElement("li"); //ソート用のリスト、この中に下のdiv要素を追加する
        liElem.draggable = true;
        liElem.appendChild(createDiv);
        const dummyElem = document.getElementById("dummy"); //ダミー取得
        dummyElem.before(liElem); //ダミーの前に追加
        document.querySelectorAll("#lined-chords li").forEach(addDragFuncs); //drag関数を付与、更新
        //////
        // targetOfHeader.appendChild(liElem); //header要素に子要素として作ったspanを追加 //ダミーの前に設置したい
        
        // targetOfHeader.appendChild(createDiv); //header要素に子要素として作ったspanを追加
        //テスト
        const { root:thisRoot, structure:thisStruct } = splitChord(props.children);
        // linedDistsArr[props.children] = Dists[thisStruct].map(dist => dist + Roots[thisRoot])
        // setLinedDistsArr((prev) => [...prev, Dists[thisStruct].map(dist => dist + Roots[thisRoot])]);
        // setLinedDistsArr((prev) => Object.create(linedDistsArr));
        setLinedDistsArr((prev) => {
            prev[props.children] = Dists[thisStruct].map(dist => dist + Roots[thisRoot]);
            return prev;
        });
        // setSortChordArr((prev) => [...prev, props.children]);
    }

    const muteChords = (event/*: KeyboardEvent*/) => {//キーボードが押された時に実行される
        if(event.shiftKey){//shiftキーが押されてたら
            const target = document.getElementsByClassName("card") /*as HTMLCollectionOf<HTMLElement>*/;
            target[props.num].style.pointerEvents = "none";
        }else{//shiftキーが押されてなかったら↑でnoneになったものをautoに戻す
            const target = document.getElementsByClassName("card") /*as HTMLCollectionOf<HTMLElement>*/;
            target[props.num].style.pointerEvents = "auto";
        }
    }


    useEffect( () => { //初回レンダリング時にカードにaddeventlistnerを設置
        const target = document.getElementsByClassName("card")/* as HTMLCollectionOf<HTMLElement>*/;
        target[props.num].addEventListener("dragstart", (event/*:any*/) =>{
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
                    // onClick={() => {
                    //     ClickEvent();
                    // }}
                    onClick={() => {
                        props.usePlayChord(props.useGetNoteList(props.children));//音を再生する
                    }}
                    onContextMenu={() => { //右クリックで追加
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
