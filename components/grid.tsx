import HeadCard from "./headCard"
import Card from "./card"
import { useGetSoundPlayer } from "../hooks/useGetSoundPlayer";
import { useGetNoteList, usePlay, useStop } from '../hooks/useChordPlayer';


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

    const Ccolor = { //0
        width: "210px",
        height: "951px",
        background: "#FFE0E0",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius:" 31px",
        paddingTop: "40px",
        backgroundColor: "#FFE0E0"
    }
    const Dbcolor = { //1
        width: "210px",
        height: "951px",
        background: "#FFF0E0",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius:" 31px",
        paddingTop: "40px",
        color: "#"
    }
    const Dcolor = { //2
        width: "210px",
        height: "951px",
        background: "#FFFFE0",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius:" 31px",
        paddingTop: "40px",
    }
    const Ebcolor = { //3
        width: "210px",
        height: "951px",
        background: "#EFFFE0",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius:" 31px",
        paddingTop: "40px",
        color: "#EFFFE0"
    }
    const Ecolor = { //4
        width: "210px",
        height: "951px",
        background: "#E0FFE0",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius:" 31px",
        paddingTop: "40px",
    }
    const Fcolor = { //5
        width: "210px",
        height: "951px",
        background: "#E0FFF0",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius:" 31px",
        paddingTop: "40px",
    }
    const Gbcolor = { //6
        width: "210px",
        height: "951px",
        background: "#E0FFFF",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius:" 31px",
        paddingTop: "40px",
    }
    const Gcolor = { //7
        width: "210px",
        height: "951px",
        background: "#E0F0FF",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius:" 31px",
        paddingTop: "40px",
    }
    const Abcolor = { //8
        width: "210px",
        height: "951px",
        background: "#E0E0FF",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius:" 31px",
        paddingTop: "40px",
    }
    const Acolor = { //9
        width: "210px",
        height: "951px",
        background: "#EFE0FF",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius:" 31px",
        paddingTop: "40px",
    }
    const Bbcolor = { //10
        width: "210px",
        height: "951px",
        background: "#FFE0FF",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius:" 31px",
        paddingTop: "40px",
    }
    const Bcolor = { //11
        width: "210px",
        height: "951px",
        background: "#FFE0F0",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius:" 31px",
        paddingTop: "40px",
    }

    

    //numはいじってないので注意
    return(
        <div id="gridParent" style={gridStyle}> 
            <div style={Ccolor}>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={0}>C</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={1}>C6</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={2}>CM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={3}>CM9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={4}>CM11</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={5}>CM7(#5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={6}>CM7(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={7}>CM9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={8}>C(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={9}>C5</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={10}>C69</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={11}>C69(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={12}>Cm</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={13}>Cm6</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={14}>Cm69</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={15}>CmM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={16}>CmM9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={17}>Cmadd9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={18}>C7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={19}>C9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={20}>C11</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={21}>C13</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={22}>C7(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={23}>C7(b5,b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={24}>C7(b5,#9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={25}>C7(b5,b9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={26}>C7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={27}>C7(b9,11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={28}>C7(b9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={29}>C7(b9,b13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={30}>C7(#9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={31}>C7(#9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={32}>C7(#9,b13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={33}>C7(13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={34}>C7(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={35}>C9(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={36}>C9(b5,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={37}>C9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={38}>C9(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={39}>C9(b5,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={40}>C9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={41}>Cadd9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={42}>Cadd2</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={43}>Cadd4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={44}>Cdim</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={45}>Cdim7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={46}>Csus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={47}>C7sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={48}>C9sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={49}>Caug</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={50}>Cmaug</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={51}>Caug7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={52}>Caug7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={53}>Caug9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={54}>Caug9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={55}>Cm7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={56}>Cm9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={57}>Cm7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={58}>Cm7(11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={59}>Cm9(11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={60}>Cm7(13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={61}>Cm7(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={62}>Cm7(b5,11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={63}>Cm7(b5,b13)</Card>
            </div>
            <div style={Dbcolor}>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={7}>D</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={8}>D7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={9}>D7sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={10}>Dm</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={11}>Dm7-5</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={12}>DmM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={13}>Dm6</Card>
            </div>
            <div style={Dcolor}>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={14}>E</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={15}>E7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={16}>E7sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={17}>Em</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={18}>Em7-5</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={19}>EmM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={20}>Em6</Card>
            </div>
            <div style={Ebcolor}>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={21}>F</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={22}>F7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={23}>F7sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={24}>Fm</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={25}>Fm7-5</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={26}>FmM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={27}>Fm6</Card>
            </div>
            <div style={Ecolor}>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={28}>G</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={29}>G7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={30}>G7sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={31}>Gm</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={32}>Gm7-5</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={33}>GmM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={34}>Gm6</Card>
            </div>
            <div style={Fcolor}>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={28}>G</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={29}>G7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={30}>G7sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={31}>Gm</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={32}>Gm7-5</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={33}>GmM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={34}>Gm6</Card>
            </div>
            <div style={Gbcolor}>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={28}>G</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={29}>G7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={30}>G7sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={31}>Gm</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={32}>Gm7-5</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={33}>GmM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={34}>Gm6</Card>
            </div>
            <div style={Gcolor}>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={28}>G</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={29}>G7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={30}>G7sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={31}>Gm</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={32}>Gm7-5</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={33}>GmM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={34}>Gm6</Card>
            </div>
            <div style={Abcolor}>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={28}>G</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={29}>G7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={30}>G7sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={31}>Gm</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={32}>Gm7-5</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={33}>GmM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={34}>Gm6</Card>
            </div>
            <div style={Acolor}>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={28}>G</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={29}>G7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={30}>G7sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={31}>Gm</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={32}>Gm7-5</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={33}>GmM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={34}>Gm6</Card>
            </div>
            <div style={Bbcolor}>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={28}>G</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={29}>G7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={30}>G7sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={31}>Gm</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={32}>Gm7-5</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={33}>GmM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={34}>Gm6</Card>
            </div>
            <div style={Bcolor}>
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