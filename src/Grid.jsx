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
                <HeadCard>C系</HeadCard>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={0}>C</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={1}>C7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={2}>C7sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={3}>Cm</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={4}>Cm7-5</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={5}>CmM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={6}>Cm6</Card>
            </div>
            <div style={column2}>
                <HeadCard>D系</HeadCard>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={7}>D</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={8}>D7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={9}>D7sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={10}>Dm</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={11}>Dm7-5</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={12}>DmM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={13}>Dm6</Card>
            </div>
            <div style={column3}>
                <HeadCard>E系</HeadCard>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={14}>E</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={15}>E7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={16}>E7sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={17}>Em</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={18}>Em7-5</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={19}>EmM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={20}>Em6</Card>
            </div>
            <div style={column4}>
                <HeadCard>F系</HeadCard>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={21}>F</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={22}>F7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={23}>F7sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={24}>Fm</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={25}>Fm7-5</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={26}>FmM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={27}>Fm6</Card>
            </div>
            <div style={column5}>
                <HeadCard>G系</HeadCard>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={28}>G</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={29}>G7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={30}>G7sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={31}>Gm</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={32}>Gm7-5</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={33}>GmM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={34}>Gm6</Card>
            </div>
                
                
            
        </div>
    )
}