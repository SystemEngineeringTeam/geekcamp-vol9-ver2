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

    useEffect( () => {
        console.log("a");
        const target = document.getElementsByClassName("card");
        target[props.num].addEventListener("mouseenter", EnterChangeColor);
        target[props.num].addEventListener("mouseleave", LeaveChangeColor);
    }, []);

    return(
        <>
            <div className="card" style={CardStyle}>{props.children}</div>
        </>
    )
};

export default Card;
