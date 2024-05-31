import { useState } from "react"
export default function Counter(){
    let [count , setcount] = useState(0); // initialization

    let incCount=()=>{
        // setcount((currval)=>{  // call back updater  which depends on old value
        //     return currval+1;
        // });
        // setcount((curval)=>{
        //     return curval+1;
        // });
        setcount(25);
    }
    
    return(
        <div>
        <h3>count = {count}</h3>
    <button onClick={incCount}>Iincrease count</button>
    </div>
    );
}