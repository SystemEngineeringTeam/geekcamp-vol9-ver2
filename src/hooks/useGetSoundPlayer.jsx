import useSound from "use-sound";
import C3 from "./sounds/C3.mp3";
import Db3 from "./sounds/Db3.mp3";
import D3 from "./sounds/D3.mp3";
import Eb3 from "./sounds/Eb3.mp3";
import E3 from "./sounds/E3.mp3";
import F3 from "./sounds/F3.mp3";
import Gb3 from "./sounds/Gb3.mp3";
import G3 from "./sounds/G3.mp3";
import Ab3 from "./sounds/Ab3.mp3";
import A3 from "./sounds/A3.mp3";
import Bb3 from "./sounds/Bb3.mp3";//一括代入の方法
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

//PlayFuncs配列とStopFuncs配列を渡す
export const useGetSoundPlayer = () => {
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

    const PlayFuncs = [
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
        () => playB4(), //全24音
    ];
    const StopFuncs = [
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
        () => stopB4(), //全24音
    ];
    return { PlayFuncs, StopFuncs };
    
};