import { useState } from 'react';


function SimpleButton() {

    
    let [colorClass, setColorClass] = useState("btn-primary");
    let [label, setLabel] = useState("Blue");


    function changeColor() {

        if (colorClass === "btn-primary") {
            setColorClass("btn-danger");
            setLabel("Red");
        } 
        else {
            setColorClass("btn-danger");
            setLabel("Red")
        }

    }

    return(
        <button className={`btn ${colorClass}`} onClick={changeColor}>{label}</button>
    )
}

export default SimpleButton;