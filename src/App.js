import "./App.css"
import { Grid } from './Grid'
import { Header } from './Header'
import { usePlay, useStop } from "./hooks/useSoundPlayer";

export const App = () => {
    
    return(
        <>
            <Header/>
            <Grid/>
        </>
    )
};

export default App;
