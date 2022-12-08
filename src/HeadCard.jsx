export const HeadCard = (props) => {
    const HeadCardStyle = {
        textAlign: "center",
        border: "solid 1px #0F4C75",
        width: "250px",
        height: "130px",
        backgroundColor: "#3282B8",
        padding: "1px"
    }
    return(
        <>
            <div style={HeadCardStyle}>{props.children}</div>
        </>
    )
};

export default HeadCard;
