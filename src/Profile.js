import { useState } from "react";
function Profile(){

    // const [l  , setl] = useState(2)  ; 

    //1 , 2 , 3 

    let l = 1 ; 

    return(
        <div>
           {
             l == 1 ?  <h1>Welcome 1</h1> :
             l == 2 ?  <h1>Welcome 2</h1> : 
             <h1>Welcome 3</h1>
           }
        </div>
    )

}

export default Profile ; 