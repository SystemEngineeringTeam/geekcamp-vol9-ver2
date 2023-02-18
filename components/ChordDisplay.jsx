/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-loop-func */
import { KeySelectedContext } from "./pianoPage"
import { KeyTempSelectedContext } from "./pianoPage"
import { IsTempContext } from "./pianoPage"
import { useEffect, useContext, useState } from "react";

export const ChordDisplay = (props) => {
    console.log("MainDisplayレンダリング");

    //ルートリスト
    const Roots = [
        "C", //0
        "Db", //1
        "D", //2
        "Eb", //3
        "E", //4
        "F", //5
        "Gb", //6
        "G", //7
        "Ab", //8
        "A", //9
        "Bb", //10
        "B", //11
    ]; //全12個
    
    //コードリスト //配列をcsv文字列に変換して利用する
    const Chords = { //数字はルートからの半音の距離
        "0, 4, 7" : "", //C
        "0, 4, 7, 9" : "6", //C6
        "0, 4, 7, 11" : "M7", //CM7
        "0, 4, 7, 11, 14" : "M9", //CM9
        "0, 4, 7, 11, 14, 17" : "M11", //CM11
        "0, 4, 8, 11" : "M7(#5)", //CM7(#5)
        "0, 4, 7, 11, 18" : "M7(#11)", //CM7(#11)
        "0, 4, 7, 11, 14, 18" : "M9(#11)", //CM9(#11)
        "0, 5, 7" : "sus4", //Csys4
        "0, 4, 8" : "aug", //Caug
        "0, 4, 6" : "(b5)", //C(b5)
        "0, 7" : "5", //C5
        "0, 4, 7, 9, 14" : "69", //C69
        "0, 4, 7, 9, 14, 18" : "69(#11)", //C69(#11)
        "0, 4, 7, 14" : "add9", //Cadd9
        "0, 2, 4, 7" : "add2", //Cadd2
        "0, 4, 5, 7" : "add4", //Cadd4
        "0, 3, 7" : "m", //Cm
        "0, 3, 6, 10" : "m7-5", //Cm7-5
        "0, 3, 8" : "maug", //Cmaug
        "0, 3, 7, 9" : "m6", //Cm6
        "0, 3, 7, 9, 14" : "m69", //Cm69
        "0, 3, 7, 11" : "mM7", //CmM7
        "0, 3, 7, 11, 14" : "mM9", //CmM9
        "0, 3, 7, 14" : "madd9", //Cmadd9
        "0, 4, 7, 10" : "7", //C7
        "0, 4, 7, 10, 14" : "9", //C9
        "0, 4, 7, 10, 14, 17" : "11", //C11
        "0, 3, 7, 10, 14, 17" : "m11", //Cm11
        "0, 4, 7, 10, 14, 17, 21" : "13", //C13
        "0, 3, 7, 10, 14, 17, 21" : "m13", //Cm13
        "0, 4, 7, 11, 14, 17, 21" : "M13", //CM13
        "0, 5, 7, 10" : "7sus4", //C7sus4
        "0, 4, 6, 10" : "7(b5)", //C7(b5)
        "0, 4, 6, 10, 13" : "7(b5,b9)", //C(b5,b9)
        "0, 4, 6, 10, 15" : "7(b5,#9)", //C7(b5,#9)
        "0, 4, 6, 10, 13, 21" : "7(b5,b9,13)", //C7(b5,b9,13)
        "0, 4, 7, 10, 13" : "7(b9)", //C7(b9)
        "0, 4, 7, 10, 13, 17" : "7(b9,11)", //C7(b9,11)
        "0, 4, 7, 10, 13, 21" : "7(b9,13)", //C7(b9,13)
        "0, 4, 7, 10, 13, 20" : "7(b9,b13)", //C7(b9,b13)
        "0, 4, 7, 10, 15" : "7(#9)", //C7(#9)
        "0, 4, 7, 10, 15, 21" : "7(#9,13)", //C7(#9,13)
        "0, 4, 7, 10, 15, 20" : "7(#9,b13)", //C7(#9,b13)
        "0, 4, 7, 10, 21" : "7(13)", //C7(13)
        "0, 4, 7, 10, 18" : "7(#11)", //C7(#11)
        "0, 5, 7, 10, 14" : "9sus4", //C9sus4
        "0, 4, 6, 10, 14" : "9(b5)", //C9(b5)
        "0, 4, 6, 10, 14, 21" : "9(b5,13)", //C9(b5,13)
        "0, 3, 7, 10, 14, 18" : "9(#11)", //C9(#11)
        "0, 4, 8, 10" : "aug7", //Caug7
        "0, 4, 8, 10, 13" : "aug7(b9)", //Caug7(b9)
        "0, 4, 8, 10, 14" : "aug9", //Caug9
        "0, 4, 8, 10, 14, 18" : "aug9(#11)", //Caug9(#11)
        "0, 3, 7, 10" : "m7", //Cm7
        "0, 3, 7, 10, 14" : "m9", //Cm9
        "0, 3, 7, 10, 13" : "m7(b9)", //Cm7(b9)
        "0, 3, 7, 10, 17" : "m7(11)", //Cm7(11)
        "0, 3, 7, 10, 14, 17" : "m9(11)", //Cm9(11)
        "0, 3, 7, 10, 21" : "m7(13)", //Cm7(13)
        "0, 3, 6, 10" : "m7(b5)", //Cm7(b5)
        "0, 3, 6, 10, 17" : "m7(b5,11)", //Cm7(b5,11)
        "0, 3, 6, 10, 20" : "m7(b5,b13)", //Cm7(b5,b13)
        "0, 4, 7, 11, 17" : "M7(11)", //CM7(11)
        "0, 4, 7, 11, 21" : "M7(13)", //CM7(13)
        "0, 4, 7, 11, 14, 21" : "M7(9,13)", //CM7(9,13)
        "0, 4, 7, 11, 14, 18, 21" : "M7(9,#11,13)", //CM7(9,#11,13)
        "0, 3, 6" : "dim", //Cm(b5), ((Cdim)) //これだけ増やす
        "0, 3, 6, 9" : "dim7", //Cdim7
        //Cim(addD)以降はちょっと保留
    };

    //ディスツ
    const Dists = { //数字はルートからの半音の距離、上の逆バージョン
        "" : [0, 4, 7],
        "6" : [0, 4, 7, 9],
        "M7" : [0, 4, 7, 11],
        "M9" : [0, 4, 7, 11, 14],
        "M11" : [0, 4, 7, 11, 14, 17],
        "M7(#5)" : [0, 4, 8, 11],
        "M7(#11)" : [0, 4, 7, 11, 18],
        "M9(#11)" : [0, 4, 7, 11, 14, 18],
        "sus4" : [0, 5, 7],
        "aug" : [0, 4, 8],
        "(b5)" : [0, 4, 6],
        "5" : [0, 7],
        "69" : [0, 4, 7, 9, 14],
        "69(#11)" : [0, 4, 7, 9, 14, 18],
        "add9" : [0, 4, 7, 14],
        "add2" : [0, 2, 4, 7],
        "add4" : [0, 4, 5, 7],
        "m" : [0, 3, 7],
        "m7(b5)" : [0, 3, 6, 10],
        "maug" : [0, 3, 8],
        "m6" : [0, 3, 7, 9],
        "m69" : [0, 3, 7, 9, 14],
        "mM7" : [0, 3, 7, 11],
        "mM9" : [0, 3, 7, 11, 14],
        "madd9" : [0, 3, 7, 14],
        "7" : [0, 4, 7, 10],
        "9" : [0, 4, 7, 10, 14],
        "11" : [0, 4, 7, 10, 14, 17],
        "m9(11)" : [0, 3, 7, 10, 14, 17],
        "13" : [0, 4, 7, 10, 14, 17, 21],
        "m13" : [0, 3, 7, 10, 14, 17, 21],
        "M13" : [0, 4, 7, 11, 14, 17, 21],
        "7sus4" : [0, 5, 7, 10],
        "7(b5)" : [0, 4, 6, 10],
        "7(b5,b9)" : [0, 4, 6, 10, 13],
        "7(b5,#9)" : [0, 4, 6, 10, 15],
        "7(b5,b9,13)" : [0, 4, 6, 10, 13, 21],
        "7(b9)" : [0, 4, 7, 10, 13],
        "7(b9,11)" : [0, 4, 7, 10, 13, 17],
        "7(b9,13)" : [0, 4, 7, 10, 13, 21],
        "7(b9,b13)" : [0, 4, 7, 10, 13, 20],
        "7(#9)" : [0, 4, 7, 10, 15],
        "7(#9,13)" : [0, 4, 7, 10, 15, 21],
        "7(#9,b13)" : [0, 4, 7, 10, 15, 20],
        "7(13)" : [0, 4, 7, 10, 21],
        "7(#11)" : [0, 4, 7, 10, 18],
        "9sus4" : [0, 5, 7, 10, 14],
        "9(b5)" : [0, 4, 6, 10, 14],
        "9(b5,13)" : [0, 4, 6, 10, 14, 21],
        "9(#11)" : [0, 3, 7, 10, 14, 18],
        "aug7" : [0, 4, 8, 10],
        "aug7(b9)" : [0, 4, 8, 10, 13],
        "aug9" : [0, 4, 8, 10, 14],
        "aug9(#11)" : [0, 4, 8, 10, 14, 18],
        "m7" : [0, 3, 7, 10],
        "m9" : [0, 3, 7, 10, 14],
        "m7(b9)" : [0, 3, 7, 10, 13],
        "m7(11)" : [0, 3, 7, 10, 17],
        "m7(13)" : [0, 3, 7, 10, 21],
        "m7(b5,11)" : [0, 3, 6, 10, 17],
        "m7(b5,b13)" : [0, 3, 6, 10, 20],
        "M7(11)" : [0, 4, 7, 11, 17],
        "M7(13)" : [0, 4, 7, 11, 21],
        "M7(9,13)" : [0, 4, 7, 11, 14, 21],
        "M7(9,#11,13)" : [0, 4, 7, 11, 14, 18, 21],
        "dim" : [0, 3, 6],
        "dim7" : [0, 3, 6, 9],
        //Cim(addD)以降はちょっと保留
    };

    const [ hitChords, setHitChords ] = useState([]);
    const [ preChords, setPreChords ] = useState([]);

    const { isSelectedArr, setIsSelectedArr } = useContext(KeySelectedContext);
    const { isTempSelectedArr, setIsTempSelectedArr} = useContext(KeyTempSelectedContext); //仮
    const {isTemp, setIsTemp} = useContext(IsTempContext); //false:本有効 true:仮有効

    let hitChordNameList = []; //一致コード名リスト
    let preChordNameList = []; //予測コードリスト
    /*コードの表示*/
    useEffect(() => {
        let octave;
        let nowChordArray;
        isSelectedArr.sort(); //昇順ソート
        //ルート音を/12してオクターブを求めて、全ての音をずらす
        octave = Math.floor(isSelectedArr[0] / 12); //小数点切り捨て //ex[36, 40, 43] oc=3
        nowChordArray = isSelectedArr.map(dist => (dist - (octave * 12))); //ex[0, 4, 7]
        

        // const bigDisplayElement = document.getElementById("big-display");  //最初のディスプレイ
        // const subElement = document.getElementById("sub"); //他候補を入れる場所
        
        let calcNowChordArray; //-12してソートされた配列(転回形用固有値)
        let calcFormChordArray; //ルート音分ずらされた配列(Chordで判別可能な形)
        let originDistRoot //最低音のC3からの距離
        let originRoot; //[○]m7/□
        let lowestKey; //○m7/[□] //初回を除く転回形用の最低音
        let strArray; //配列から文字列に変換用
        let chordName; //コード名
        let calcArray = [...nowChordArray]; //計算用配列にコピー
        
        

        ///導出///
        for (let i = (calcArray.length); i > 0; i--) { //右から順番に-12する
            if (i !== calcArray.length) calcArray[i] -= 12; //mainは-12せずオリジナル
            
            calcNowChordArray = [...calcArray]; //コピー
            calcNowChordArray.sort((a, b) => a - b); //昇順ソート、ここで[0]がオリジナルのルート音
            originDistRoot = calcNowChordArray[0]; 
            // eslint-disable-next-line no-loop-func
            calcFormChordArray = calcNowChordArray.map(dist => (dist - originDistRoot)); //ルート分全部の音をずらす
            // console.log("struct: " + calcFormChordArray);
            //配列をcsv文字例に変換
            strArray = calcFormChordArray.join(", ");
            //一致するコードのリストを生成
            originRoot = (12+(calcNowChordArray[0]%12))%12; //正の値でRootsに対応するように //FonCが表示されなかった原因
            if (Roots[originRoot] !== undefined && Chords[strArray] !== undefined) { //存在しない場合弾かれる
                if ((i === calcArray.length) || ((Roots[originRoot] !== Roots[nowChordArray[0]]) && (i !== calcArray.length))) { //ConCなどを防ぐ
                    lowestKey = (i === calcArray.length) ? "" : `/${Roots[nowChordArray[0]]}` //初回のみonはなし
                    chordName = `${Roots[originRoot]}${Chords[strArray]}` + lowestKey;
                    hitChordNameList.push(chordName);
                    if (Chords[strArray] === "dim") { //dimのみ、m(b5)の要素も作成する
                        chordName = `${Roots[originRoot]}m(b5)` + lowestKey;
                        hitChordNameList.push(chordName);
                    }
                }
            //予測されたコードのリストを生成
            }
            if (Roots[originRoot] !== undefined && i === calcArray.length) { //structは完全一致しないけど、一部一致したものを探そう(転回系は考えない)
                
                preChordNameList = Object.keys(Chords)
                    .map(k => `${calcFormChordArray //一致数:distの配列
                        .map(i => new RegExp(`[ ]${String(i)}([^0-9]|,|$)`, "d")) //正規表現の配列
                        .reduce((result, reg) => result + (k.match(reg)!==null?1:0), 0)}:${k}`) //一致数導出
                    .filter(s => s.split(":")[0] !== "0") //不一致除外
                    .sort((s1, s2) => {
                        //第二ソート(dist配列文字数-昇順)
                        if (s1.split(":")[1].length > s2.split(":")[1].length) return 1;
                        if (s1.split(":")[1].length < s2.split(":")[1].length) return -1;
                        //第一ソート(重複数-降順)
                        if (s1.split(":")[0] > s2.split(":")[0]) return -1;
                        if (s1.split(":")[0] < s2.split(":")[0]) return 1;
                        
                        return 1;
                    }) //一致数降順ソート
                    .map(s =>`${s.split(":")[0]}:${Roots[originRoot]}${Chords[s.split(":")[1]]}`) //連想配列にkeyを与えてコードを取り出す //3:CM7

                    // preChordNameList = Object.keys(Chords)
                    // .map(k => `${calcFormChordArray //一致数:distの配列
                    //     .map(i => new RegExp(`[ ]${String(i)}([^0-9]|,|$)`, "d")) //正規表現の配列
                    //     .reduce((result, reg) => result + (k.match(reg)!==null?1:0), 0)}:${k}`) //一致数導出
                    // .filter(s => s.split(":")[0] !== "0") //不一致除外
                    // .sort((s1, s2) => s2.split(":")[0] - s1.split(":")[0]) //一致数降順ソート
                    // .map(s =>`${s.split(":")[0]}:${Roots[originRoot]}${Chords[s.split(":")[1]]}`) //連想配列にkeyを与えてコードを取り出す //3:CM7
            }
        }

        setHitChords(() => [...hitChordNameList]);
        setPreChords(() => [...preChordNameList]);

    }, [isSelectedArr]);

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

    /*コードを選択*/
    const registChord = (chord) => {
        if (chord.indexOf("/") !== -1) {
            [ chord ] = chord.split("/");
            setIsSelectedArr((prev) => [...prev]); //転回系は確定で前鳴ったやつと同じ
        } else {
            const { structure } = splitChord(chord); //このときルートは必要ない
            //上書き用の配列を作成
            const newSelectedArr = [...Dists[structure]]; //0,3,7
            if (newSelectedArr !== null || newSelectedArr !== undefined) {
                setIsSelectedArr(() => [...newSelectedArr.map(dist => dist + isSelectedArr[0])]);
            }
        }
    }

    /*コードを仮選択*/
    const tempSelect = (chord) => {
        if (chord.indexOf("/") !== -1) {
            [ chord ] = chord.split("/");
            setIsTempSelectedArr(() => [...isSelectedArr]); //ここ違うので注意、本選択と同じ
        } else {
            const { structure } = splitChord(chord); //このときルートは必要ない
            //上書き用の配列を作成
            const newSelectedArr = [...Dists[structure]]; //0,3,7
            if (newSelectedArr !== null || newSelectedArr !== undefined) {
                setIsTempSelectedArr(() => [...newSelectedArr.map(dist => dist + isSelectedArr[0])]);
            }
        }
        setIsTemp(() => true);
    }

    /*コードを仮選択を解除*/
    const cancelTempSelect = (chord) => {
        setIsTemp(() => false);
    }


    //正常
    console.log("検索結果: " + hitChords);
    console.log("予測: " + preChords);

    //表示配列生成
    const hitElemArr = []; //こっちが機能してない？
    const preElemArr = [];

    const mainChordsStyle = {
        color: "#4d3d3d",
        fontSize: "50px",
        fontWeight: "bold",
        padding: "15px",
        borderRadius: "27px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        lineHeight: "100px", /* 重なり回避用 */
    };

    hitChords.forEach((chord, i) => {
        //----コードによって表示する背景を変える↓--------
        if(chord.includes("C")) mainChordsStyle["backgroundColor"] = "#FFE0E0";
        else if (chord.includes("C#")) mainChordsStyle["backgroundColor"] = "#FFF0E0";
        else if (chord.includes("D")) mainChordsStyle["backgroundColor"] = "#FFFFE0";
        else if (chord.includes("D#")) mainChordsStyle["backgroundColor"] = "#EFFFE0";
        else if (chord.includes("E")) mainChordsStyle["backgroundColor"] = "#E0FFE0";
        else if (chord.includes("F")) mainChordsStyle["backgroundColor"] = "#E0FFF0";
        else if (chord.includes("F#")) mainChordsStyle["backgroundColor"] = "#E0FFFF";
        else if (chord.includes("G")) mainChordsStyle["backgroundColor"] = "#E0F0FF";
        else if (chord.includes("G#")) mainChordsStyle["backgroundColor"] = "#E0E0FF";
        else if (chord.includes("A")) mainChordsStyle["backgroundColor"] = "#EFE0FF";
        else if (chord.includes("A#")) mainChordsStyle["backgroundColor"] = "#FFE0FF";
        else if (chord.includes("B")) mainChordsStyle["backgroundColor"] = "#FFE0F0";
        //----コードによって表示する背景を変える↑--------
        const elem = <span key={i} 
                            class="main" 
                            style={mainChordsStyle}
                            className="main"
                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = "orange";
                                                tempSelect(chord);
                                            }
                            }
                            onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = judge_color(e.currentTarget.innerHTML);
                                            cancelTempSelect(chord);
                                        }
                            }
                            onDoubleClick={() => registChord(chord)}
                        >{chord}</span>
        hitElemArr.push(elem);
        if ((i + 1) % 5 === 0) {
            const br = <br />;
            hitElemArr.push(br);
        }
    });

    function judge_color(nameOfChord){ //コードの名前(string)を代入するとコードに対応する色(string)を返す
        if(nameOfChord.includes("C")) return "#FFE0E0";
        else if (nameOfChord.includes("C#")) return "#FFF0E0";
        else if (nameOfChord.includes("D")) return "#FFFFE0";
        else if (nameOfChord.includes("D#")) return "#EFFFE0";
        else if (nameOfChord.includes("E")) return "#E0FFE0";
        else if (nameOfChord.includes("F")) return "#E0FFF0";
        else if (nameOfChord.includes("F#")) return "#E0FFFF";
        else if (nameOfChord.includes("G")) return "#E0F0FF";
        else if (nameOfChord.includes("G#")) return "#E0E0FF";
        else if (nameOfChord.includes("A")) return "#EFE0FF";
        else if (nameOfChord.includes("A#")) return "#FFE0FF";
        else if (nameOfChord.includes("B")) return "#FFE0F0";
    }

    const subChordsStyle = {
    };

    preChords.map(s => s.split(":")).forEach((splited_element, i) => { //splited_elementの中はString型のarray [重複数, 推測コード名]
        //----コードによって表示する背景を変える↓--------
        subChordsStyle["backgroundColor"] = judge_color(splited_element[1]);
        //----コードによって表示する背景を変える↑--------
        const elem = <span key={i}
                            className="sub"
                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = "orange";
                                                tempSelect(splited_element[1]);
                                            }
                            }
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = judge_color(e.currentTarget.innerHTML);
                                cancelTempSelect(splited_element[1]);
                                            }
                            }
                            onDoubleClick={() => registChord(splited_element[1])}
                            style={subChordsStyle}>
                        <div style={{height: "30px"}}>
                            {splited_element[1]}
                        </div>
                        <div style={{fontSize: "15px", margin: "0px"}}>
                            (重複数:{splited_element[0]})
                        </div>
                    </span>;
                    
        preElemArr.push(elem);
        if ((i + 1) % 5 === 0) {
            const br = <br />;
            preElemArr.push(br);
        }
    });



//{elemArr.map(e => e)}
//後でCSS持ってくる

    return (
        <>
            <div className="display_status">一致するコード:</div>
            <p id="main-display">
                {hitElemArr.map(e => e)}
            </p>
            <div className="display_status">類似するコード({preChords.length}個):</div>
            <p id="sub-display">
                {preElemArr.map(e => e)}
            </p>
        </>
    )
}