import React, { useState } from "react"
function Count(){
    const [count ,setCount] = useState(0)

    const increment = () =>{
        setCount(count + 1);
    }
    const decarment =() =>{
        setCount(count - 1);
    }
    const reset = () =>{
        setCount(0);
    }

    return(<div className="count-container">
    <p className="count-display">{count}</p>
    <button className="counter-button" onClick={decarment}>decarment</button>
    <button className="counter-button" onClick={reset}>reset</button>
    <button className="counter-button" onClick={increment}>increment</button>
</div>);

}
export default Count