export default function headCard(props: {children: string}){
    console.log("headCardレンダリング");
    const HeadCardStyle:{[key: string]: string} = {
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