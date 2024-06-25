import React, {useEffect, useState } from "react"

function Textusehook(){
    const[count,getcount] = useState(0);
    const[color,getcolor] = useState("green");
    useEffect(() =>{
        document.title = `Count: ${count}  ${color}`;
    },[count, color])
    function Addcount(){
        getcount(c => c + 1);
    }
    function trucount(){
        getcount(c => c- 1);
    }
    function resetcount(){
        getcount(0)
    }
    function changecolor(){
        getcolor(c => c === 'green' ? "red" : "green");
    }
    
    return(
        <div>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={Addcount}>ADD</button>
            <button onClick={resetcount}>reset</button>
            <button onClick={trucount}>tru</button>
            <button onClick={changecolor} >chuyen mau</button>
        </div>

    );



}

export default Textusehook