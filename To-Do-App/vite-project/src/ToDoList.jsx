import React ,{useState} from "react"
function ToDoList(){
    const [task,setTask] = useState(["Meditation"]);
    const[newTask,setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){

    }
    function deleteTask(index){

    }
    function moveTaskUp(index)
    {

    }
    function moveTaskDown(index)
    {

    }
    return(
        <div className="to-do-List">
            <h1>To-Do_List</h1>
            <div>
                <input  type ="text"  placeholder="Enter a task.."
                 value={newTask}
                 onChange={handleInputChange}/>

                 <button className="add-button" onClick ={addTask}>Add </button>
            </div>
            <ol>
                {task.map((task,index) => 
                    <li key ={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)} >Delete</button>
                        <button className="move-button" onClick={() => moveTaskUp(index)} >UP</button>
                        <button className="move-button" onClick={() => moveTaskDown(index)} >DOwn</button>
                        
                    </li>
                )}
            </ol>
        
        </div>
    )
}
export default ToDoList