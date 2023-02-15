export default function UpperHeader(props:any){
    const upperHeaderStyle:{[key:string]:string} = {
        position: "fixed",
        backgroundColor: "#5D99C6",
        width: "100%",
        height: "60px",
        left: "150px",
        zIndex: "1"
    }
    const dictButtonStyle:{[key:string]:string} = {
        width: "100px",
        height: "60px",
        borderWidth: "0px",
        backgroundColor: "#D6E1FF"
    }
    const coordButtonStyle:{[key:string]:string} = {
        width: "100px",
        height: "60px",
        borderWidth: "0px",
        backgroundColor: "#A6E1FF"
    }

    function clickedDictMode(){
        props.setMode(0);
        console.log("modeを0にセット");
    }

    function clickedCoordMode(){
        props.setMode(1);
        console.log("modeを1にセット");
    }

    return(
        <div style={upperHeaderStyle}>
            <button onClick={clickedDictMode} style={dictButtonStyle}>コード辞書</button>
            <button onClick={clickedCoordMode} style={coordButtonStyle}>ピアノ(仮)</button>
        </div>
    )
}