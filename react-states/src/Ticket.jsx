import TicketNum from "./TicketNum";
import "./Tickket.css";

export default function Ticket({ticket}){
return(
    <div className="Tickket">
        <p>Ticket</p>
        {ticket.map((num,idx)=>(
            <TicketNum num={num} key={idx}></TicketNum>
        ))}
        
    </div>
);
}