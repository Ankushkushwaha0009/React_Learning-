import './Styles.css'
function User_Reusable(props){

    function PrintName(){
        alert(props.data.name) ; 
    }
       
    return(
        <center>
        
            <div>
            <span>{props.data.name }</span>
            <span>{props.data.email }</span>
            {/* <span>{props.data.contact }</span> */}
            <button onClick={PrintName}> click : </button>
            </div>
        
        </center>
    )

}

export default User_Reusable ; 