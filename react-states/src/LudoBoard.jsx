import { useState } from "react";

export default function LudoBoard(){

    let [moves, setmoves] = useState({blue:0,red:0,green:0,yellow:0} )
    let updateBlue =()=>{
        setmoves((prevmoves)=>{
            return {...prevmoves,blue:prevmoves.blue +1}
        })
    }
    let updateRed =()=>{
        setmoves((prevmoves)=>{
            return {...prevmoves,red:prevmoves.red +1}
        })
    }

    return(
        <div>
            <p>Game Begins</p>
            <div className="brand">
                <p>Blue Moves ={moves.blue}  </p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>

                <p>Red Moves ={moves.red}  </p>
                <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
            
            </div>
        </div>
    )
}