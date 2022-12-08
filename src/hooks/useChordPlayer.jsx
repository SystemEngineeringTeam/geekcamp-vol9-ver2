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

//関数1： ノートリストを返す関数を渡す
export const useGetNoteList = () => {
    return (chord) => {
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
}
//関数2: 引数でプレイするコードを選ぶ関数を渡す
export const usePlay = (PlayFuncs) => {
    return (noteList) => {
        for (let i = 0; i < noteList.length; i++) {
            PlayFuncs[noteList[i]]();
        }
    }
    
};
//関数2: 引数でストップするコードを選ぶ関数を渡す
export const useStop = (StopFuncs) => {
    return (noteList) => {
        for (let i = 0; i < noteList.length; i++) {
            StopFuncs[noteList[i]]();
        }
    }
};



