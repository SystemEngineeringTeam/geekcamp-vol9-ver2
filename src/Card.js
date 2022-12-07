import { useEffect } from "react";

export const Card = (props) => {
    const CardStyle = {
        textAlign: "center",
        border: "1px solid #0F4C75",
        width: "250px",
        height: "100px",
        backgroundColor: "#BBE1FA",
        padding: "1px"
    }

    const EnterChangeColor = () =>{ //カード要素にカーソルが入ってきたら背景色をオレンジにするコード
        const target = document.getElementsByClassName("card");
        target[props.num].style.backgroundColor = "orange";
    }
    const LeaveChangeColor = () =>{ //カード要素からカーソルが離れたら色を元に戻すコード
        const target = document.getElementsByClassName("card");
        target[props.num].style.backgroundColor = "#BBE1FA";
    }
    const ClickEvent = () =>{ //カードがクリックされたら、ヘッダーにクリックされたカードの要素名を追加。 ヘッダーを親要素としてspanタグを子要素に加えて追加していく。
        const targetOfHeader = document.getElementById("display"); //headerのidは"display"
        const childrenNum = targetOfHeader.childElementCount; //カードをクリックした時点で、ディスプレイに表示されている要素数を数える
        const createSpan = document.createElement("span"); //ヘッダーに表示する文字ごとにspan要素を作る 
        createSpan.id = "Number" + childrenNum; //span要素ごとに0から番号をidに振る　id="Number0" id="Number1" ...
        targetOfHeader.appendChild(createSpan); //header要素に子要素として作ったspanを追加
        if(childrenNum == 0){ //最初の一個目だったら、そのまま要素名を追加
            document.getElementById("Number" + childrenNum).innerHTML = props.children; //新しく作ったspanにテキストを代入
        }else{ //2個目以降だったら、矢印を先頭に加えて要素名を追加
            document.getElementById("Number" + childrenNum).innerHTML = "→" + props.children; //新しく作ったspanにテキストを代入
        }
        
    }

    useEffect( () => { //初回レンダリング時にカードにaddeventlistnerを設置
        console.log("a");
        const target = document.getElementsByClassName("card");
        target[props.num].addEventListener("mouseenter", EnterChangeColor);
        target[props.num].addEventListener("mouseleave", LeaveChangeColor);
        target[props.num].addEventListener("click", ClickEvent);
    }, []);

    return(
        <>
            <div className="card" style={CardStyle}>{props.children}</div>
        </>
    )
};

export default Card;
　