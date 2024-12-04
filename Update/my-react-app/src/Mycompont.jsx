import React ,{useState} from 'react';
function Mycompont(){
    const [car,setCar] = useState({year:2024,
        make:"Ford",
        model:"Mustang"});

function handleYear(event){
    setCar(car=>({...car,year:event.target.value}));
}
function handlemodel(event){
    setCar(car=>({...car,model:event.target.value}));
}
function handlemake(event){
    setCar(car=>({...car,make:event.target.value}));
}
        return(<div>
            <p>Your favorite car is:{car.year}{car.make}{car.make}</p>
            <input type = "number" value = {car.year} onChange={handleYear}/><br/>
            <input type = "text" value = {car.make} onChange={handlemake}/><br/>
            <input type = "text" value = {car.model} onChange={handlemodel}/><br/>
        </div>);
}
export default Mycompont;