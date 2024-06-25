import React, { useState } from "react"

function ArrayUpdate(){
    const [food,setFood] = useState(["Apple" , "bannaa" ,"dasdasds" , "ăp"]);

    function handleAddfood(){
        const newfood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";   
        setFood([...food, newfood]);
    }
    function handleremovefood(foodIndex) {
        setFood(prevFood => prevFood.filter((_, index) => index !== foodIndex));
    }
    

    return(<div>
        <h2>List of food</h2>
        <ol>
            {food.map((food, index) => <li key={index} onClick={() => handleremovefood(index)}>{food}</li>)}            
        </ol>
        <input type="text" id="foodInput" />
        <button onClick={handleAddfood}>Add food</button>
    </div>);
}

export default ArrayUpdate