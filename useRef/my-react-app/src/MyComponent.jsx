import React ,{useState,useEffect,useRef} from "react";
function MyComponent(){
    // let [number ,setNumber] = useState(0);

    const inputRef = useRef(null);
    console.log(inputRef);
    useEffect(() => {
      console.log("Comonent rendered");
      console.log(inputRef);  
    })
    function handleClick(){
        //ref.current = ref.current +1;
        // inputRef.current++;
        // console.log(inputRef.current);
        inputRef.current.focus();
        inputRef.current.style.background = "red";        
        
    }

    return(
    <div>
          <button onClick={handleClick}>
          Click me!
          </button>
          <input ref={inputRef}></input>
   </div>
    )
}
export default MyComponent;