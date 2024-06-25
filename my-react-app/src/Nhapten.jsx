import { useState } from "react";

function Nhapten() {
    const [name, setName] = useState("");
    const [number, setNumber] = useState(1);
    const [text, setText] = useState("");
    const [option, setOption] = useState("Visa");
    const [gender, setGender] = useState(""); // Thêm state cho giới tính
    const [selectedColor, setSelectedColor] = useState("#000000"); //thêm màu 

    function handleText(event) {
        setText(event.target.value);
    }

    function handleOption(event) {
        setOption(event.target.value);
    }

    function handleChange(event) {
        setName(event.target.value);
    }

    function changeNumber(event) {
        setNumber(event.target.value);
    }

    function handleGender(event) {
        setGender(event.target.value);
    }
    
    function handleColorChange(event) {
        setSelectedColor(event.target.value);
    }
    return (
        <div>
            <input value={name} onChange={handleChange} />
            <p>Name: {name}</p>
            <input value={number} onChange={changeNumber} type="number" />
            <p>Number: {number}</p>
            <textarea value={text} onChange={handleText} placeholder="nhap text "></textarea>
            <p>Text: {text}</p>
            <select value={option} onChange={handleOption}>
                <option value="">select your option</option>
                <option value="Visa">Visa</option>
                <option value="kakaa">kakaa</option>
                <option value="eeee">eeee</option>
            </select>
            <p>Option: {option}</p>
            
            <div>
                {/* Input radio cho giới tính */}
                <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    onChange={handleGender}
                />
                <label htmlFor="male">Male</label>

                <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    onChange={handleGender}
                />
                <label htmlFor="female">Female</label>

                <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="other"
                    checked={gender === "other"}
                    onChange={handleGender}
                />
                <label htmlFor="other">Other</label>
            </div>
            <p>Gender: {gender}</p>
            <div>
            {/* Ô nhỏ để chọn màu */}
           

            {/* Khung lớn sẽ thay đổi màu theo màu đã chọn */}
            <div
                style={{
                    width: "200px",
                    height: "200px",
                    backgroundColor: selectedColor,
                    marginTop: "20px"
                }}
            ></div>
             <input
                type="color"
                value={selectedColor}
                onChange={handleColorChange}
                className="ka"
            />
        </div>
        </div>
    );
}

export default Nhapten;
