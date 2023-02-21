
import { Key } from "./Key";
import { memo, useContext } from "react";
import { useRef, useEffect } from "react";
import { KeySelectedContext } from "./startPage";
import { KeyTempSelectedContext } from "./startPage";
import { useGetSoundPlayer } from "../hooks/useGetSoundPlayer";


//ここから音が出てる
export const Keyboard = memo(() => {
    console.log("Keyboardレンダリング");
    // const keyboard = document.getElementById('pianokeyboard');
const {PlayFuncs, StopFuncs} = useGetSoundPlayer();
    const { isSelectedArr, setIsSelectedArr } = useContext(KeySelectedContext);
    const { isTempSelectedArr, setIsTempSelectedArr } = useContext(KeyTempSelectedContext);
    
    const cofList = [
        "Gb", //0
        "Db", //1
        "Ab", //2
        "Eb", //3
        "Bb", //4
        "F", //5
        "C", //6
        "G", //7
        "D", //8
        "A", //9
        "E", //10
        "B", //11
    ]; //五度圏をGb(0)から並べたもの

    let keyNum = 37; //デフォルトのキー数
    let distCount = 24; //デフォルトはC2から //36:C3

    // const getWidthOf = (element) => {
    //     const r = element.getBoundingClientRect();
    //     return r.right - r.left;
    // };

    // keyboard.innerHTML = ''; //中身のHTML書き換え
    let cofIndex = 6; //五度圏(circle of fifths)、初期C(6)
    let whiteindex = 0;
    //// let keyIndex = 0;
    // let whitewidth;
    // let blackoffsets;
    let className;
    let left;
    const elemArr = [];
    const whitewidth = 40; //とりあえず書く //元42
    const blackwidth = 27; //width + 2
    const blackoffsets = Array(5).fill(blackwidth)
        .map((w, i) => i > 1 ? (w / i) : (w - w / (4 - i))); //黒鍵ずらし


    //selectが変更された時にplay実行
    const prevArrRef = useRef([]);
    const prevArr = prevArrRef.current; //前のArrを保持

    useEffect(() => {
        console.log("今の音: " + isSelectedArr);
        console.log("前の音: " + prevArr);
        prevArr
            .filter(dist1 => !(isSelectedArr
                .reduce((result, dist2) => result || (dist1 === dist2), false)))
            .forEach((dist) => {
                console.log(dist);
                StopFuncs[dist]()
            });

        isSelectedArr.sort(); //昇順ソート
        // if (isSelectedArr.length > prevArr.length)
            isSelectedArr.forEach((dist) => PlayFuncs[dist]()); //再生
        prevArrRef.current = [...isSelectedArr];console.log("今の音: " + isSelectedArr);

        /*
        console.log("前の音: " + prevArr);
        prevArr.forEach((dist) => StopFuncs[dist]()); //前の音を止める
        isSelectedArr.sort(); //昇順ソート
        if (isSelectedArr.length > prevArr.length)
            isSelectedArr.forEach((dist) => PlayFuncs[dist]()); //再生
        prevArrRef.current = [...isSelectedArr];// displayChord(isSelectedArr);
        */

    }, [isSelectedArr]);
    //[isSelectedArr]いらないっぽい //※要ります
    
    /*音を鳴らす(仮)*/
    useEffect(() => {
        console.log("今の音: " + isTempSelectedArr);
        console.log("前の音: " + prevArr);
        prevArr
            .filter(dist1 => !(isTempSelectedArr
                .reduce((result, dist2) => result || (dist1 === dist2), false)))
            .forEach((dist) => {
                console.log(dist);
                StopFuncs[dist]()
            });

        isTempSelectedArr.sort(); //昇順ソート
        // if (isTempSelectedArr.length > prevArr.length)
            isTempSelectedArr.forEach((dist) => PlayFuncs[dist]()); //再生
        prevArrRef.current = [...isTempSelectedArr];
        console.log("今の音: " + isTempSelectedArr);

    }, [isTempSelectedArr]);

    //キーボード描画
    //Array(要素数).fill()で初期化
    Array(keyNum).fill().forEach(() => { //配列から順番に一つずつ取り出して処理する
        const keyName = cofList[cofIndex] + (3 + Math.floor(distCount / 12)); //値が変更する前に、最初に定義して確定させる
        //ここ！！！！！！！！！！！！！！
        // keyboard.appendChild(element); //divキーボードの子として追加
        
        // element.dataset.key = cofList[cofIndex] + (3 + Math.floor(distCount / 12)); //data-key属性の付与
        // element.dataset.dist = distCount; //data-dist属性の付与
        
        // element.setAttribute("onclick", `selectKey('${element.dataset.key}')`); //onclick属性の付与
        
        if (cofIndex >= 5) { //6-11(白鍵)
            // element.classList.add('whitekey'); //classを付与
            className = "whitekey";
            // if (!whitewidth) whitewidth = getWidthOf(element); //白鍵幅取得(初回のみ)
            left = whitewidth * whiteindex; //要素を配置する位置を計算(白鍵の幅*白鍵の数)
            whiteindex++;
            cofIndex -= 5; //五度圏左回りで半音上に
        } else { //五度圏0-5(黒鍵)
            // element.classList.add('blackkey'); //classを付与
            className = "blackkey";
            // if (!blackoffsets)
            //     blackoffsets = Array(5).fill(getWidthOf(element))
            //         .map((w, i) => i > 1 ? (w / i) : (w - w / (4 - i))); //黒鍵ずらし
            left = whitewidth * whiteindex - blackoffsets[cofIndex];
            cofIndex += 7; //五度圏右回りで半音上に
        }
        
        let leftObj = {left: `${left}px`};
        const element = <Key 
            key={keyName}
            keyname={keyName}
            dist={distCount}
            // onclick="selectKey('C3')"
            className={className}
            style={leftObj}></Key>; //空divを生成
            
        elemArr.push(element); //要素を配列に追加
        distCount++;
        // element.style.left = left + 'px';
    });

    // return elemArr.map(e => e);
    //<div className="keyboard">
    return (
        <div id="pianokeyboard">
            {elemArr.map(e => e)}
        </div>
    )
});
