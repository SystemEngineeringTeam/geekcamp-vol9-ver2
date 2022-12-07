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

    const EnterChangeColor = () =>{
        const target = document.getElementsByClassName("card");
        target[props.num].style.backgroundColor = "orange";
    }
    const LeaveChangeColor = () =>{
        const target = document.getElementsByClassName("card");
        target[props.num].style.backgroundColor = "#BBE1FA";
    }
    const ClickEvent = () =>{
        const targetOfHeader = document.getElementById("display");
        const childrenNum = targetOfHeader.childElementCount; //クリックした時点で選ばれている要素数を数える
        const createSpan = document.createElement("span"); //ヘッダーに表示する文字ごとにspan要素を作る 
        createSpan.id = "Number" + childrenNum; //span要素ごとに0から番号をidに振る　id="Number0" id="Number1" ...
        targetOfHeader.appendChild(createSpan);
        if(childrenNum == 0){
            document.getElementById("Number" + childrenNum).innerHTML = props.children; //新しく作ったspanにテキストを代入
        }else{
            document.getElementById("Number" + childrenNum).innerHTML = "→" + props.children; //新しく作ったspanにテキストを代入
        }
        
    }

    useEffect( () => {
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
　