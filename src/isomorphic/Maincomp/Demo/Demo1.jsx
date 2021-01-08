
import React ,{useState}from 'react'

function Demo1() {    
 const decrementcount=()=>{
    
        setCount(preCount=>  preCount -1);
    }    
    function incrementcount(){
        setCount(preCount=> 
            
            preCount +1);
            settheme('red')
        };       
    const [count, setCount] = useState(4);
    const [theme, settheme] = useState("blue")
    return (
        <div>
            <button onClick={decrementcount}>-</button>
            <span>{count}</span>
            <span>{theme}</span>
            <button onClick={incrementcount}>+</button>
        </div>
    )
}

export default Demo1
