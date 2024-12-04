import React,{useState} from 'react';
function MyComponent(){
    const [foods,setFoods] = useState(["Apple","Organge","bnanana"]);
    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setFoods((f =>[...foods,newFood]));
    }
    function handleremoveFood(index){
        setFoods(foods.filter((_,i) =>  i !== index));
    }
    return(<div>
        <h2>List of Food</h2>
            <ul>
                {foods.map((food,index) =>
                <li key={index} onClick ={() => handleremoveFood(index)}>{food}</li>)}
            </ul>
            <input type = "text" id = "foodInput" placeholder='Enter food name '/>
            <button onClick={handleAddFood}>Add Food</button>
    </div>);
}
export default MyComponent;