import { useState } from "react";

export default function LikeButton() {

    let [isLiked , setIsLiked] = useState(false);
    let[conut , setcount] = useState(0);
        let toggleLike = ()=>{
        setIsLiked(!isLiked);
        setcount(conut+1);
    }
    let likeSyles={color:"red"};

    return(
        <div>
            <p>clicks= {conut}
                
            </p>
        <p onClick={toggleLike}>
            {isLiked ? (<i class="fa-regular fa-heart" style={likeSyles}></i>): <i class="fa-regular fa-heart"></i>  }
         

        </p>
        </div>
    )
}