import React , {Component} from 'react'
export default class Student13 extends Component{

      componentWillUnmount(){
          console.log("componentDidMount is called") ; 
      }
     
      render(){
        
          return(
            <center><div className='App'>
                  <h1>student component unmout </h1>
                  
            </div></center>
         )
      }
}


