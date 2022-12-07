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

    const cleanDisplay = () =>{ //表示されている要素を全て消す
        const targetOfHeader = document.getElementById("display");
        targetOfHeader.innerHTML ="";
    }

    const playDisplay = () =>{ //表示されている要素にひとつずつイベントを起こしていく
        
        const targetOfHeader = document.getElementById("display");
        const childrenNum = targetOfHeader.childElementCount; //選択されている要素数（headerタグの子要素spanの数)を数える
        for(let i=0; i<=childrenNum; i++){ //headerにぶら下がっているspanタグをひとずつ処理していく
            if(i  == 0){ //一個目はすぐに色を変える
                const element = document.getElementById("Number" + i); //spanタグのidは[Number数字]で定義してある
                element.style.color = "orange";
            }else if(i == childrenNum ){ //一番最後のときは末尾の文字を白に戻す
                setTimeout( () =>{
                    const lastElement = document.getElementById("Number" + (i-1)); //対象にしている要素のひとつ前の要素を取得
                    lastElement.style.color = "white";
                    //laterElement.style.color = "white";

                }, i * 1000); //二つ目は１秒、三つ目は２秒待つ... とすることで１秒ごと動作させる
            }else{ //初回、最終回以外の処理はここ
                setTimeout( () =>{
                    const formerElement = document.getElementById("Number" + (i - 1)); //対象にしている要素のひとつ前の要素を取得
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