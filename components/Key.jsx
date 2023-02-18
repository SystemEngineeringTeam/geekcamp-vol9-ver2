import { useState, memo, useContext, useEffect } from "react";
import { KeySelectedContext } from "./pianoPage"
import { KeyTempSelectedContext } from "./pianoPage"
import { IsTempContext } from "./pianoPage"

export const Key = memo((props) => {
    const {keyname, className, dist, style} = props;
    // let {} = props;
    console.log("keyレンダリング");
    const [isselect, setIsselect] = useState(false);
    
    //select系
    const { isSelectedArr, setIsSelectedArr } = useContext(KeySelectedContext);
    const { isTempSelectedArr, setIsTempSelectedArr} = useContext(KeyTempSelectedContext); //仮
    const { isTemp, setIsTemp } = useContext(IsTempContext); //false:本有効 true:仮有効
    

    /*選択時に音を鳴らす+選択肢表示*/
    const selectKey = () => {
        console.log(isSelectedArr);
        // let isPlay = false;
        setIsselect(bl => !bl); //選択・未選択を入れ替える。
        setIsSelectedArr(arr => {
            const hasDist = String(arr).includes(dist);
            if (hasDist) { //含む
                return arr.filter(d => (d !== dist));
            } else { //含まない
                return [...arr, dist];
            }
        });

        // const selectedElements = document.querySelectorAll(`[data-isselect="true"]`);
        // if (isPlay) playSound(); //押下時のみ、離上時は鳴らさない

    }

    useEffect(() => {
        if (isSelectedArr === null) return 0;

        if (isSelectedArr.reduce((result, keyNum) => result || (keyNum === dist), false)) {
            setIsselect(() => true);
        } else if (isselect === true) {
            setIsselect(() => false);
        }
    }, [isSelectedArr, isTemp]);

    /*キーを外部から変更(仮)*/
    useEffect(() => {
        if (isTempSelectedArr === null) return 0;

        if (isTempSelectedArr.reduce((result, keyNum) => result || (keyNum === dist), false)) {
            setIsselect(() => true);
        } else if (isselect === true) {
            setIsselect(() => false);
        }
    }, [isTempSelectedArr]);

    //() => selectKey()
    return <div 
        
        data-keyname={keyname}
        data-isselect={isselect}
        data-dist={dist}
        onClick={() => selectKey()}
        className={className}
        style={style}>
        </div>; //空divを生成
});


/**
 *          
 */