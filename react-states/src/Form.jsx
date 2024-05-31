import { useState } from "react"

export default function Form(){
    let [formData,setformData] = useState({
        fullName: "" ,
        userName:"",
        password:"",
    });
    let handleInputChange = (event)=>{
        setformData((currData)=>{
            return{...currData, [event.target.name]: event.target.value}
        });
    }

    let handleSubmit = (event)=>{
        event.preventDefault();
        setformData({
            fullName: "" ,
            userName:"",
            password:"",

        })
    }
    return(
        <form>
            <label htmlFor="fullName">Full name</label>
            <input placeholder="enter full name" type="text"
            value={formData.fullName} onChange={handleInputChange} id="fullName"  
            name="fullName"
            ></input> <br></br> <br></br>
            
            <label htmlFor="username">Username</label>
            <input placeholder="enter username" type="text"
            value={formData.userName} onChange={handleInputChange} id="username"  
            name="userName"
            ></input> <br></br> <br></br>

            <label htmlFor="password">Password</label>
            <input placeholder="enter password" type="password"
            value={formData.password} onChange={handleInputChange} id="password"  
            name="password"
            ></input>
            <button onClick={handleSubmit}>Submit</button>
        </form>

        
    )
}