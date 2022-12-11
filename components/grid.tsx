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
        height: "5000px",
        background: "#FFE0E0",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius:" 31px",
        paddingTop: "40px",
        backgroundColor: "#FFE0E0"
    }
    const Dbcolor = { //1
        width: "210px",
        height: "5000px",
        background: "#FFF0E0",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius:" 31px",
        paddingTop: "40px",
        color: "#"
    }
    const Dcolor = { //2
        width: "210px",
        height: "5000px",
        background: "#FFFFE0",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius:" 31px",
        paddingTop: "40px",
    }
    const Ebcolor = { //3
        width: "210px",
        height: "5000px",
        background: "#EFFFE0",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius:" 31px",
        paddingTop: "40px",
        color: "#EFFFE0"
    }
    const Ecolor = { //4
        width: "210px",
        height: "5000px",
        background: "#E0FFE0",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius:" 31px",
        paddingTop: "40px",
    }
    const Fcolor = { //5
        width: "210px",
        height: "5000px",
        background: "#E0FFF0",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius:" 31px",
        paddingTop: "40px",
    }
    const Gbcolor = { //6
        width: "210px",
        height: "5000px",
        background: "#E0FFFF",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius:" 31px",
        paddingTop: "40px",
    }
    const Gcolor = { //7
        width: "210px",
        height: "5000px",
        background: "#E0F0FF",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius:" 31px",
        paddingTop: "40px",
    }
    const Abcolor = { //8
        width: "210px",
        height: "5000px",
        background: "#E0E0FF",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius:" 31px",
        paddingTop: "40px",
    }
    const Acolor = { //9
        width: "210px",
        height: "5000px",
        background: "#EFE0FF",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius:" 31px",
        paddingTop: "40px",
    }
    const Bbcolor = { //10
        width: "210px",
        height: "5000px",
        background: "#FFE0FF",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius:" 31px",
        paddingTop: "40px",
    }
    const Bcolor = { //11
        width: "210px",
        height: "5000px",
        background: "#FFE0F0",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius:" 31px",
        paddingTop: "40px",
    }

    

    //numはいじってないので注意
    return(
        <div id="gridParent" style={gridStyle}> 
            <div style={Ccolor}>
                {/* C */}
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
                 {/* C# */}
                 <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={64}>C#</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={65}>C#6</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={66}>C#M7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={67}>C#M9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={68}>C#M11</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={69}>C#M7(#5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={70}>C#M7(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={71}>C#M9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={72}>C#(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={73}>C#5</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={74}>C#69</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={75}>C#69(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={76}>C#m</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={77}>C#m6</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={78}>C#m69</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={79}>C#mM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={80}>C#mM9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={81}>C#madd9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={82}>C#7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={83}>C#9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={84}>C#11</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={85}>C#13</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={86}>C#7(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={87}>C#7(b5,b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={88}>C#7(b5,#9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={89}>C#7(b5,b9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={90}>C#7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={91}>C#7(b9,11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={92}>C#7(b9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={93}>C#7(b9,b13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={94}>C#7(#9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={95}>C#7(#9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={96}>C#7(#9,b13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={97}>C#7(13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={98}>C#7(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={99}>C#9(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={100}>C#9(b5,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={101}>C#9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={102}>C#9(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={103}>C#9(b5,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={104}>C#9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={105}>C#add9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={106}>C#add2</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={107}>C#add4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={108}>C#dim</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={109}>C#dim7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={110}>C#sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={111}>C#7sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={112}>C#9sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={113}>C#aug</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={114}>C#maug</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={115}>C#aug7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={116}>C#aug7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={117}>C#aug9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={118}>C#aug9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={119}>C#m7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={120}>C#m9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={121}>C#m7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={122}>C#m7(11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={123}>C#m9(11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={124}>C#m7(13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={125}>C#m7(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={126}>C#m7(b5,11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={127}>C#m7(b5,b13)</Card>
            </div>
            <div style={Dcolor}>
                {/* D */}
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={128}>D</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={129}>D6</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={130}>DM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={131}>DM9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={132}>DM11</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={133}>DM7(#5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={134}>DM7(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={135}>DM9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={136}>D(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={137}>D5</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={138}>D69</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={139}>D69(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={140}>Dm</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={141}>Dm6</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={142}>Dm69</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={143}>DmM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={144}>DmM9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={145}>Dmadd9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={146}>D7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={147}>D9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={148}>D11</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={149}>D13</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={150}>D7(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={151}>D7(b5,b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={152}>D7(b5,#9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={153}>D7(b5,b9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={154}>D7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={155}>D7(b9,11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={156}>D7(b9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={157}>D7(b9,b13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={158}>D7(#9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={159}>D7(#9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={160}>D7(#9,b13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={161}>D7(13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={162}>D7(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={163}>D9(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={164}>D9(b5,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={165}>D9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={166}>D9(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={167}>D9(b5,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={168}>D9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={169}>Dadd9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={170}>Dadd2</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={171}>Dadd4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={172}>Ddim</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={173}>Ddim7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={174}>Dsus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={175}>D7sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={176}>D9sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={177}>Daug</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={178}>Dmaug</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={179}>Daug7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={180}>Daug7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={181}>Daug9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={182}>Daug9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={183}>Dm7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={184}>Dm9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={185}>Dm7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={186}>Dm7(11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={187}>Dm9(11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={188}>Dm7(13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={189}>Dm7(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={190}>Dm7(b5,11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={191}>Dm7(b5,b13)</Card>
            </div>
            <div style={Ebcolor}>
                 {/* D# */}
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={192}>D#</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={193}>D#6</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={194}>D#M7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={195}>D#M9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={196}>D#M11</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={197}>D#M7(#5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={198}>D#M7(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={199}>D#M9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={200}>D#(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={201}>D#5</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={202}>D#69</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={203}>D#69(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={204}>D#m</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={205}>D#m6</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={206}>D#m69</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={207}>D#mM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={208}>D#mM9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={209}>D#madd9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={210}>D#7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={211}>D#9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={212}>D#11</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={213}>D#13</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={214}>D#7(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={215}>D#7(b5,b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={216}>D#7(b5,#9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={217}>D#7(b5,b9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={218}>D#7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={219}>D#7(b9,11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={220}>D#7(b9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={221}>D#7(b9,b13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={222}>D#7(#9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={223}>D#7(#9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={224}>D#7(#9,b13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={225}>D#7(13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={226}>D#7(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={227}>D#9(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={228}>D#9(b5,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={229}>D#9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={230}>D#9(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={231}>D#9(b5,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={232}>D#9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={233}>D#add9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={234}>D#add2</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={235}>D#add4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={236}>D#dim</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={237}>D#dim7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={238}>D#sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={239}>D#7sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={240}>D#9sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={241}>D#aug</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={242}>D#maug</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={243}>D#aug7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={244}>D#aug7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={245}>D#aug9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={246}>D#aug9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={247}>D#m7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={248}>D#m9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={249}>D#m7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={250}>D#m7(11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={251}>D#m9(11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={252}>D#m7(13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={253}>D#m7(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={254}>D#m7(b5,11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={255}>D#m7(b5,b13)</Card>
            </div>
            <div style={Ecolor}>
                {/* E */}
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={256}>E</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={257}>E6</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={258}>EM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={259}>EM9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={260}>EM11</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={261}>EM7(#5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={262}>EM7(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={263}>EM9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={264}>E(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={265}>E5</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={266}>E69</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={267}>E69(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={268}>Em</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={269}>Em6</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={270}>Em69</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={271}>EmM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={272}>EmM9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={273}>Emadd9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={274}>E7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={275}>E9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={276}>E11</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={277}>E13</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={278}>E7(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={279}>E7(b5,b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={280}>E7(b5,#9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={281}>E7(b5,b9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={282}>E7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={283}>E7(b9,11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={284}>E7(b9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={285}>E7(b9,b13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={286}>E7(#9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={287}>E7(#9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={288}>E7(#9,b13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={289}>E7(13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={290}>E7(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={291}>E9(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={292}>E9(b5,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={293}>E9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={294}>E9(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={295}>E9(b5,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={296}>E9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={297}>Eadd9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={298}>Eadd2</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={299}>Eadd4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={300}>Edim</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={301}>Edim7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={302}>Esus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={303}>E7sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={304}>E9sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={305}>Eaug</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={306}>Emaug</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={307}>Eaug7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={308}>Eaug7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={309}>Eaug9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={310}>Eaug9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={311}>Em7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={312}>Em9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={313}>Em7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={314}>Em7(11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={315}>Em9(11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={316}>Em7(13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={317}>Em7(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={318}>Em7(b5,11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={319}>Em7(b5,b13)</Card>
            </div>
            <div style={Fcolor}>
                {/* F */}
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={320}>F</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={321}>F6</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={322}>FM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={323}>FM9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={324}>FM11</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={325}>FM7(#5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={326}>FM7(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={327}>FM9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={328}>F(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={329}>F5</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={330}>F69</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={331}>F69(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={332}>Fm</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={333}>Fm6</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={334}>Fm69</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={335}>FmM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={336}>FmM9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={337}>Fmadd9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={338}>F7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={339}>F9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={340}>F11</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={341}>F13</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={342}>F7(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={343}>F7(b5,b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={344}>F7(b5,#9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={345}>F7(b5,b9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={346}>F7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={347}>F7(b9,11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={348}>F7(b9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={349}>F7(b9,b13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={350}>F7(#9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={351}>F7(#9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={352}>F7(#9,b13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={353}>F7(13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={354}>F7(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={355}>F9(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={356}>F9(b5,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={357}>F9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={358}>F9(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={359}>F9(b5,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={360}>F9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={361}>Fadd9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={362}>Fadd2</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={363}>Fadd4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={364}>Fdim</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={365}>Fdim7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={366}>Fsus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={367}>F7sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={368}>F9sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={369}>Faug</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={370}>Fmaug</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={371}>Faug7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={372}>Faug7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={373}>Faug9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={374}>Faug9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={375}>Fm7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={376}>Fm9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={377}>Fm7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={378}>Fm7(11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={379}>Fm9(11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={380}>Fm7(13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={381}>Fm7(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={382}>Fm7(b5,11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={383}>Fm7(b5,b13)</Card>
            </div>
            <div style={Gbcolor}>
                {/* F# */}
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={384}>F#</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={385}>F#6</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={386}>F#M7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={387}>F#M9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={388}>F#M11</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={389}>F#M7(#5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={390}>F#M7(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={391}>F#M9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={392}>F#(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={393}>F#5</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={394}>F#69</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={395}>F#69(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={396}>F#m</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={397}>F#m6</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={398}>F#m69</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={399}>F#mM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={400}>F#mM9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={401}>F#madd9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={402}>F#7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={403}>F#9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={404}>F#11</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={405}>F#13</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={406}>F#7(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={407}>F#7(b5,b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={408}>F#7(b5,#9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={409}>F#7(b5,b9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={410}>F#7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={411}>F#7(b9,11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={412}>F#7(b9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={413}>F#7(b9,b13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={414}>F#7(#9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={415}>F#7(#9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={416}>F#7(#9,b13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={417}>F#7(13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={418}>F#7(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={419}>F#9(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={420}>F#9(b5,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={421}>F#9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={422}>F#9(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={423}>F#9(b5,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={424}>F#9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={425}>F#add9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={426}>F#add2</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={427}>F#add4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={428}>F#dim</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={429}>F#dim7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={430}>F#sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={431}>F#7sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={432}>F#9sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={433}>F#aug</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={434}>F#maug</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={435}>F#aug7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={436}>F#aug7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={437}>F#aug9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={438}>F#aug9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={439}>F#m7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={440}>F#m9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={441}>F#m7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={442}>F#m7(11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={443}>F#m9(11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={444}>F#m7(13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={445}>F#m7(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={446}>F#m7(b5,11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={447}>F#m7(b5,b13)</Card>
            </div>
            <div style={Gcolor}>
                {/* G */}
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={448}>G</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={449}>G6</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={450}>GM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={451}>GM9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={452}>GM11</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={453}>GM7(#5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={454}>GM7(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={455}>GM9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={456}>G(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={457}>G5</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={458}>G69</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={459}>G69(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={460}>Gm</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={461}>Gm6</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={462}>Gm69</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={463}>GmM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={464}>GmM9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={465}>Gmadd9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={466}>G7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={467}>G9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={468}>G11</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={469}>G13</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={470}>G7(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={471}>G7(b5,b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={472}>G7(b5,#9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={473}>G7(b5,b9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={474}>G7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={475}>G7(b9,11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={476}>G7(b9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={477}>G7(b9,b13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={478}>G7(#9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={479}>G7(#9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={480}>G7(#9,b13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={481}>G7(13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={482}>G7(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={483}>G9(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={484}>G9(b5,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={485}>G9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={486}>G9(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={487}>G9(b5,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={488}>G9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={489}>Gadd9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={490}>Gadd2</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={491}>Gadd4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={492}>Gdim</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={493}>Gdim7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={494}>Gsus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={495}>G7sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={496}>G9sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={497}>Gaug</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={498}>Gmaug</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={499}>Gaug7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={500}>Gaug7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={501}>Gaug9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={502}>Gaug9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={503}>Gm7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={504}>Gm9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={505}>Gm7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={506}>Gm7(11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={507}>Gm9(11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={508}>Gm7(13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={509}>Gm7(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={510}>Gm7(b5,11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={511}>Gm7(b5,b13)</Card>
            </div>
            <div style={Abcolor}>
                {/* G# */}
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={512}>G#</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={513}>G#6</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={514}>G#M7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={515}>G#M9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={516}>G#M11</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={517}>G#M7(#5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={518}>G#M7(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={519}>G#M9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={520}>G#(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={521}>G#5</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={522}>G#69</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={523}>G#69(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={524}>G#m</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={525}>G#m6</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={526}>G#m69</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={527}>G#mM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={528}>G#mM9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={529}>G#madd9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={530}>G#7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={531}>G#9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={532}>G#11</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={533}>G#13</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={534}>G#7(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={535}>G#7(b5,b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={536}>G#7(b5,#9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={537}>G#7(b5,b9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={538}>G#7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={539}>G#7(b9,11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={540}>G#7(b9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={541}>G#7(b9,b13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={542}>G#7(#9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={543}>G#7(#9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={544}>G#7(#9,b13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={545}>G#7(13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={546}>G#7(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={547}>G#9(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={548}>G#9(b5,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={549}>G#9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={550}>G#9(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={551}>G#9(b5,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={552}>G#9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={553}>G#add9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={554}>G#add2</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={555}>G#add4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={556}>G#dim</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={557}>G#dim7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={558}>G#sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={559}>G#7sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={560}>G#9sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={561}>G#aug</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={562}>G#maug</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={563}>G#aug7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={564}>G#aug7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={565}>G#aug9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={566}>G#aug9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={567}>G#m7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={568}>G#m9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={569}>G#m7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={570}>G#m7(11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={571}>G#m9(11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={572}>G#m7(13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={573}>G#m7(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={574}>G#m7(b5,11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={575}>G#m7(b5,b13)</Card>
            </div>
            <div style={Acolor}>
                {/* A */}
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={576}>A</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={577}>A6</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={578}>AM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={579}>AM9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={580}>AM11</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={581}>AM7(#5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={582}>AM7(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={583}>AM9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={584}>A(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={585}>A5</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={586}>A69</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={587}>A69(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={588}>Am</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={589}>Am6</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={590}>Am69</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={591}>AmM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={592}>AmM9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={593}>Amadd9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={594}>A7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={595}>A9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={596}>A11</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={597}>A13</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={598}>A7(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={599}>A7(b5,b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={600}>A7(b5,#9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={601}>A7(b5,b9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={602}>A7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={603}>A7(b9,11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={604}>A7(b9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={605}>A7(b9,b13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={606}>A7(#9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={607}>A7(#9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={608}>A7(#9,b13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={609}>A7(13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={610}>A7(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={611}>A9(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={612}>A9(b5,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={613}>A9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={614}>A9(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={615}>A9(b5,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={616}>A9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={617}>Aadd9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={618}>Aadd2</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={619}>Aadd4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={620}>Adim</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={621}>Adim7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={622}>Asus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={623}>A7sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={624}>A9sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={625}>Aaug</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={626}>Amaug</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={627}>Aaug7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={628}>Aaug7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={629}>Aaug9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={630}>Aaug9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={631}>Am7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={632}>Am9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={633}>Am7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={634}>Am7(11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={635}>Am9(11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={636}>Am7(13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={637}>Am7(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={638}>Am7(b5,11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={639}>Am7(b5,b13)</Card>
            </div>
            <div style={Bbcolor}>
                {/* A# */}
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={640}>A#</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={641}>A#6</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={642}>A#M7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={643}>A#M9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={644}>A#M11</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={645}>A#M7(#5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={646}>A#M7(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={647}>A#M9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={648}>A#(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={649}>A#5</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={650}>A#69</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={651}>A#69(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={652}>A#m</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={653}>A#m6</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={654}>A#m69</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={655}>A#mM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={656}>A#mM9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={657}>A#madd9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={658}>A#7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={659}>A#9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={660}>A#11</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={661}>A#13</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={662}>A#7(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={663}>A#7(b5,b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={664}>A#7(b5,#9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={665}>A#7(b5,b9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={666}>A#7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={667}>A#7(b9,11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={668}>A#7(b9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={669}>A#7(b9,b13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={670}>A#7(#9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={671}>A#7(#9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={672}>A#7(#9,b13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={673}>A#7(13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={674}>A#7(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={675}>A#9(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={676}>A#9(b5,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={677}>A#9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={678}>A#9(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={679}>A#9(b5,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={680}>A#9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={681}>A#add9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={682}>A#add2</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={683}>A#add4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={684}>A#dim</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={685}>A#dim7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={686}>A#sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={687}>A#7sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={688}>A#9sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={689}>A#aug</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={690}>A#maug</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={691}>A#aug7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={692}>A#aug7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={693}>A#aug9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={694}>A#aug9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={695}>A#m7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={696}>A#m9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={697}>A#m7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={698}>A#m7(11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={699}>A#m9(11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={700}>A#m7(13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={701}>A#m7(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={702}>A#m7(b5,11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={703}>A#m7(b5,b13)</Card>
            </div>
            <div style={Bcolor}>
                {/* B */}
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={704}>B</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={705}>B6</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={706}>BM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={707}>BM9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={708}>BM11</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={709}>BM7(#5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={710}>BM7(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={711}>BM9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={712}>B(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={713}>B5</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={714}>B69</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={715}>B69(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={716}>Bm</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={717}>Bm6</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={718}>Bm69</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={719}>BmM7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={720}>BmM9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={721}>Bmadd9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={722}>B7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={723}>B9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={724}>B11</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={725}>B13</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={726}>B7(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={727}>B7(b5,b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={728}>B7(b5,#9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={729}>B7(b5,b9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={730}>B7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={731}>B7(b9,11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={732}>B7(b9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={733}>B7(b9,b13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={734}>B7(#9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={735}>B7(#9,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={736}>B7(#9,b13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={737}>B7(13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={738}>B7(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={739}>B9(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={740}>B9(b5,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={741}>B9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={742}>B9(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={743}>B9(b5,13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={744}>B9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={745}>Badd9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={746}>Badd2</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={747}>Badd4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={748}>Bdim</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={749}>Bdim7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={750}>Bsus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={751}>B7sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={752}>B9sus4</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={753}>Baug</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={754}>Bmaug</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={755}>Baug7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={756}>Baug7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={757}>Baug9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={758}>Baug9(#11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={759}>Bm7</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={760}>Bm9</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={761}>Bm7(b9)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={762}>Bm7(11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={763}>Bm9(11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={764}>Bm7(13)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={765}>Bm7(b5)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={766}>Bm7(b5,11)</Card>
                <Card useGetNoteList={getNoteList} usePlayChord={playChord} useStopChord={stopChord} num={767}>Bm7(b5,b13)</Card>
            </div>
        </div>
    )
}