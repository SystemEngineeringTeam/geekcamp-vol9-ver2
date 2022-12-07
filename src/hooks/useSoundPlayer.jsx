import useSound from "use-sound";
import C3 from "./sound/C3.mp3";
import Db3 from "./sound/Db3.mp3";
import D3 from "./sound/D3.mp3";
import Eb3 from "./sound/Eb3.mp3";
import E3 from "./sound/E3.mp3";
import F3 from "./sound/F3.mp3";
import Gb3 from "./sound/Gb3.mp3";
import G3 from "./sound/G3.mp3";
import Ab3 from "./sound/Ab3.mp3";
import A3 from "./sound/A3.mp3";
import Bb3 from "./sound/Bb3.mp3";//一括代入の方法
import B3 from "./sound/B3.mp3"; 
import C4 from "./sound/C4.mp3";
import Db4 from "./sound/Db4.mp3";
import D4 from "./sound/D4.mp3";
import Eb4 from "./sound/Eb4.mp3";
import E4 from "./sound/E4.mp3";
import F4 from "./sound/F4.mp3";
import Gb4 from "./sound/Gb4.mp3";
import G4 from "./sound/G4.mp3";
import Ab4 from "./sound/Ab4.mp3";
import A4 from "./sound/A4.mp3";
import Bb4 from "./sound/Bb4.mp3";
import B4 from "./sound/B4.mp3";

//ルートリスト
const Roots = {
    "C": 0,
    "C#": 1,
    "Db": 1,
    "D": 2,
    "D#": 3,
    "Eb": 3,
    "E": 4,
    "F": 5,
    "F#": 6,
    "Gb": 6,
    "G": 7,
    "G#": 8,
    "Ab": 8,
    "A": 9,
    "A#": 10,
    "Bb": 10,
    "B": 11, //全12個
};

//コードリスト
const Chords = { //数字はルートからの半音の距離
    "": [0, 4, 7], //C
    "7": [0, 4, 7, 10], //C7
    "7sus4": [0, 5, 7, 10], //C7sus4
    "m": [0, 3, 7], //Cm
    "m7": [0, 3, 7, 10], //Cm7
    "m7-5": [0, 3, 6, 10], //Cm7-5
    "mM7": [0, 3, 7, 11], //CmM7
    "m6": [0, 3, 7, 9], //Cm6
    "M7": [0, 4, 7, 11], //CM7
    "sus4": [0, 5, 7], //Csys4
    "dim7": [0, 3, 6, 9], //Cdim7
    "aug": [0, 4, 8], //Caug
    "add9": [0, 4, 7, 14], //Cadd9 あってる？？？
    "6": [0, 4, 7, 9], //C6
    //C5 p75
    //CM9 p78
    //C9 p79
    //Cm9 p80
    //C6(9) p80
};


//関数: 引数でプレイするコードを選ぶ
export const usePlay = (chord) => {
    console.log("usePlay実行");
    const [ playC3 ] = useSound(C3);
    const [ playDb3 ] = useSound(Db3);
    const [ playD3 ] = useSound(D3);
    const [ playEb3 ] = useSound(Eb3);
    const [ playE3 ] = useSound(E3);
    const [ playF3 ] = useSound(F3);
    const [ playGb3 ] = useSound(Gb3);
    const [ playG3 ] = useSound(G3);
    const [ playAb3 ] = useSound(Ab3);
    const [ playA3 ] = useSound(A3);
    const [ playBb3 ] = useSound(Bb3);
    const [ playB3 ] = useSound(B3);
    const [ playC4 ] = useSound(C4);
    const [ playDb4 ] = useSound(Db4);
    const [ playD4 ] = useSound(D4);
    const [ playEb4 ] = useSound(Eb4);
    const [ playE4 ] = useSound(E4);
    const [ playF4 ] = useSound(F4);
    const [ playGb4 ] = useSound(Gb4);
    const [ playG4 ] = useSound(G4);
    const [ playAb4 ] = useSound(Ab4);
    const [ playA4] = useSound(A4);
    const [ playBb4] = useSound(Bb4);
    const [ playB4] = useSound(B4);

    const PlayFuncs = [
        () => playC3(),
        () => playDb3(),
        () => playD3(),
        () => playEb3(),
        () => playE3(),
        () => playF3(),
        () => playGb3(),
        () => playG3(),
        () => playAb3(),
        () => playA3(),
        () => playBb3(),
        () => playB3(),
        () => playC4(),
        () => playDb4(),
        () => playD4(),
        () => playEb4(),
        () => playE4(),
        () => playF4(),
        () => playGb4(),
        () => playG4(),
        () => playAb4(),
        () => playA4(),
        () => playBb4(),
        () => playB4(), //全24音
    ];
    const noteList = getNoteList(chord); //C[0, 4, 7]
    for (let i = 0; i < noteList.length; i++) {
        PlayFuncs[noteList[i]]();
    }
};

//関数: 引数でストップするコードを選ぶ
export const useStop = (chord) => {
    console.log("useStop実行");
    const { stop: stopC3 } = useSound(C3);
    const { stop: stopDb3 } = useSound(Db3);
    const { stop: stopD3 } = useSound(D3);
    const { stop: stopEb3 } = useSound(Eb3);
    const { stop: stopE3 }  = useSound(E3);
    const { stop: stopF3 } = useSound(F3);
    const { stop: stopGb3 } = useSound(Gb3);
    const { stop: stopG3 } = useSound(G3);
    const { stop: stopAb3 } = useSound(Ab3);
    const { stop: stopA3 } = useSound(A3);
    const { stop: stopBb3 } = useSound(Bb3);
    const { stop: stopB3 } = useSound(B3);
    const { stop: stopC4 } = useSound(C4);
    const { stop: stopDb4 } = useSound(Db4);
    const { stop: stopD4 } = useSound(D4);
    const { stop: stopEb4 } = useSound(Eb4);
    const { stop: stopE4 } = useSound(E4);
    const { stop: stopF4 } = useSound(F4);
    const { stop: stopGb4 } = useSound(Gb4);
    const { stop: stopG4 } = useSound(G4);
    const { stop: stopAb4 } = useSound(Ab4);
    const { stop: stopA4 } = useSound(A4);
    const { stop: stopBb4 } = useSound(Bb4);
    const { stop: stopB4 } = useSound(B4);

    const StopFuncs = [
        () => stopC3(),
        () => stopDb3(),
        () => stopD3(),
        () => stopEb3(),
        () => stopE3(),
        () => stopF3(),
        () => stopGb3(),
        () => stopG3(),
        () => stopAb3(),
        () => stopA3(),
        () => stopBb3(),
        () => stopB3(),
        () => stopC4(),
        () => stopDb4(),
        () => stopD4(),
        () => stopEb4(),
        () => stopE4(),
        () => stopF4(),
        () => stopGb4(),
        () => stopG4(),
        () => stopAb4(),
        () => stopA4(),
        () => stopBb4(),
        () => stopB4(), //全24音
    ];
    const noteList = getNoteList(chord); //C[0, 4, 7]
    for (let i = 0; i < noteList.length; i++) {
        StopFuncs[noteList[i]]();
    }
};


//関数： ノートリストを返す
const getNoteList = (chord) => { 
    console.log("getNoteList実行\n");
    let root = chord.slice(0, 2); //先頭2文字
    let structure = chord.slice(1); //先頭以外
    if (root.slice(-1) === "#" || root.slice(-1) === "b") {
        structure = structure.slice(1); //先頭以外(余分カット)
    } else {
        root = root.slice(0, 1); //先頭のみ(余分カット)
    }
    console.log("ルート: " + root);
    console.log("構成: " + structure);
    const noteList = [...Chords[structure]]; //Chordsを元に配列を新しく生成
    for (let i = 0; i < noteList.length; i++) {
        noteList[i] += Roots[root];
    }
    
    return noteList;
};

/*////
読み込み:
import { usePlay, useStop } from "パス";

usePlay(chord)
useStop(chord)
引数にコードを入れる

ex. usePlay(DmM7);
    useStop(DmM7);

////*/