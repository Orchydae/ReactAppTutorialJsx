
function UserGreeting(props) {

    return (
        props.isLoggedIn ?
            <h1>Welcome Back {props.username}!</h1> :
            <h1>Please Sign Up!</h1>
    );
}

export default UserGreeting;