import HeadCard from "./headCard"
import Card from "./card"

export const Grid = () =>{
    const gridStyle={
        display: "grid",
        gridTemplateColumns: "25px 250px 30px 250px 30px 250px 30px 250px 30px 250px",
        gridTemplateRows: "180px 100px 100px 100px 100px 100px",
        gridAutoFlow: "column"
        
    }

    const column1 = { //カード1行目
        gridColumn: "2/3"
    }
    const column2 = { //カード2行目
        gridColumn: "4/5"
    }
    const column3 = { //カード3行目
        gridColumn: "6/7"
    }
    const column4 = { //カード4行目
        gridColumn: "8/9"
    }
    const column5 = { //カード5行目
        gridColumn: "10/11"
    }

    return(
        <div id="gridParent" style={gridStyle}> 
            <div style={column1}>
                <HeadCard>ヘッド１</HeadCard>
                <Card num={0}>C</Card>
                <Card num={1}>Db</Card>
                <Card num={2}>D</Card>
                <Card num={3}>Eb</Card>
                <Card num={4}>E</Card>
                <Card num={5}>F</Card>
                <Card num={6}>Gb</Card>
            </div>
            <div style={column2}>
                <HeadCard>ヘッド2</HeadCard>
                <Card num={7}>C</Card>
                <Card num={8}>C</Card>
                <Card num={9}>C</Card>
                <Card num={10}>C</Card>
                <Card num={11}>C</Card>
                <Card num={12}>C</Card>
                <Card num={13}>C</Card>
            </div>
            <div style={column3}>
                <HeadCard>ヘッド3</HeadCard>
                <Card num={14}>C</Card>
                <Card num={15}>C</Card>
                <Card num={16}>C</Card>
                <Card num={17}>C</Card>
                <Card num={18}>C</Card>
                <Card num={19}>C</Card>
                <Card num={20}>C</Card>
            </div>
            <div style={column4}>
                <HeadCard>ヘッド4</HeadCard>
                <Card num={21}>C</Card>
                <Card num={22}>C</Card>
                <Card num={23}>C</Card>
                <Card num={24}>C</Card>
                <Card num={25}>C</Card>
                <Card num={26}>C</Card>
                <Card num={27}>C</Card>
            </div>
            <div style={column5}>
                <HeadCard>ヘッド5</HeadCard>
                <Card num={28}>C</Card>
                <Card num={29}>C</Card>
                <Card num={30}>C</Card>
                <Card num={31}>C</Card>
                <Card num={32}>C</Card>
                <Card num={33}>C</Card>
                <Card num={34}>C</Card>
            </div>
                
                
            
        </div>
    )
}