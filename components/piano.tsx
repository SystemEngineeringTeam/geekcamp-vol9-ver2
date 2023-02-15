import { useGetSoundPlayer } from "../hooks/useGetSoundPlayer";
import { useGetNoteList, usePlay, useStop } from '../hooks/useChordPlayer';

export default function Piano(props:any){
    const {PlayFuncs, StopFuncs} = useGetSoundPlayer();
    const getNoteList = useGetNoteList();
    const playChord = usePlay(PlayFuncs);
    const stopChord = useStop(StopFuncs);

    const pianoStyle:{[key:string]:string} = {

    }
    if(props.mode == 1){                      //windowやobjectはブラウザで実行する時にしか使えないため
        pianoStyle["display"] = "grid"; //それらをサーバー上で実行する際にはエラーになってしまう。エラー回避のために
        if(typeof(window) === "object"){      //typeof(window) === "object"を書いてある
            document.body.style.backgroundColor = "rgb(166, 225, 255)";
        }
    }else{
        pianoStyle["display"] = "none";
    }
    return(
        <></>
    )
}