import { useState } from "react";
import { Fragment } from "react";
import './guessnum.css'



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
            

            
    }

    function handleStart(){
        setcount(1);
        setnumber('')
        setrandom(Math.floor(Math.random()*10)+1)
    }

    return(
        <Fragment>
            <div>
                <p id="p1">Guess the Number</p>
                <input className="inpt1" type="number" placeholder="Guess Number between 0-10" alt="" value={number} onChange={handleChange}/>
                {/* <p>Random No= {random}</p> */}
                <button id="submit" onClick={handleSubmit}>Submit</button>
                <button id="start" onClick={handleStart}>Start</button>
            </div>
        </Fragment>
    )
}