import { useState } from 'react';

function CounterButton() {

    let [count, setCount] = useState(0);

    // Create a function called 'counter'
    function counter() {
        setCount(count + 1);
    }


    // Bind onClick to the button below. The button will call 'counter'
    return (        
        <button class="btn-primary" onClick={counter}>{count}</button>
    )

}

export default CounterButton;