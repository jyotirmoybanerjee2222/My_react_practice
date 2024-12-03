
//onchange
import React,{useState} from "react";

function MyComponent(){
    const [name ,setName] = useState("Jyotirmy");
    const [quantity,setQuantity] = useState(16931122066);
    const [Comment,setComment] = useState("");
    const [payment,setPayment] = useState();
    const [Shipping,setShip] = useState();

    function handleNamerChange(event){
        setName(event.target.value);
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }
    function handleCommentChange(event){
        setComment(event.target.value);
    }
    function PaymentChange(event){
        setPayment(event.target.value);
    }
    function SetShipping(event){
        setShip(event.target.value);
    }
    return(<div>
        <input value={name} onChange={handleNamerChange}></input>
        <p>Name :{name}</p>

        <input value={quantity} onChange={handleQuantityChange}></input>
        <p>Roll:{quantity}</p>
         
        <textarea value={Comment} onChange={handleCommentChange} placeholder="Enter delivery instruction"></textarea>
        <p>Comment:{Comment}</p>

        <select value={payment} onChange={PaymentChange}>
        <option value="">Select an Option</option>
        <option value="upi">UPI</option>
        <option value="nb">Net Banking</option>
        </select>
        <p>Payment:{payment}</p>

        <label>
            <input type="radio" value="Pickup" 
            checked={Shipping==="Pickup"} onChange ={SetShipping}/>
            Pickup
        </label>
        <label>
        <input type="radio" value="Delivary" 
            checked={Shipping==="Delivary"} onChange ={SetShipping}/>
            Delivary
            
        </label>
        <p>Shipping : {Shipping}</p>
    </div>);

}
export default MyComponent;