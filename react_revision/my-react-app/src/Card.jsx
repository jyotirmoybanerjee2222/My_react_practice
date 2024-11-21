import React from "react"
import profilePic from "./assets/react.svg"
function Card(){
    return(
    <div className="card">
        <img  className = "cardImage" src = {profilePic} alt="profile" ></img>
        <h2 className="shreya"> Jyotirmoy</h2>
        <p className="card-text">I am practicing react </p>
    </div>
    )
}
export default Card