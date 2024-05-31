import { useState } from "react"
import "./comment.css";

export default function Comment(){
    let [comments, setComments] = useState([
        {
        username: "@sk",
        remarks:"great job!",
        rating:4,
        },
    ]);
    return(
        <div> <h3>All Comments</h3>
        <div className="comment">
            <span>{comments[0].remarks}</span>
            &nbsp; 
            <span>(rating = {comments[0].rating})</span>
            <p>- {comments[0].username}</p>
        </div>
        </div>
    )
}