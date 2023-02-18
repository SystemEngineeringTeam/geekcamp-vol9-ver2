// https://www.npmjs.com/package/use-sound
import useSound from "use-sound";

//PlayFuncs配列とStopFuncs配列を渡す
const interruptObj = { interrupt: true };
export const useGetSoundPlayer = () => {
    console.log("関数useGetSoundPlayer実行");
    const [playC0, { stop: stopC0 }] = useSound("./sounds/C0.mp3", interruptObj);
    const [playDb0, { stop: stopDb0 }] = useSound("./sounds/Db0.mp3", interruptObj);
    const [playD0, { stop: stopD0 }] = useSound("./sounds/D0.mp3", interruptObj);
    const [playEb0, { stop: stopEb0 }] = useSound("./sounds/Eb0.mp3", interruptObj);
    const [playE0, { stop: stopE0 }] = useSound("./sounds/E0.mp3", interruptObj);
    const [playF0, { stop: stopF0 }] = useSound("./sounds/F0.mp3", interruptObj);
    const [playGb0, { stop: stopGb0 }] = useSound("./sounds/Gb0.mp3", interruptObj);
    const [playG0, { stop: stopG0 }] = useSound("./sounds/G0.mp3", interruptObj);
    const [playAb0, { stop: stopAb0 }] = useSound("./sounds/Ab0.mp3", interruptObj);
    const [playA0, { stop: stopA0 }] = useSound("./sounds/A0.mp3", interruptObj);
    const [playBb0, { stop: stopBb0 }] = useSound("./sounds/Bb0.mp3", interruptObj);
    const [playB0, { stop: stopB0 }] = useSound("./sounds/B0.mp3", interruptObj);

    const [playC1, { stop: stopC1 }] = useSound("./sounds/C1.mp3", interruptObj);
    const [playDb1, { stop: stopDb1 }] = useSound("./sounds/Db1.mp3", interruptObj);
    const [playD1, { stop: stopD1 }] = useSound("./sounds/D1.mp3", interruptObj);
    const [playEb1, { stop: stopEb1 }] = useSound("./sounds/Eb1.mp3", interruptObj);
    const [playE1, { stop: stopE1 }] = useSound("./sounds/E1.mp3", interruptObj);
    const [playF1, { stop: stopF1 }] = useSound("./sounds/F1.mp3", interruptObj);
    const [playGb1, { stop: stopGb1 }] = useSound("./sounds/Gb1.mp3", interruptObj);
    const [playG1, { stop: stopG1 }] = useSound("./sounds/G1.mp3", interruptObj);
    const [playAb1, { stop: stopAb1 }] = useSound("./sounds/Ab1.mp3", interruptObj);
    const [playA1, { stop: stopA1 }] = useSound("./sounds/A1.mp3", interruptObj);
    const [playBb1, { stop: stopBb1 }] = useSound("./sounds/Bb1.mp3", interruptObj);
    const [playB1, { stop: stopB1 }] = useSound("./sounds/B1.mp3", interruptObj);

    const [playC2, { stop: stopC2 }] = useSound("./sounds/C2.mp3", interruptObj);
    const [playDb2, { stop: stopDb2 }] = useSound("./sounds/Db2.mp3", interruptObj);
    const [playD2, { stop: stopD2 }] = useSound("./sounds/D2.mp3", interruptObj);
    const [playEb2, { stop: stopEb2 }] = useSound("./sounds/Eb2.mp3", interruptObj);
    const [playE2, { stop: stopE2 }] = useSound("./sounds/E2.mp3", interruptObj);
    const [playF2, { stop: stopF2 }] = useSound("./sounds/F2.mp3", interruptObj);
    const [playGb2, { stop: stopGb2 }] = useSound("./sounds/Gb2.mp3", interruptObj);
    const [playG2, { stop: stopG2 }] = useSound("./sounds/G2.mp3", interruptObj);
    const [playAb2, { stop: stopAb2 }] = useSound("./sounds/Ab2.mp3", interruptObj);
    const [playA2, { stop: stopA2 }] = useSound("./sounds/A2.mp3", interruptObj);
    const [playBb2, { stop: stopBb2 }] = useSound("./sounds/Bb2.mp3", interruptObj);
    const [playB2, { stop: stopB2 }] = useSound("./sounds/B2.mp3", interruptObj);

    const [playC3, { stop: stopC3 }] = useSound("./sounds/C3.mp3", interruptObj);
    const [playDb3, { stop: stopDb3 }] = useSound("./sounds/Db3.mp3", interruptObj);
    const [playD3, { stop: stopD3 }] = useSound("./sounds/D3.mp3", interruptObj);
    const [playEb3, { stop: stopEb3 }] = useSound("./sounds/Eb3.mp3", interruptObj);
    const [playE3, { stop: stopE3 }] = useSound("./sounds/E3.mp3", interruptObj);
    const [playF3, { stop: stopF3 }] = useSound("./sounds/F3.mp3", interruptObj);
    const [playGb3, { stop: stopGb3 }] = useSound("./sounds/Gb3.mp3", interruptObj);
    const [playG3, { stop: stopG3 }] = useSound("./sounds/G3.mp3", interruptObj);
    const [playAb3, { stop: stopAb3 }] = useSound("./sounds/Ab3.mp3", interruptObj);
    const [playA3, { stop: stopA3 }] = useSound("./sounds/A3.mp3", interruptObj);
    const [playBb3, { stop: stopBb3 }] = useSound("./sounds/Bb3.mp3", interruptObj);
    const [playB3, { stop: stopB3 }] = useSound("./sounds/B3.mp3", interruptObj);
    const [playC4, { stop: stopC4 }] = useSound("./sounds/C4.mp3", interruptObj);
    const [playDb4, { stop: stopDb4 }] = useSound("./sounds/Db4.mp3", interruptObj);
    const [playD4, { stop: stopD4 }] = useSound("./sounds/D4.mp3", interruptObj);
    const [playEb4, { stop: stopEb4 }] = useSound("./sounds/Eb4.mp3", interruptObj);
    const [playE4, { stop: stopE4 }] = useSound("./sounds/E4.mp3", interruptObj);
    const [playF4, { stop: stopF4 }] = useSound("./sounds/F4.mp3", interruptObj);
    const [playGb4, { stop: stopGb4 }] = useSound("./sounds/Gb4.mp3", interruptObj);
    const [playG4, { stop: stopG4 }] = useSound("./sounds/G4.mp3", interruptObj);
    const [playAb4, { stop: stopAb4 }] = useSound("./sounds/Ab4.mp3", interruptObj);
    const [playA4, { stop: stopA4 }] = useSound("./sounds/A4.mp3", interruptObj);
    const [playBb4, { stop: stopBb4 }] = useSound("./sounds/Bb4.mp3", interruptObj);
    const [playB4, { stop: stopB4 }] = useSound("./sounds/B4.mp3", interruptObj);

    const [playC5, { stop: stopC5 }] = useSound("./sounds/C5.mp3", interruptObj);
    const [playDb5, { stop: stopDb5 }] = useSound("./sounds/Db5.mp3", interruptObj);
    const [playD5, { stop: stopD5 }] = useSound("./sounds/D5.mp3", interruptObj);
    const [playEb5, { stop: stopEb5 }] = useSound("./sounds/Eb5.mp3", interruptObj);
    const [playE5, { stop: stopE5 }] = useSound("./sounds/E5.mp3", interruptObj);
    const [playF5, { stop: stopF5 }] = useSound("./sounds/F5.mp3", interruptObj);
    const [playGb5, { stop: stopGb5 }] = useSound("./sounds/Gb5.mp3", interruptObj);
    const [playG5, { stop: stopG5 }] = useSound("./sounds/G5.mp3", interruptObj);
    const [playAb5, { stop: stopAb5 }] = useSound("./sounds/Ab5.mp3", interruptObj);
    const [playA5, { stop: stopA5 }] = useSound("./sounds/A5.mp3", interruptObj);
    const [playBb5, { stop: stopBb5 }] = useSound("./sounds/Bb5.mp3", interruptObj);
    const [playB5, { stop: stopB5 }] = useSound("./sounds/B5.mp3", interruptObj);

    const [playC6, { stop: stopC6 }] = useSound("./sounds/C6.mp3", interruptObj);
    const [playDb6, { stop: stopDb6 }] = useSound("./sounds/Db6.mp3", interruptObj);
    const [playD6, { stop: stopD6 }] = useSound("./sounds/D6.mp3", interruptObj);
    const [playEb6, { stop: stopEb6 }] = useSound("./sounds/Eb6.mp3", interruptObj);
    const [playE6, { stop: stopE6 }] = useSound("./sounds/E6.mp3", interruptObj);
    const [playF6, { stop: stopF6 }] = useSound("./sounds/F6.mp3", interruptObj);
    const [playGb6, { stop: stopGb6 }] = useSound("./sounds/Gb6.mp3", interruptObj);
    const [playG6, { stop: stopG6 }] = useSound("./sounds/G6.mp3", interruptObj);
    const [playAb6, { stop: stopAb6 }] = useSound("./sounds/Ab6.mp3", interruptObj);
    const [playA6, { stop: stopA6 }] = useSound("./sounds/A6.mp3", interruptObj);
    const [playBb6, { stop: stopBb6 }] = useSound("./sounds/Bb6.mp3", interruptObj);
    const [playB6, { stop: stopB6 }] = useSound("./sounds/B6.mp3", interruptObj);
    const [playC7, { stop: stopC7 }] = useSound("./sounds/C7.mp3", interruptObj);

    const PlayFuncs = [
        () => playC0(),
        () => playDb0(),
        () => playD0(),
        () => playEb0(),
        () => playE0(),
        () => playF0(),
        () => playGb0(),
        () => playG0(),
        () => playAb0(),
        () => playA0(),
        () => playBb0(),
        () => playB0(),

        () => playC1(),
        () => playDb1(),
        () => playD1(),
        () => playEb1(),
        () => playE1(),
        () => playF1(),
        () => playGb1(),
        () => playG1(),
        () => playAb1(),
        () => playA1(),
        () => playBb1(),
        () => playB1(),

        () => playC2(),
        () => playDb2(),
        () => playD2(),
        () => playEb2(),
        () => playE2(),
        () => playF2(),
        () => playGb2(),
        () => playG2(),
        () => playAb2(),
        () => playA2(),
        () => playBb2(),
        () => playB2(),

        () => playC3(),
        () => playDb3(),
        () => playD3(),
        () => playEb3(),
        () => playE3(),
        () => playF3(),
        () => playGb3(),
        () => playG3(),
        () => playAb3(),
        () => playA3(),
        () => playBb3(),
        () => playB3(),

        () => playC4(),
        () => playDb4(),
        () => playD4(),
        () => playEb4(),
        () => playE4(),
        () => playF4(),
        () => playGb4(),
        () => playG4(),
        () => playAb4(),
        () => playA4(),
        () => playBb4(),
        () => playB4(),

        () => playC5(),
        () => playDb5(),
        () => playD5(),
        () => playEb5(),
        () => playE5(),
        () => playF5(),
        () => playGb5(),
        () => playG5(),
        () => playAb5(),
        () => playA5(),
        () => playBb5(),
        () => playB5(),

        () => playC6(),
        () => playDb6(),
        () => playD6(),
        () => playEb6(),
        () => playE6(),
        () => playF6(),
        () => playGb6(),
        () => playG6(),
        () => playAb6(),
        () => playA6(),
        () => playBb6(),
        () => playB6(),
        () => playC7(),
    ];
    const StopFuncs = [
        () => stopC0(),
        () => stopDb0(),
        () => stopD0(),
        () => stopEb0(),
        () => stopE0(),
        () => stopF0(),
        () => stopGb0(),
        () => stopG0(),
        () => stopAb0(),
        () => stopA0(),
        () => stopBb0(),
        () => stopB0(),

        () => stopC1(),
        () => stopDb1(),
        () => stopD1(),
        () => stopEb1(),
        () => stopE1(),
        () => stopF1(),
        () => stopGb1(),
        () => stopG1(),
        () => stopAb1(),
        () => stopA1(),
        () => stopBb1(),
        () => stopB1(),

        () => stopC2(),
        () => stopDb2(),
        () => stopD2(),
        () => stopEb2(),
        () => stopE2(),
        () => stopF2(),
        () => stopGb2(),
        () => stopG2(),
        () => stopAb2(),
        () => stopA2(),
        () => stopBb2(),
        () => stopB2(),

        () => stopC3(),
        () => stopDb3(),
        () => stopD3(),
        () => stopEb3(),
        () => stopE3(),
        () => stopF3(),
        () => stopGb3(),
        () => stopG3(),
        () => stopAb3(),
        () => stopA3(),
        () => stopBb3(),
        () => stopB3(),

        () => stopC4(),
        () => stopDb4(),
        () => stopD4(),
        () => stopEb4(),
        () => stopE4(),
        () => stopF4(),
        () => stopGb4(),
        () => stopG4(),
        () => stopAb4(),
        () => stopA4(),
        () => stopBb4(),
        () => stopB4(),

        () => stopC5(),
        () => stopDb5(),
        () => stopD5(),
        () => stopEb5(),
        () => stopE5(),
        () => stopF5(),
        () => stopGb5(),
        () => stopG5(),
        () => stopAb5(),
        () => stopA5(),
        () => stopBb5(),
        () => stopB5(),

        () => stopC6(),
        () => stopDb6(),
        () => stopD6(),
        () => stopEb6(),
        () => stopE6(),
        () => stopF6(),
        () => stopGb6(),
        () => stopG6(),
        () => stopAb6(),
        () => stopA6(),
        () => stopBb6(),
        () => stopB6(),
        () => stopC7(),
    ];
    return { PlayFuncs, StopFuncs };
    
};