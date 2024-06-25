import React, { useState } from "react";

function Update() {
    const [car, setCar] = useState({ name: "hehe", year: 2023, model: 2022 });

    function handleChangename(event){
        setCar({...car, name: event.target.value})
    }
    function handleChangeyear(event){
        setCar( c => ({...c, year: event.target.value}))
    }
    function handleChangemodel(event){
        setCar({...car, model : event.target.value})
    }
    return (
        <div>
            <p>your bla bla is: {car.name} {car.year} {car.model}</p>
            <p>your bla bla is: {car.name} {car.year} {car.model}</p>
            <input type="text" value={car.name} onChange={handleChangename}/><br/>
            <input type="number" value={car.year} onChange={handleChangeyear}/><br/>
            <input type="text" value={car.model} onChange={handleChangemodel}/><br/>
            <p>your bla bla is: {car.name} {car.year} {car.model}</p>
            <input type="text" value={car.name} onChange={handleChangename}/><br/>
            <input type="number" value={car.year} onChange={handleChangeyear}/><br/>
            <input type="text" value={car.model} onChange={handleChangemodel}/><br/>   <p>your bla bla is: {car.name} {car.year} {car.model}</p>
            <input type="text" value={car.name} onChange={handleChangename}/><br/>
            <input type="number" value={car.year} onChange={handleChangeyear}/><br/>
            <input type="text" value={car.model} onChange={handleChangemodel}/><br/>   <p>your bla bla is: {car.name} {car.year} {car.model}</p>
            <input type="text" value={car.name} onChange={handleChangename}/><br/>
            <input type="number" value={car.year} onChange={handleChangeyear}/><br/>
            <input type="text" value={car.model} onChange={handleChangemodel}/><br/>   <p>your bla bla is: {car.name} {car.year} {car.model}</p>
            <input type="text" value={car.name} onChange={handleChangename}/><br/>
            <input type="number" value={car.year} onChange={handleChangeyear}/><br/>
            <input type="text" value={car.model} onChange={handleChangemodel}/><br/>   <p>your bla bla is: {car.name} {car.year} {car.model}</p>
            <input type="text" value={car.name} onChange={handleChangename}/><br/>
            <input type="number" value={car.year} onChange={handleChangeyear}/><br/>
            <input type="text" value={car.model} onChange={handleChangemodel}/><br/>   <p>your bla bla is: {car.name} {car.year} {car.model}</p>
            <input type="text" value={car.name} onChange={handleChangename}/><br/>
            <input type="number" value={car.year} onChange={handleChangeyear}/><br/>
            <input type="text" value={car.model} onChange={handleChangemodel}/><br/>
        </div>
    );
}

export default Update;

