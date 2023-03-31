import React , {useEffect} from 'react'
function Hooks11(props){

    //   useEffect(() => {
    //      console.log("count is  : " , props.count) ; 
    //   } , [props.count])

    useEffect(() => {
        console.log("count is  : " , props.count) ; 
        console.log("data is  : " , props.data);  
     } , [props.count , props.data])


      return(
            <center> <div className='App'> 
               <h1> Count props {props.count}</h1>
               <h1> Data props  {props.data} </h1>
               </div></center>
      )
}
export default Hooks11 ; 

