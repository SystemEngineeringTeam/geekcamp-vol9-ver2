import { useEffect } from "react";

export default function DisplayCard(){
    const styleDisplayCard: { [key: string]: string } = {
        height: "140px",
        backgroundColor: "#3282B8",
        margin: "10px",
        fontSize: "25px",
        textAlign: "center",
    }
    
    useEffect( () => { //初回レンダリング時に各ディスプレイカードにdragoverのaddeventlistnerを設置
        const target = document.getElementsByClassName("DisplayCard");
        for(let i=0; i<4; i++){
            target[i].addEventListener("dragover", (event:any) => { //ドラッグしてディスプレイカードの上に来たときの処理
                event.preventDefault(); //通常のブラウザではドラッグするとファイルを開くなどの処理が行われるがそういったブラウザ標準の機能を防ぐためのメソッド
                event.dataTransfer.dropEffect = 'copy';
            });

            target[i].addEventListener("drop", (event:any) => { //ドロップしたときの処理
                let text = '';
                event.preventDefault();
                if(event.dataTransfer.items){//-----------------------何やってるかわからないゾーン-------------------
                    for(const item of event.dataTransfer.items) {
                        const {kind, type} = item;
                        if(kind === "string"){
                            if(type === "text/plain"){
                                text = event.dataTransfer.getData(type) //-------------------------------------
                                const target = document.getElementsByClassName("DisplayCard") as HTMLCollectionOf<HTMLElement>;
                                target[i].innerHTML = text; //取得したテキストをディスプレイカードに表示
                                target[i].dataset.occupied = "true"; //枠が埋まったのでoccupiedをtrueに
                            }
                        };
                    }
                }
            })
        } 
    }, []);

    return (
        <div className="DisplayCard" style={styleDisplayCard} data-occupied="false">
            カードをここにドラッグしてドロップ
        </div>
    )
}