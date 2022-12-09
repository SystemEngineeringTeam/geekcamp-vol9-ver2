import { useGetSoundPlayer } from "./hooks/useGetSoundPlayer";
import { useGetNoteList, usePlay, useStop } from "./hooks/useChordPlayer";
import {HeadCard} from "./HeadCard.jsx"
import {Card} from "./Card.jsx"


export const Grid = () =>{
    const {PlayFuncs, StopFuncs} = useGetSoundPlayer();
    const getNoteList = useGetNoteList();
    const playChord = usePlay(PlayFuncs);
    const stopChord = useStop(StopFuncs);

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
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={0}>C</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={1}>Db</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={2}>D</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={3}>Eb</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={4}>E</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={5}>F</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={6}>Gb</Card>
            </div>
            <div style={column2}>
                <HeadCard>ヘッド2</HeadCard>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={7}>C</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={8}>C</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={9}>C</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={10}>C</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={11}>C</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={12}>C</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={13}>C</Card>
            </div>
            <div style={column3}>
                <HeadCard>ヘッド3</HeadCard>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={14}>C</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={15}>C</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={16}>C</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={17}>C</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={18}>C</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={19}>C</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={20}>C</Card>
            </div>
            <div style={column4}>
                <HeadCard>ヘッド4</HeadCard>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={21}>C</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={22}>C</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={23}>C</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={24}>C</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={25}>C</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={26}>C</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={27}>C</Card>
            </div>
            <div style={column5}>
                <HeadCard>ヘッド5</HeadCard>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={28}>C</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={29}>C</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={30}>C</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={31}>C</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={32}>C</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={33}>C</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={34}>C</Card>
            </div>
                
                
            
        </div>
    )
}