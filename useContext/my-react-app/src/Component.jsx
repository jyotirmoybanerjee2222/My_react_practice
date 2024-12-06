import React ,{useState,createContext} from 'react';
import ComponentA from "./ComponentA.jsx"

export const UserContext = createContext();
function Component(){
    const [user,setUser] = useState("Jyotirmoy");
return(<div className="box">
    <h1>Component</h1>
    <h2>{`Hello ${user}`}</h2>
    <ComponentA user={user}></ComponentA>
</div>)
}
export default Component