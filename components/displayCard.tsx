import { useEffect, useImperativeHandle, useRef } from "react";
import { forwardRef } from 'react';


export default forwardRef(function DisplayCard(props, ref){
    const displayCardEl = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => displayCardEl.current!); //forweredrefとuseRefを併用
    const styleDisplayCard: { [key: string]: string } = {
        height: "80px",
        width: "120px",
        backgroundColor: "#FFFFFF",
        margin: "10px",
        fontSize: "25px",
        textAlign: "center",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius:" 8px",
    }
    
    useEffect( () => { //初回レンダリング時に各ディスプレイカードにdragoverのaddeventlistnerを設置
            displayCardEl.current?.addEventListener("dragover", (event:any) => { //ドラッグしてディスプレイカードの上に来たときの処理
                event.preventDefault(); //通常のブラウザではドラッグするとファイルを開くなどの処理が行われるがそういったブラウザ標準の機能を防ぐためのメソッド
                event.dataTransfer.dropEffect = 'copy';
            });
            displayCardEl.current?.addEventListener("drop", (event:any) => { //ドロップしたときの処理
                let text = '';
                event.preventDefault();
                if(event.dataTransfer.items){//-----------------------何やってるかわからないゾーン-------------------
                    for(const item of event.dataTransfer.items) {
                        const {kind, type} = item;
                        if(kind === "string"){
                            if(type === "text/plain"){
                                text = event.dataTransfer.getData(type) //-------------------------------------
                                displayCardEl.current!.innerHTML = text; //取得したテキストをディスプレイカードに表示
                                displayCardEl.current!.dataset.occupied = "true"; //枠が埋まったのでoccupiedをtrueに
                            }
                        };
                    }
                }
            }) 
    }, []);

    return (
        <div ref={displayCardEl} className="DisplayCard" style={styleDisplayCard} data-occupied="false">
        </div>
    )
})