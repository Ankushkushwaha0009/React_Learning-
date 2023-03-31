import React , {useEffect} from 'react' ; 

function Hooks22(props){

    useEffect(() => {
            console.log(" uc is called ") ; 

    } , [props.cc])

    return(
       <div> 
        <h1> uc count is   : {props.cc}  </h1>
        <h2> uc1 count is  : {props.cc1} </h2>
       </div>
    )
}
export default Hooks22 ; 