function ProfilePic(){
    const imageurl = "./src/assets/react.svg"
    const handleClick = (e) => e.target.style.display="none" //console.log("OUCH");
    return(<img onClick = {(e)=> handleClick(e)} src = {imageurl}></img>);
}

export default ProfilePic