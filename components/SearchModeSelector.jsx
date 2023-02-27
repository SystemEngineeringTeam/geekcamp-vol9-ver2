import { useContext } from "react";
import RadioButton from "./RadioButton";
import { selectBoxValueContext } from "./startPage";
import { sortTypeContext } from "./startPage";

export default function SearchModeSelector(){
    const {selectBoxValue, setSelectBoxValue} = useContext(selectBoxValueContext); //絞り込み
    const {sortType, setSortType} = useContext(sortTypeContext); //ソート

    const narDownOptions = [
        { value: "simiR", label: "類似(ルート音固定)" },
        { value: "simi", label: "類似" },
    ];
    /*ソート方法*/
    const sortOptions = [
        { value: "keyNum", label: "キー数" },
        { value: "hitNum", label: "重複数" },
        { value: "rootIndex", label: "ルート音" },
        { value: "keyNum hitNum", label: "キー数-重複数" },
        { value: "hitNum keyNum", label: "重複数-キー数" },
        { value: "rootIndex hitNum", label: "ルート音-重複数" },
        { value: "rootIndex keyNum", label: "ルート音-キー数" },
    ];

    return(
        <> 
            <div className="search_mode_area" style={{display:"inline-block", marginRight:"10px"}}>
                <span style={{fontSize:"18px", margin:"0px"}}>絞り込み: </span>
                <span style={{display: "inline-block"}}>
                    <RadioButton
                        option={narDownOptions} //キー名 value, label をもった連想配列
                        setFunction={setSelectBoxValue} //ボタンが押されたときに選ばれたボタンのvalueをセットするために使う
                        state={selectBoxValue.value} //現在の状態を認識するためのuseStateを指定
                    />
                </span>
            </div>
            <div className="search_mode_area" style={{display:"inline-block"}}>
            <span style={{fontSize:"18px", margin:"0px"}}>並べ替え: </span>
                <span style={{display: "inline-block"}}>
                    <RadioButton
                        option={sortOptions} //キー名 value, label をもった連想配列
                        setFunction={setSortType}//ボタンが押されたときに選ばれたボタンのvalueをセットするために使う
                        state={sortType.value} //現在の状態を認識するためのuseStateを指定
                    />
                </span>
            </div>
        </>
    )
}