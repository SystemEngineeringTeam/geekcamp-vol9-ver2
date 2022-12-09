import useSound from "use-sound";
import C0 from "./sounds/C0.mp3";
import Db0 from "./sounds/Db0.mp3";
import D0 from "./sounds/D0.mp3";
import Eb0 from "./sounds/Eb0.mp3";
import E0 from "./sounds/E0.mp3";
import F0 from "./sounds/F0.mp3";
import Gb0 from "./sounds/Gb0.mp3";
import G0 from "./sounds/G0.mp3";
import Ab0 from "./sounds/Ab0.mp3";
import A0 from "./sounds/A0.mp3";
import Bb0 from "./sounds/Bb0.mp3";
import B0 from "./sounds/B0.mp3"; 

import C1 from "./sounds/C1.mp3";
import Db1 from "./sounds/Db1.mp3";
import D1 from "./sounds/D1.mp3";
import Eb1 from "./sounds/Eb1.mp3";
import E1 from "./sounds/E1.mp3";
import F1 from "./sounds/F1.mp3";
import Gb1 from "./sounds/Gb1.mp3";
import G1 from "./sounds/G1.mp3";
import Ab1 from "./sounds/Ab1.mp3";
import A1 from "./sounds/A1.mp3";
import Bb1 from "./sounds/Bb1.mp3";
import B1 from "./sounds/B1.mp3"; 

import C2 from "./sounds/C2.mp3";
import Db2 from "./sounds/Db2.mp3";
import D2 from "./sounds/D2.mp3";
import Eb2 from "./sounds/Eb2.mp3";
import E2 from "./sounds/E2.mp3";
import F2 from "./sounds/F2.mp3";
import Gb2 from "./sounds/Gb2.mp3";
import G2 from "./sounds/G2.mp3";
import Ab2 from "./sounds/Ab2.mp3";
import A2 from "./sounds/A2.mp3";
import Bb2 from "./sounds/Bb2.mp3";
import B2 from "./sounds/B2.mp3"; 

import C3 from "./sounds/C3.mp3"; //基準
import Db3 from "./sounds/Db3.mp3";
import D3 from "./sounds/D3.mp3";
import Eb3 from "./sounds/Eb3.mp3";
import E3 from "./sounds/E3.mp3";
import F3 from "./sounds/F3.mp3";
import Gb3 from "./sounds/Gb3.mp3";
import G3 from "./sounds/G3.mp3";
import Ab3 from "./sounds/Ab3.mp3";
import A3 from "./sounds/A3.mp3";
import Bb3 from "./sounds/Bb3.mp3";
import B3 from "./sounds/B3.mp3"; 

import C4 from "./sounds/C4.mp3";
import Db4 from "./sounds/Db4.mp3";
import D4 from "./sounds/D4.mp3";
import Eb4 from "./sounds/Eb4.mp3";
import E4 from "./sounds/E4.mp3";
import F4 from "./sounds/F4.mp3";
import Gb4 from "./sounds/Gb4.mp3";
import G4 from "./sounds/G4.mp3";
import Ab4 from "./sounds/Ab4.mp3";
import A4 from "./sounds/A4.mp3";
import Bb4 from "./sounds/Bb4.mp3";
import B4 from "./sounds/B4.mp3";

import C5 from "./sounds/C5.mp3";
import Db5 from "./sounds/Db5.mp3";
import D5 from "./sounds/D5.mp3";
import Eb5 from "./sounds/Eb5.mp3";
import E5 from "./sounds/E5.mp3";
import F5 from "./sounds/F5.mp3";
import Gb5 from "./sounds/Gb5.mp3";
import G5 from "./sounds/G5.mp3";
import Ab5 from "./sounds/Ab5.mp3";
import A5 from "./sounds/A5.mp3";
import Bb5 from "./sounds/Bb5.mp3";
import B5 from "./sounds/B5.mp3"; 

import C6 from "./sounds/C6.mp3";
import Db6 from "./sounds/Db6.mp3";
import D6 from "./sounds/D6.mp3";
import Eb6 from "./sounds/Eb6.mp3";
import E6 from "./sounds/E6.mp3";
import F6 from "./sounds/F6.mp3";
import Gb6 from "./sounds/Gb6.mp3";
import G6 from "./sounds/G6.mp3";
import Ab6 from "./sounds/Ab6.mp3";
import A6 from "./sounds/A6.mp3";
import Bb6 from "./sounds/Bb6.mp3";
import B6 from "./sounds/B6.mp3"; 
import C7 from "./sounds/C7.mp3";

//PlayFuncs配列とStopFuncs配列を渡す
export const useGetSoundPlayer = () => {
    const [playC0, { stop: stopC0 }] = useSound(C0);
    const [playDb0, { stop: stopDb0 }] = useSound(Db0);
    const [playD0, { stop: stopD0 }] = useSound(D0);
    const [playEb0, { stop: stopEb0 }] = useSound(Eb0);
    const [playE0, { stop: stopE0 }] = useSound(E0);
    const [playF0, { stop: stopF0 }] = useSound(F0);
    const [playGb0, { stop: stopGb0 }] = useSound(Gb0);
    const [playG0, { stop: stopG0 }] = useSound(G0);
    const [playAb0, { stop: stopAb0 }] = useSound(Ab0);
    const [playA0, { stop: stopA0 }] = useSound(A0);
    const [playBb0, { stop: stopBb0 }] = useSound(Bb0);
    const [playB0, { stop: stopB0 }] = useSound(B0);

    const [playC1, { stop: stopC1 }] = useSound(C1);
    const [playDb1, { stop: stopDb1 }] = useSound(Db1);
    const [playD1, { stop: stopD1 }] = useSound(D1);
    const [playEb1, { stop: stopEb1 }] = useSound(Eb1);
    const [playE1, { stop: stopE1 }] = useSound(E1);
    const [playF1, { stop: stopF1 }] = useSound(F1);
    const [playGb1, { stop: stopGb1 }] = useSound(Gb1);
    const [playG1, { stop: stopG1 }] = useSound(G1);
    const [playAb1, { stop: stopAb1 }] = useSound(Ab1);
    const [playA1, { stop: stopA1 }] = useSound(A1);
    const [playBb1, { stop: stopBb1 }] = useSound(Bb1);
    const [playB1, { stop: stopB1 }] = useSound(B1);

    const [playC2, { stop: stopC2 }] = useSound(C2);
    const [playDb2, { stop: stopDb2 }] = useSound(Db2);
    const [playD2, { stop: stopD2 }] = useSound(D2);
    const [playEb2, { stop: stopEb2 }] = useSound(Eb2);
    const [playE2, { stop: stopE2 }] = useSound(E2);
    const [playF2, { stop: stopF2 }] = useSound(F2);
    const [playGb2, { stop: stopGb2 }] = useSound(Gb2);
    const [playG2, { stop: stopG2 }] = useSound(G2);
    const [playAb2, { stop: stopAb2 }] = useSound(Ab2);
    const [playA2, { stop: stopA2 }] = useSound(A2);
    const [playBb2, { stop: stopBb2 }] = useSound(Bb2);
    const [playB2, { stop: stopB2 }] = useSound(B2);

    const [playC3, { stop: stopC3 }] = useSound(C3);
    const [playDb3, { stop: stopDb3 }] = useSound(Db3);
    const [playD3, { stop: stopD3 }] = useSound(D3);
    const [playEb3, { stop: stopEb3 }] = useSound(Eb3);
    const [playE3, { stop: stopE3 }] = useSound(E3);
    const [playF3, { stop: stopF3 }] = useSound(F3);
    const [playGb3, { stop: stopGb3 }] = useSound(Gb3);
    const [playG3, { stop: stopG3 }] = useSound(G3);
    const [playAb3, { stop: stopAb3 }] = useSound(Ab3);
    const [playA3, { stop: stopA3 }] = useSound(A3);
    const [playBb3, { stop: stopBb3 }] = useSound(Bb3);
    const [playB3, { stop: stopB3 }] = useSound(B3);

    const [playC4, { stop: stopC4 }] = useSound(C4);
    const [playDb4, { stop: stopDb4 }] = useSound(Db4);
    const [playD4, { stop: stopD4 }] = useSound(D4);
    const [playEb4, { stop: stopEb4 }] = useSound(Eb4);
    const [playE4, { stop: stopE4 }] = useSound(E4);
    const [playF4, { stop: stopF4 }] = useSound(F4);
    const [playGb4, { stop: stopGb4 }] = useSound(Gb4);
    const [playG4, { stop: stopG4 }] = useSound(G4);
    const [playAb4, { stop: stopAb4 }] = useSound(Ab4);
    const [playA4, { stop: stopA4 }] = useSound(A4);
    const [playBb4, { stop: stopBb4 }] = useSound(Bb4);
    const [playB4, { stop: stopB4 }] = useSound(B4);

    const [playC5, { stop: stopC5 }] = useSound(C5);
    const [playDb5, { stop: stopDb5 }] = useSound(Db5);
    const [playD5, { stop: stopD5 }] = useSound(D5);
    const [playEb5, { stop: stopEb5 }] = useSound(Eb5);
    const [playE5, { stop: stopE5 }] = useSound(E5);
    const [playF5, { stop: stopF5 }] = useSound(F5);
    const [playGb5, { stop: stopGb5 }] = useSound(Gb5);
    const [playG5, { stop: stopG5 }] = useSound(G5);
    const [playAb5, { stop: stopAb5 }] = useSound(Ab5);
    const [playA5, { stop: stopA5 }] = useSound(A5);
    const [playBb5, { stop: stopBb5 }] = useSound(Bb5);
    const [playB5, { stop: stopB5 }] = useSound(B5);

    const [playC6, { stop: stopC6 }] = useSound(C6);
    const [playDb6, { stop: stopDb6 }] = useSound(Db6);
    const [playD6, { stop: stopD6 }] = useSound(D6);
    const [playEb6, { stop: stopEb6 }] = useSound(Eb6);
    const [playE6, { stop: stopE6 }] = useSound(E6);
    const [playF6, { stop: stopF6 }] = useSound(F6);
    const [playGb6, { stop: stopGb6 }] = useSound(Gb6);
    const [playG6, { stop: stopG6 }] = useSound(G6);
    const [playAb6, { stop: stopAb6 }] = useSound(Ab6);
    const [playA6, { stop: stopA6 }] = useSound(A6);
    const [playBb6, { stop: stopBb6 }] = useSound(Bb6);
    const [playB6, { stop: stopB6 }] = useSound(B6);
    const [playC7, { stop: stopC7 }] = useSound(C7);

    const PlayFuncs = [
        () => playC0(), //0
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

        () => playC1(), //12
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

        () => playC2(), //24
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

        () => playC3(), //36
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