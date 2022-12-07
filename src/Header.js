export const Header = () =>{
    const styleButton ={
        width: "40px",
    }

    const styleDisplay ={
        marginLeft: "100px",
        width: "1100px",
        textAlign: "center",
        color: "white",
        fontSize: "50px",
        paddingTop: "40px"
    }

    const cleanDisplay = () =>{
        const targetOfHeader = document.getElementById("display");
        targetOfHeader.innerHTML ="";
    }

    const playDisplay = () =>{
        
        const targetOfHeader = document.getElementById("display");
        const childrenNum = targetOfHeader.childElementCount;
        for(let i=0; i<=childrenNum; i++){
            if(i  == 0){ //一回目はすぐに色を変える
                const element = document.getElementById("Number" + i);
                element.style.color = "orange";
            }else if(i == childrenNum ){ //一番最後のときは末尾の文字を白に戻す
                setTimeout( () =>{
                    const lastElement = document.getElementById("Number" + (i-1));
                    lastElement.style.color = "white";
                    //laterElement.style.color = "white";

                }, i * 1000); //二つ目は１秒、三つ目は２秒待つ... とすることで１秒ごと動作させる
            }else{
                setTimeout( () =>{
                    const formerElement = document.getElementById("Number" + (i - 1)); 
                    const laterElement = document.getElementById("Number" + i);
                    formerElement.style.color = "white";
                    laterElement.style.color = "orange";

                }, i * 1000); //二つ目は１秒、三つ目は２秒待つ... とすることで１秒ごと動作させる
            }
            
            
        }
        
    }

    return (
        <>
            <header>
                <button onClick={playDisplay} style={styleButton}>再生</button>
                <button onClick={cleanDisplay} style={styleButton}>リセット</button>
                <div id="display" style={styleDisplay}></div>
            </header>
            <div id="adjust"></div>
        </>
    )
};
export default Header;