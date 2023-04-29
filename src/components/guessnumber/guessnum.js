import { useState } from "react";
import { Fragment } from "react";



export function Guessnum(){
    const[number,setnumber]=useState('')
    const[count,setcount]=useState(1);
    const[random,setrandom]=useState(Math.floor(Math.random()*10)+1)

    function handleChange(num){
        setnumber(num.target.value)
    }

    function handleSubmit(){
            setcount(count+1)
           
            if(number==random){
                alert("Congrat's, You Guess Right number")
                alert("Start Again")
                return;
            }

            else if(count>4){
                alert("You lose the game, Please Start again")
                return;
            }

            else if(number>random){
                alert("That's not Right One, Please guess smaller no.")
            }

            else if(number<random){
                alert("That's not Right One, Please guess larger no.")
            }
            console.log(count)

            
    }

    function handleStart(){
        setcount(1);
        setnumber('')
    }

    return(
        <Fragment>
            <input type="number" placeholder="Guess Number between 0-10" alt="" value={number} onChange={handleChange}/>
            <p>Random No= {random}</p>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleStart}>Start</button>
        </Fragment>
    )
}