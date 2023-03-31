import React, { useState } from "react";

function Login() {

    const [userId, setUserId] = useState(false);
    const [password, setpassword] = useState("");
    const [userErr, setuserErr] = useState(false);
    const [passErr, setpassErr] = useState(false);

    function loginHandle(e) {
        //  alert("hello") ;

        if(userId.length < 3 || password < 8){
            console.log("please type correct value !")
        }
        else{
            console.log(  "UserId  : " , userId , "\npassword is : "  , password) ; 
        }
        
        e.preventDefault();
    }

    function userHandler(e) {
        let item = e.target.value;
        if (item.length < 3) {
            setuserErr(true);
        }
        else {
            setuserErr(false);
        }
        setUserId(item) ; 
    }

    function PasswordHander(e){
        let item = e.target.value;
        if (item.length < 8 ) {
            setpassErr(true);
        }
        else {
            setpassErr(false);
        }
        setpassword(item) ; 

    }
    return (
        <div>

            <h1>Login !</h1>
            <form onSubmit={loginHandle}>
                <input type="text" placeholder="Enter UserId " onChange={userHandler} />
                {userErr ? <span> User Not valid! </span> : ""}

                <br />
                <input type="password" placeholder="Enter Password" onChange={PasswordHander}></input>  <br />
                {passErr ? <span> password Not valid!</span> : ""}  < br/> 

                <button type="Submit">Login</button>
            </form>

        </div>
    )
}

export default Login; 