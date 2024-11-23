function UserGretting(props)
{
    // if(props.isLoggedIn){
    //     return<h2>Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2>please log in to continue</h2>
    // }

    return (props.isLoggedIn ? <h2 clasName = "welcome-message ">  Welcome {props.username}</h2>:<h2 clasName = "login">please log in to continue</h2>);

}

export default UserGretting