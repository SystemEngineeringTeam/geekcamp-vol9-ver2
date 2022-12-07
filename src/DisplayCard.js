export const DisplayCard = () =>{
    const styleDisplayCard = {
        height: "140px",
        backgroundColor: "#3282B8",
        margin: "10px",
        fontSize: "25px",
        textAlign: "center",
    }

    return (
        <div className="DisplayCard" style={styleDisplayCard} data-occupied="false">
            カードをここにドラッグしてドロップ
        </div>
    )
}