import React,{useState,useEffect,useRef} from 'react';


function Stopwatch(){

    const [isRunning,setISRunning] = useState(false);
    const [elapsedTime,setElapedTime] = useState(0);

    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if(isRunning){
            intervalIdRef.current = setInterval(() =>{
            setElapedTime(Date.now()-startTimeRef.current);
           },10);
        }
        
        return(()=> {
            clearInterval(intervalIdRef.current);
        })

    },[isRunning]);

    function start(){
         setISRunning(true);
         startTimeRef.current = Date.now()- elapsedTime;
         console.log(startTimeRef.current);
    }
    function formatTime(){

        let hours = Math.floor(elapsedTime /(1000*60*60));
        let minutes = Math.floor(elapsedTime/(1000*60)%60);
        let seconds = Math.floor(elapsedTime/1000%(60));

        return `${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    function stop(){
        setISRunning(false);
        clearInterval(intervalIdRef.current);

    }
    function reset(){
       setElapedTime(0);
       setISRunning(false);
       clearInterval(intervalIdRef.current);
       
       

    }
    return(<div className='stopwatch'>
         <h1>Stop Watch</h1>
        <div className='display'>{formatTime()}</div>
        <div className='controls'>
            <button onClick={start} className='start'>Start</button>
            <button onClick={stop} className='stop'>Stop</button>
            <button onClick={reset} className='reset'>ReSet</button>
        </div>
       
    
    </div>)
}

export default Stopwatch;