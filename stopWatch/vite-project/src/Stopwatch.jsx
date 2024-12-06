import React,{useState,useEffect,useRef} from 'react';


function Stopwatch(){

    const [isRunniung,setISRunning] = useState(false);
    const [elapsedTime,setElapedTime] = useState(0);

    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if(isRunniung){
            intervalIdRef.current = setInterval(() =>{
            setElapedTime(Date.now()-startTimeRef.current);
           },10);
        }
        
        return(()=> {
            clearInterval(intervalIdRef.current);
        })

    },[isRunniung]);

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


    }
    function reset(){
       setElapedTime(0);
       setISRunning(false);

    }
    return(<div className='stopwatch'>
        <div className='display'>{formatTime()}</div>
        <div className='controls'>
            <button onClick={start} className='start'>Start</button>
            <button onClick={start} className='stop'>stop</button>
            <button onClick={start} className='reset'>ReSet</button>
        </div>
       
    
    </div>)
}

export default Stopwatch;