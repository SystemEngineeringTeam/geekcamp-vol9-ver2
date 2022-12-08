// https://www.npmjs.com/package/use-sound
import useSound from "use-sound";

//PlayFuncs配列とStopFuncs配列を渡す
export const useGetSoundPlayer = () => {
    const [playC3, { stop: stopC3 }] = useSound("./sounds/C3.mp3");
    const [playDb3, { stop: stopDb3 }] = useSound("./sounds/Db3.mp3");
    const [playD3, { stop: stopD3 }] = useSound("./sounds/D3.mp3");
    const [playEb3, { stop: stopEb3 }] = useSound("./sounds/Eb3.mp3");
    const [playE3, { stop: stopE3 }] = useSound("./sounds/E3.mp3");
    const [playF3, { stop: stopF3 }] = useSound("./sounds/F3.mp3");
    const [playGb3, { stop: stopGb3 }] = useSound("./sounds/Gb3.mp3");
    const [playG3, { stop: stopG3 }] = useSound("./sounds/G3.mp3");
    const [playAb3, { stop: stopAb3 }] = useSound("./sounds/Ab3.mp3");
    const [playA3, { stop: stopA3 }] = useSound("./sounds/A3.mp3");
    const [playBb3, { stop: stopBb3 }] = useSound("./sounds/Bb3.mp3");
    const [playB3, { stop: stopB3 }] = useSound("./sounds/B3.mp3");
    const [playC4, { stop: stopC4 }] = useSound("./sounds/C4.mp3");
    const [playDb4, { stop: stopDb4 }] = useSound("./sounds/Db4.mp3");
    const [playD4, { stop: stopD4 }] = useSound("./sounds/D4.mp3");
    const [playEb4, { stop: stopEb4 }] = useSound("./sounds/Eb4.mp3");
    const [playE4, { stop: stopE4 }] = useSound("./sounds/E4.mp3");
    const [playF4, { stop: stopF4 }] = useSound("./sounds/F4.mp3");
    const [playGb4, { stop: stopGb4 }] = useSound("./sounds/Gb4.mp3");
    const [playG4, { stop: stopG4 }] = useSound("./sounds/G4.mp3");
    const [playAb4, { stop: stopAb4 }] = useSound("./sounds/Ab4.mp3");
    const [playA4, { stop: stopA4 }] = useSound("./sounds/A4.mp3");
    const [playBb4, { stop: stopBb4 }] = useSound("./sounds/Bb4.mp3");
    const [playB4, { stop: stopB4 }] = useSound("./sounds/B4.mp3");

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