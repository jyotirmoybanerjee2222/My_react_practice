import React ,{useState} from 'react';
function MyComponent(){

    let [name, setName] = useState("Guest");
    const [age,setAge] = useState(0);
    const [isEmployed,SetIsEmployed] = useState(false);
    const updateName = () => {
        // name = "Spangebob";
        // console.log(name);
        setName("Sponghbob");
    }
    const increeamentAge = () => {
        setAge(age+1);
    }
    const toggleEmployement = () => {
        SetIsEmployed(!isEmployed);
    }
    return(<div>
        <p>Name: {name}</p>
        <button onClick ={updateName}>set Name</button>

        <p>Name: {age}</p>
        <button onClick ={increeamentAge}>set Age</button>

        <p>Employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick ={toggleEmployement}>set Employement</button>
    </div>)
}

export default MyComponent