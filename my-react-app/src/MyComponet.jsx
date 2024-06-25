import React, {useState} from 'react'

function MyComponet(){
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isemployed, setisemployed] = useState(false);

    const toggleisemployed =() => {
        setisemployed(!isemployed);
    }
    const updateName = () =>{
        setName("spsdapda")
    }
    const updateage = ()=>{
        setAge(age + 1)
    }
    return( <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={updateage}>Set Age</button>
        <p>isemployed: {isemployed ? "Yes" : "No"}</p>
        <button onClick={toggleisemployed}>icasjkdak age</button>
    </div>);
}

export default MyComponet