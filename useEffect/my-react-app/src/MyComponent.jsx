import React,{useState,useEffect} from 'react';

function MyComponent(){
    // const [count ,setCount] = useState(0);
    // const [color ,setColor] = useState("green");
    // // useEffect(()=> {
    // //     document.title = `Count : ${count}`;
    // // },[])
    
    // // useEffect(()=> {
    // //     document.title = `Count : ${count}`;
    // // },[])
    
    // useEffect(()=> {
    //     document.title = `Count : ${count}`;
        
    //     return () =>{
    //        //some clean up
    //     }
    // },[count])

    // function addCount(){
    //     setCount(c => c+1);
    // }
    // function subCount(){
    //     setCount(c => c-1);
    // }
    // function changeColor(){
    //     setColor(c => c == "green" ? "red":"blue");
    // }
    //  return(<>
    //   <p style={{color:color}}>Count:{count}</p>
    //   <button onClick={addCount}>Add</button>
    //   <button onClick={subCount}>Sub</button><br/>
    //   <button onClick={changeColor}>Change Color</button>
    //  </>);

    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeihht] = useState(window.innerHeight);

    useEffect(() =>{
        window.addEventListener("resize",handleResize)
        console.log("Event Listen Added");  
        return () => {
           window.removeEventListener("resize",handleResize);
           console.log("Event listener removed")
        }
    },[]);
    useEffect(()=>{
        document.title = `size: ${width} * ${height} `;
    },[width,height]);
    // window.addEventListener("resize",handleResize)
    // console.log("Event Listen Added");

    function handleResize(){
        setWidth(window.innerWidth);
        setHeihht(window.innerHeight);
    }
    return(<>
       <p>Window Width:{width}px</p>
       <p>Window height:{height}px</p>

    </>)
}
export default MyComponent;