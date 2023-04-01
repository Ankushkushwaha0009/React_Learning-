import './Design'
function User_Reusable(props){
       return(
          <center>
            
             <div>
                <span>{props.data.name }</span>
                <span>{props.data.email }</span>
                <span>{props.data.contact }</span>
             </div>
           
          </center>
       )

}

export default User_Reusable ; 