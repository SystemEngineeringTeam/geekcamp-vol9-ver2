// 連想配列の型定義
// https://blog.websandbag.com/entry/2020/09/19/184820
import { useCallback } from "react";
//ルートリスト
const Roots:{[key: string]:number} = {
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

//コードリスト
const Chords:{[key: string]:number[]} = { //数字はルートからの半音の距離
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

//関数1： ノートリストを返す関数を渡す
export const useGetNoteList = () => {
    // console.log("関数useGetNoteList実行");
    return useCallback((chord:string) => {
        let root = chord.slice(0, 2); //先頭2文字
        let structure = chord.slice(1); //先頭以外
        if (root.slice(-1) === "#" || root.slice(-1) === "b") {
            structure = structure.slice(1); //先頭以外(余分カット)
        } else {
            root = root.slice(0, 1); //先頭のみ(余分カット)
        }
        // console.log("ルート: " + root);
        // console.log("構成: " + structure);
        const noteList = [...Chords[structure]]; //Chordsを元に配列を新しく生成
        for (let i = 0; i < noteList.length; i++) {
            noteList[i] += Roots[root];
        }
    return noteList;
    }, []);
}

//関数を返す関数
// https://confrage.jp/typescript-%E3%81%A7%E9%96%A2%E6%95%B0%E3%81%AE%E5%BC%95%E6%95%B0%E3%81%AB%E9%96%A2%E6%95%B0%E3%82%92%E6%B8%A1%E3%81%97%E3%81%A6%E3%81%BF%E3%82%8B/
//関数2: 引数でプレイするコードを選ぶ関数を渡す
export const usePlay = (PlayFuncs:(() => void)[]) => {
    // console.log("usePlay実行");
    return (noteList:number[]) => {
        for (let i = 0; i < noteList.length; i++) {
            PlayFuncs[noteList[i]]();
        }
    };
    
};
//関数2: 引数でストップするコードを選ぶ関数を渡す
export const useStop = (StopFuncs:(() => void)[]) => {
    // console.log("useStop実行");
    return (noteList:number[]) => {
        for (let i = 0; i < noteList.length; i++) {
            StopFuncs[noteList[i]]();
        }
    };
};