import { useState } from "react"

export default function CommentForm(){
    let [formData , setFormData] = useState({
        fullName: "",
        remarks: "",
        rating: 5,

    });

    let handleChange = (event) =>{
        setFormData((currData)=>{
            return {...currData, [event.target.name]: event.target.value}
        });
    }

    let handleSubmit = (event) =>{
        event.preventDefault();
        console.log(formData)
        setFormData({
            fullName: "",
            remarks: "",
            rating: 5,

        })
    }
    return(
        <form>
            <h4>Comment Form!</h4>
            <label htmlFor="fullName">Full Name</label>
            <input placeholder="enter your name" type="text" 
            value={formData.fullName} onChange={handleChange} id="fullName"
            name="fullName"></input> <br></br> <br></br>

<label htmlFor="remarks">Remarks</label>
           <textarea  placeholder="add remarks" type="text-area" 
            value={formData.remarks} onChange={handleChange} id="remarks"
            name="remarks"> </textarea> <br></br> <br></br>
            

<label htmlFor="rating">Rating</label>
<input
    placeholder="rating"
    type="number"
    value={formData.rating}
    onChange={(event) => {
        let ratingValue = parseInt(event.target.value);
        if (ratingValue < 1 || ratingValue > 5 || isNaN(ratingValue)) {
            ratingValue = formData.rating; // Revert to previous rating if out of range or not a number
        }
        setFormData((currData) => {
            return { ...currData, rating: ratingValue };
        });
    }}
    id="rating"
    name="rating"
/>
 <br></br> <br></br>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}