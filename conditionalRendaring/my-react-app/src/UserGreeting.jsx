import PropTypes from 'prop-types';

function UserGretting(props)
{
    // if(props.isLoggedIn){
    //     return<h2>Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2>please log in to continue</h2>
    // }

    return (props.isLoggedIn ? <h2 className = "welcome-message">  Welcome {props.username}</h2>:<h2 className = "login">please log in to continue</h2>);

}

UserGretting.PropTypes ={
    isLoggedIn:PropTypes.bool,
    username:propTpes.string,
}

UserGretting.defaultProps = {
    isLoggedIn:false,
    username:"Guest",
}
export default UserGretting