function Button(){
    // let count = 0;
    // const handleClick = () => console.log("OUCH");
    // const handleClick1 = (name) => {
    //     if(count<3)
    //     {
    //         count++;
    //         console.log(`${name} Stop Clicking me, you click me ${count} time/s`);
    //     }
    //     else{
    //         console.log(`${name} Stop Clicking me`);
    //     }
    // }
    // return(<button onClick = {() => handleClick1("Jyoti")}>clickme</button>);

    const handleClick = (e) =>  e.target.textContent= "Ouch";///console.log(e);
    //return(<button onClick = {(e) => handleClick(e)}>clickme</button>);
    return(<button onDoubleClick = {(e) => handleClick(e)}>clickme</button>);

}

export default Button