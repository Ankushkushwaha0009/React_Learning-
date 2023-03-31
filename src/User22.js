import React from 'react';

function user22(props) {

    return (
        <div>
            <h1>User component </h1>

            {/* two methods to call the function  */}
            {/* <button onClick={() => props.data()}>click data function</button> */}
            <button onClick={props.data}>click data function</button>

        </div>
    ) ; 

}

export default user22; 

