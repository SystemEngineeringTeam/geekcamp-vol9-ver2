import { useGetSoundPlayer } from "../hooks/useGetSoundPlayer";
import { useGetNoteList, usePlay, useStop } from '../hooks/useChordPlayer';

export default function PianoPage(props:any){ //鍵盤を押すことでコードを検索できるようにする機能を実装する
    const pianoPageStyle:{[key:string]:string} = { //cssを指定するためのオブジェクトを用意しておく。

    }
    if(props.mode == 1){//modeはupperHeaderで決まる //windowやdocumentはブラウザで実行する時にしか使えない定数のため、
                                                  //それらをサーバー上で実行する際にはエラーになってしまう。エラー回避のために
        if(typeof(window) === "object"){          //typeof(window) === "object"を書いてある
            document.body.style.backgroundColor = "rgb(166, 225, 255)";
        }
    }else{
        pianoPageStyle["display"] = "none";
    }
    return(
        <></>
    )
}