import HeadCard from "./headCard"
import Card from "./card"
import { useGetSoundPlayer } from "./hooks/useGetSoundPlayer";
import { useGetNoteList, usePlay, useStop } from './hooks/useChordPlayer';


export const Grid = () =>{
    console.log("Gridレンダリング");
    const {PlayFuncs, StopFuncs} = useGetSoundPlayer();
    const getNoteList = useGetNoteList();
    const playChord = usePlay(PlayFuncs);
    const stopChord = useStop(StopFuncs);

    const gridStyle:{ [key: string]: string } ={
        display: "flex",
        flexFlow: "row",
        gap: "calc(10 / 430 * 100%)",

        alignItems: "center",

        width: "100%",

        padding: "32px",
    }

    const column = { //カード1行目
        width: "210px",
        height: "951px",


        background: "#FFFFFF",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius:" 31px",
        paddingTop: "40px",
    }

    return(
        <div id="gridParent" style={gridStyle}> 
            <div style={column}>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={0}>C</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={1}>C7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={2}>C7sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={3}>Cm</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={4}>Cm7-5</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={5}>CmM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={6}>Cm6</Card>
            </div>
            <div style={column}>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={7}>D</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={8}>D7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={9}>D7sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={10}>Dm</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={11}>Dm7-5</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={12}>DmM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={13}>Dm6</Card>
            </div>
            <div style={column}>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={14}>E</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={15}>E7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={16}>E7sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={17}>Em</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={18}>Em7-5</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={19}>EmM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={20}>Em6</Card>
            </div>
            <div style={column}>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={21}>F</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={22}>F7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={23}>F7sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={24}>Fm</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={25}>Fm7-5</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={26}>FmM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={27}>Fm6</Card>
            </div>
            <div style={column}>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={28}>G</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={29}>G7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={30}>G7sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={31}>Gm</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={32}>Gm7-5</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={33}>GmM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={34}>Gm6</Card>
            </div>
            <div style={column}>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={28}>G</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={29}>G7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={30}>G7sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={31}>Gm</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={32}>Gm7-5</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={33}>GmM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={34}>Gm6</Card>
            </div>
            <div style={column}>
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