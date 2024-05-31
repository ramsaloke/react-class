import { useState } from "react"
import "./Tickket.css";
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";
export default function Lottery({n, winningSum}) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinnning = sum(ticket) === winningSum;
    let buyTicket =()=>{
        setTicket(genTicket(n));
    }
    return(
        <div>
            <h1>Lottery Game!</h1>
            <div className="ticket">
               <Ticket ticket={ticket}></Ticket>
            </div> <br></br> 
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinnning && "Congratulations you win!"}</h3>
        </div>
    )
}