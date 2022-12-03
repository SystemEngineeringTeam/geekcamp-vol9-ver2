import {HeadCard} from "./HeadCard.js"
import {Card} from "./Card.js"

export const Grid = () =>{
    const gridStyle={
        display: "grid",
        gridTemplateColumns: "25px 250px 30px 250px 30px 250px 30px 250px 30px 250px",
        gridTemplateRows: "180px 100px 100px 100px 100px 100px",
        gridAutoFlow: "column"
        
    }

    const column1 = {
        gridColumn: "2/3"
    }
    const column2 = {
        gridColumn: "4/5"
    }
    const column3 = {
        gridColumn: "6/7"
    }
    const column4 = {
        gridColumn: "8/9"
    }
    const column5 = {
        gridColumn: "10/11"
    }

    return(
        <div style={gridStyle}>
            <div style={column1}>
                <HeadCard>ヘッド１</HeadCard>
                <Card num="0">カード0</Card>
                <Card num="1">カード1</Card>
                <Card num="2">カード2</Card>
                <Card num="3">カード3</Card>
                <Card num="4">カード4</Card>
            </div>
            <div style={column2}>
                <HeadCard>ヘッド2</HeadCard>
                <Card num="5">カード5</Card>
                <Card num="6">カード6</Card>
                <Card num="7">カード7</Card>
                <Card num="8">カード8</Card>
                <Card num="9">カード9</Card>
            </div>
            <div style={column3}>
                <HeadCard>ヘッド3</HeadCard>
                <Card num="10">カード10</Card>
                <Card num="11">カード11</Card>
                <Card num="12">カード12</Card>
                <Card num="13">カード13</Card>
                <Card num="14">カード14</Card>
            </div>
            <div style={column4}>
                <HeadCard>ヘッド4</HeadCard>
                <Card num="15">カード15</Card>
                <Card num="16">カード16</Card>
                <Card num="17">カード17</Card>
                <Card num="18">カード18</Card>
                <Card num="19">カード19</Card>
            </div>
            <div style={column5}>
                <HeadCard>ヘッド5</HeadCard>
                <Card num="20">カード20</Card>
                <Card num="21">カード21</Card>
                <Card num="22">カード22</Card>
                <Card num="23">カード23</Card>
                <Card num="24">カード24</Card>
            </div>
                
                
            
        </div>
    )
}