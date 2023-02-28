import { useContext, useEffect } from "react";
import { KeySelectedContext } from "./startPage"
import { KeyTempSelectedContext } from "./startPage"
import { IsTempContext } from "./pianoPage"

export default function PianoControler(){
    const { isSelectedArr, setIsSelectedArr } = useContext(KeySelectedContext);
    const { isTempSelectedArr, setIsTempSelectedArr} = useContext(KeyTempSelectedContext); //仮
    const {isTemp, setIsTemp} = useContext(IsTempContext); //false:本有効 true:仮有効

     /* キー選択解除 */
    const resetKeys = () => {
        setIsSelectedArr(() => []);
    }

    /* 右へ平行移動 */
    const RightParaMove = () => {
        if (isSelectedArr.some(dist => dist >= 60)) return 0; //最高音は弾く
        setIsSelectedArr(prev => [...prev.map(dist => dist + 1)]);
    }

    /* 左へ平行移動 */
    const LeftParaMove = () => {
        if (isSelectedArr.some(dist => dist <= 24)) return 0; //最低音は弾く
        setIsSelectedArr(prev => [...prev.map(dist => dist - 1)]);
    }

    /* 右へオクターブ平行移動 */
    const RightParaMoveOctave = () => {
        if (isSelectedArr.some(dist => dist > 48)) return 0; //最高音は弾く
        setIsSelectedArr(prev => [...prev.map(dist => dist + 12)]);
    }

    /* 左へオクターブ平行移動 */
    const LeftParaMoveOctave = () => {
        if (isSelectedArr.some(dist => dist < 36)) return 0; //最低音は弾く
        setIsSelectedArr(prev => [...prev.map(dist => dist - 12)]);
    }

    // const moveButtonStyle = {
    //     width: "125px",
    //     height: "160px"
    // }

    const moveButtonStyle = {
        width: "125px",
        height: "100px",
        position: "relative",
    }

    const moveOctaveButtonStyle = {
        width: "125px",
        height: "60px",
        position: "relative",
    }


    const clearButtonStyle = {
        width: "60px",
        height: "160px",
        fontSize: "5px"
    }


    return(
        <>
            <>
                <button style={moveButtonStyle} onClick={() => LeftParaMove()}>◀︎</button>
                <button style={moveButtonStyle} onClick={() => RightParaMove()}>▶︎</button>
                <button style={moveOctaveButtonStyle} onClick={() => LeftParaMoveOctave()}>octave up<br />◀︎</button>
                <button style={moveOctaveButtonStyle} onClick={() => RightParaMoveOctave()}>octave down<br />▶︎</button>
                <button style={clearButtonStyle} onClick={() => resetKeys()}>キー選択解除</button>
            </>
        </>
    )
}