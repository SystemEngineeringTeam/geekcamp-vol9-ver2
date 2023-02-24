/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-loop-func */
import { KeySelectedContext } from "./startPage"
import { KeyTempSelectedContext } from "./startPage"
import { IsTempContext } from "./pianoPage"
import { useEffect, useContext, useState } from "react";
import { LinedDistsContext } from "./startPage";
import Select from "react-select";

export const ChordDisplay = (props) => {
    console.log("ChordDisplayレンダリング");

    const { linedDistsArr, setLinedDistsArr } = useContext(LinedDistsContext);
    /*絞り込み方法*/
    const narDownOptions = [
        { value: "simiR", label: "類似(ルート音固定)" },
        { value: "simi", label: "類似" },
    ];
    /*ソート方法*/
    // const 

    const [selectBoxValue, setSelectBoxValue] = useState(narDownOptions[0]);
    

    //ルート配列
    const RootsArr = [
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


    const AdjustRootsArr = [
        "F", //-7
        "Gb", //-6
        "G", //-5
        "Ab", //-4
        "A", //-3
        "Bb", //-2
        "B", //-1
        "C", //0
        "Db", //1
        "D", //2
        "Eb", //3
        "E", //4
    ]

    //ファからシを1オクターブ下げたもの
    const KeyboardRoots = {
        "F": 29, //-7
        "F#": 30,
        "Gb": 30,
        "G": 31,
        "G#": 32,
        "Ab": 32,
        "A": 33,
        "A#": 34,
        "Bb": 34,
        "B": 35,
        "C": 36, //基準
        "C#": 37,
        "Db": 37,
        "D": 38,
        "D#": 39,
        "Eb": 39,
        "E": 40, //+4
//全12個
    };


    
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

    const [ hitChords, setHitChords ] = useState([]);
    const [ preChords, setPreChords ] = useState([]);

    const { isSelectedArr, setIsSelectedArr } = useContext(KeySelectedContext);
    const { isTempSelectedArr, setIsTempSelectedArr} = useContext(KeyTempSelectedContext); //仮
    const {isTemp, setIsTemp} = useContext(IsTempContext); //false:本有効 true:仮有効

    let hitChordNameList = []; //一致コード名リスト
    let preChordNameList = []; //予測コードリスト

    //valueからkeyを取得する関数
    const getKeyByValue = (object, value) => {
        return Object.keys(object).find((key) => object[key] === value)
    }

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
            originRoot = (12+(calcNowChordArray[0]%12))%12; //正の値でRootsArrに対応するように //FonCが表示されなかった原因
            if (RootsArr[originRoot] !== undefined && Chords[strArray] !== undefined) { //存在しない場合弾かれる
                if ((i === calcArray.length) || ((RootsArr[originRoot] !== RootsArr[nowChordArray[0]]) && (i !== calcArray.length))) { //ConCなどを防ぐ
                    lowestKey = (i === calcArray.length) ? "" : `/${RootsArr[nowChordArray[0]]}` //初回のみonはなし
                    chordName = `${RootsArr[originRoot]}${Chords[strArray]}` + lowestKey;
                    hitChordNameList.push(chordName);
                    if (Chords[strArray] === "dim") { //dimのみ、m(b5)の要素も作成する
                        chordName = `${RootsArr[originRoot]}m(b5)` + lowestKey;
                        hitChordNameList.push(chordName);
                    }
                }
            //予測されたコードのリストを生成
            }
            if (RootsArr[originRoot] !== undefined && i === calcArray.length) { //structは完全一致しないけど、一部一致したものを探そう(転回系は考えない)
                if (selectBoxValue.value === "simiR") { //類似(ルート音固定)
                    preChordNameList = Object.keys(Chords)
                    .map(k => `${calcFormChordArray //一致数:構造distの配列
                        .map(i => new RegExp(`[ ]${String(i)}([^0-9]|,|$)`, "d")) //正規表現の配列 //reg:正規表現
                        .reduce((result, reg) => result + (k.match(reg) !== null? 1:0), 1)}:${k}`) //一致数導出 //初期値1はルート音重複
                    .filter(s => s.split(":")[0] !== "1") //不一致除外(1はルート音)
                    .sort((s1, s2) => {
                        //第一ソート(dist配列文字数-昇順)
                        if (s1.split(":")[1].length > s2.split(":")[1].length) return 1;
                        if (s1.split(":")[1].length < s2.split(":")[1].length) return -1;
                        //第二ソート(重複数-降順)
                        if (s1.split(":")[0] > s2.split(":")[0]) return -1;
                        if (s1.split(":")[0] < s2.split(":")[0]) return 1;
                        return 1;
                    }) //一致数降順ソート
                    .map(s =>`${s.split(":")[0]}:${RootsArr[originRoot]}${Chords[s.split(":")[1]]}`) //連想配列にkeyを与えてコードを取り出す //3:CM7
                    

                } else if (selectBoxValue.value === "simi") { //類似
                    const allParaDistsObj = Object.values(Dists)
                    .reduce((resultObj, distsArr) => {
                        for (let i = -7; i < 4; i++)
                            resultObj[AdjustRootsArr[i+7]+getKeyByValue(Dists, distsArr)] = distsArr.map(dist => dist+i); //オブジェクト[コード名] = dist配列
                        return resultObj; //allParaDists, 全てのdistsパターン、ここまでは定数化してもいいかも、chordDisplayの親からpropsとして渡しても良い
                    },{}); //なぜか[]でも動いてた
                    

                preChordNameList = Object.keys(allParaDistsObj)
                    .map(chord => `${allParaDistsObj[chord]
                            .reduce((resultMatchNum, dist) => resultMatchNum + (Number(isSelectedArr
                                .some((select) => select === dist+isSelectedArr[0]))),0)}:${chord}`) //allParaDistsObj[chord].join(", ")
                    .filter(s => s.split(":")[0] !== "0") //不一致除外
                    .sort((s1, s2) => {
                        //第一ソート(重複数-降順) //重複数最優先、その次にコードの簡単さでソートしたい
                        if (s1.split(":")[0] > s2.split(":")[0]) return -1;
                        if (s1.split(":")[0] < s2.split(":")[0]) return 1;
                        //第二ソート(dist配列文字数-昇順)
                        if (s1.split(":")[1].length > s2.split(":")[1].length) return 1;
                        if (s1.split(":")[1].length < s2.split(":")[1].length) return -1;
                        
                        return 1;
                    })
                    // .map(s =>`${s.split(":")[0]}:${RootsArr[originRoot]}${Chords[s.split(":")[1]]}`) //連想配列にkeyを与えてコードを取り出す //3:CM7

                    // console.log(tesutodesu);
                }

                
                
                    // let allParaDists = []; //isSelectedArr(選択されているキー)を全てのルートを通るように平行移動したdistの配列
                    // for (let i = -7; i < 4; i++) 
                    //     allParaDists.push(isSelectedArr.map(dist => dist + i));
                    
                    // let testdesu = allParaDists.map(arr => arr
                    //     .map(k => `${calcFormChordArray //一致数:構造distの配列
                    //     .map(i => new RegExp(`[ ]${String(i)}([^0-9]|,|$)`, "d")) //正規表現の配列
                    //     .reduce((result, reg) => result + (k.match(reg)!==null?1:0), 0)}
                    //     :${k}`) //一致数導出
                    //     )
                    
                    //     console.log(testdesu);
                
                

                

                    // console.log(tesutodesu);
                    // console.log(preChordNameList)
                    // .map(s =>`${s.split(":")[0]}:${RootsArr[originRoot]}${Chords[s.split(":")[1]]}`) //連想配列にkeyを与えてコードを取り出す //3:CM7

                    // .map(distsArr => `${distsArr
                    //     .reduce((resultMatchNum, dist) => resultMatchNum + (Number(isSelectedArr
                    //         .some((select) => select === dist+isSelectedArr[0])))
                    //         ,0)}:${Chords[distsArr.join(",")]}`);

                    // .reduce((resultMatchNum, distsArr) => resultMatchNum + )
                    



                    // let tesutodesu = Object.values(Dists)
                    // .reduce((resultArr, distsArr) => {
                    //     for (let i = -7; i < 4; i++)
                    //         resultArr.push(distsArr.map(dist => dist+i));
                    //     return resultArr; //allParaDists, 全てのdistsパターン、ここまでは定数化してもいいかも、chordDisplayの親からpropsとして渡しても良い
                    // },[]) //{} //文字例dist:るーと？
                    // .map(distsArr => `${distsArr
                    //     .reduce((resultMatchNum, dist) => resultMatchNum + (Number(isSelectedArr
                    //         .some((select) => select === dist+isSelectedArr[0])))
                    //         ,0)}:${Chords[distsArr.join(",")]}`);



                    // .map(k => `${calcFormChordArray //一致数:構造distの配列
                    //     .map(i => new RegExp(`[ ]${String(i)}([^0-9]|,|$)`, "d")) //正規表現の配列
                    //     .reduce((result, reg) => result + (k.match(reg)!==null?1:0), 0)}
                    //     :${k}`) //一致数導出
                    // .filter(s => s.split(":")[0] !== "0") //不一致除外
                    // .sort((s1, s2) => {
                    //     //第二ソート(dist配列文字数-昇順)
                    //     if (s1.split(":")[1].length > s2.split(":")[1].length) return 1;
                    //     if (s1.split(":")[1].length < s2.split(":")[1].length) return -1;
                    //     //第一ソート(重複数-降順)
                    //     if (s1.split(":")[0] > s2.split(":")[0]) return -1;
                    //     if (s1.split(":")[0] < s2.split(":")[0]) return 1;
                    //     return 1;
                    // }) //一致数降順ソート
                    // .map(s =>`${s.split(":")[0]}:${RootsArr[originRoot]}${Chords[s.split(":")[1]]}`) //連想配列にkeyを与えてコードを取り出す //3:CM7
                    
                
            }
        }

        setHitChords(() => [...hitChordNameList]);
        setPreChords(() => [...preChordNameList]);

    }, [isSelectedArr, selectBoxValue]);

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
        if (chord.indexOf("/") !== -1) { //転回系か
            [ chord ] = chord.split("/");
            setIsSelectedArr((prev) => [...prev]); //転回系は確定で前鳴ったやつと同じ
        } else {
            const { root, structure } = splitChord(chord);
            
            if (root === RootsArr[isSelectedArr[0]%12]) { //キーボードから選択されたルート音とカードに記入されたコード名のルート音は等しいか
                //上書き用の配列を作成
                const newSelectedArr = [...Dists[structure]]; //0,3,7
                if (newSelectedArr !== null || newSelectedArr !== undefined) {
                    setIsSelectedArr(() => [...newSelectedArr.map(dist => dist + isSelectedArr[0])]); //キーボードから選択されたルート音を足す
                }
            } else {
                // KeyboardRoots[root] //キーボード上でのルート音、これを全部のdistに足していけば良い
                //上書き用の配列を作成
                const newSelectedArr = [...Dists[structure]]; //0,3,7
                if (newSelectedArr !== null || newSelectedArr !== undefined) {
                    setIsSelectedArr(() => [...newSelectedArr.map(dist => dist + KeyboardRoots[root])]);
                }
            }
        }
    }

    /*コードを仮選択*/
    const tempSelect = (chord) => {
        if (chord.indexOf("/") !== -1) {
            [ chord ] = chord.split("/");
            setIsTempSelectedArr(() => [...isSelectedArr]); //ここ違うので注意、本選択と同じ
        } else {
            // const { structure } = splitChord(chord); //このときルートは必要ない
            // //上書き用の配列を作成
            // const newSelectedArr = [...Dists[structure]]; //0,3,7
            // if (newSelectedArr !== null || newSelectedArr !== undefined) {
            //     setIsTempSelectedArr(() => [...newSelectedArr.map(dist => dist + isSelectedArr[0])]);
            // }
            const { root, structure } = splitChord(chord);
            
            if (root === RootsArr[isSelectedArr[0]%12]) { //キーボードから選択されたルート音とカードに記入されたコード名のルート音は等しいか
                //上書き用の配列を作成
                const newSelectedArr = [...Dists[structure]]; //0,3,7
                if (newSelectedArr !== null || newSelectedArr !== undefined) {
                    setIsTempSelectedArr(() => [...newSelectedArr.map(dist => dist + isSelectedArr[0])]); //キーボードから選択されたルート音を足す
                }
            } else {
                // KeyboardRoots[root] //キーボード上でのルート音、これを全部のdistに足していけば良い
                //上書き用の配列を作成
                const newSelectedArr = [...Dists[structure]]; //0,3,7
                if (newSelectedArr !== null || newSelectedArr !== undefined) {
                    setIsTempSelectedArr(() => [...newSelectedArr.map(dist => dist + KeyboardRoots[root])]);
                }
            }
        }
        setIsTemp(() => true);
    }

    /*コードを仮選択を解除*/
    const cancelTempSelect = (chord) => {
        setIsTemp(() => false);
    }


    //正常
    // console.log("検索結果: " + hitChords);
    // console.log("予測: " + preChords);

    //表示配列生成
    const hitElemArr = [];
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

    //cardよりコピペ
    const addToDisplay = (chord) => { //カードがクリックされたら、ヘッダーにクリックされたカードの要素名を追加。 ヘッダーを親要素としてspanタグを子要素に加えて追加していく。
        const targetOfHeader = document.getElementById("lined-chords"); 
        const childrenNum = targetOfHeader.childElementCount; //カードをクリックした時点で、ディスプレイに表示されている要素数を数える
        const createDiv = document.createElement("div"); //ヘッダーに表示する文字ごとにdiv要素を作る 
        createDiv.className = "DisplayCards"; //クラス名をDisplayCardsにしてcssでデザインを指定.
        createDiv.innerHTML = chord;
        console.log("コード名" + chord);
        targetOfHeader.appendChild(createDiv); //header要素に子要素として作ったspanを追加
        //setLinedDistsArr((prev) => [...prev, Dists[thisStruct].map(dist => dist + RootsArr[thisRoot])]);
        // setLinedDistsArr((prev) => [...prev, isTempSelectedArr]);
        setLinedDistsArr((prev) => {
            prev[chord] = [...isTempSelectedArr];
            return prev;
        });
    }


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
                            onClick={() => addToDisplay(chord)}
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
                            onDoubleClick={() => registChord(splited_element[1])} /* 推測コード名が入ってるはず */
                            onClick={() => addToDisplay(splited_element[1])}
                            style={subChordsStyle}>
                        <div style={{height: "30px"}}>
                            {splited_element[1]}
                        </div>
                        <div style={{fontSize: "15px", margin: "0px"}}>
                            (重複数:{Number(splited_element[0]) }) {/* あとでなおす */}
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
            <div style={{ width: "250px", marginBottom: "10px"}}>
                <Select
                    narDownOptions={narDownOptions}
                    defaultValue={selectBoxValue}
                    onChange={(value) => {
                    value ? setSelectBoxValue(value) : null;
                    }}
                />
            </div>
            <div className="display_status">類似するコード({preChords.length}個):</div>
            <p id="sub-display">
                {preElemArr.map(e => e)}
            </p>
        </>
    )
}