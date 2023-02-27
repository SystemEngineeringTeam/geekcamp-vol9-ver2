import { useContext } from "react";
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

    /* ◀︎へ平行移動 */
    const LeftParaMove = () => {
        if (isSelectedArr.some(dist => dist <= 24)) return 0; //最低音は弾く
        setIsSelectedArr(prev => [...prev.map(dist => dist - 1)]);
    }

    const moveButtonStyle = {
        width: "125px",
        height: "160px"
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
                <button style={clearButtonStyle} onClick={() => resetKeys()}>キー選択解除</button>
            </>
        </>
    )
}