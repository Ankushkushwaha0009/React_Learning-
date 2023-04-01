// // import {useState}  from 'react';
// import { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import User1 from './User1';
// import Ank from './Ank'
// import Kush from './Kush'
// import Ank1 from './Ank1';
// import React from 'react';

// function App() {
  
//   // this is state basically it used to store the data 
//   const [data , setValue ] = useState(0)
  
//   function updateData(){
//       setValue(data + 1)  ; 
//   }

//   function updateData1(){
//       setValue(data - 1)  ; 
//   }
 
//   console.log("------------------------------")
//   return (  

//     <div className="App">
//         <h1>{data}</h1>
//         <button onClick={updateData}>Increment</button>  <br /> <br />
//         <button onClick={updateData1}>Decrement</button>
//     </div>
   
//   );
// }
// export default App  ; 




// // state in class component 

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';


// export default class App extends Component{

//          constructor(){
//              super() ;
//              this.state = {
//                  data  : 0
//              }
//          }

//          Increment(){
//             // this.setState({data :  'Vishal Kushwaha'})
//             this.setState( {data : this.state.data + 1}) ;  
//           }

//           Decrement(){
//                this.setState({data : this.state.data - 1}) ; 
//           }
//           render(){
//             return(
//               <div className='App'>
//                      <h1> {this.state.data} </h1>
//                      <button onClick={() => this.Increment()}>Update Data</button>
//                      <button onClick={() => this.Decrement()}>Decrement </button>

//               </div>
              
//             )
              
//          }

// }




//----------- props  -------------

// import logo from './logo.svg';
// import './App.css';
// import Student from './Student';

// function App() {

// return (  

//       <div className="App">
//          <h1>Props in react </h1>
//          <Student count = "anil"   email = "ankushkushwaha@gmail.com" />
         
//       </div>
     
//     );
//   }
// export default App  ; 

// ----- props in fucntion component --------------------

// import './App.css'
// import React , { useState } from 'react'
// import logo from './logo.svg'
// import Student1 from './Student1'
// function App(){

//    const [count , setValue1] = useState("Ankush kushwaha")  ; 
   
//    return(

//        <div classcount = "App">
//               <h1>Hello world </h1>


//               <Student1  count  = {name} />

//               <button onClick={() => {setValue1("Sidhu")}}> click :  </button>


//               {/* <Student1  count = "Vishal kushwaha " email  = "Vishalkushwaha2828@gmail.com" 
//                other = {{adress : 'ng111  park' , mob : '3000' }}
//                />
//                <Student1  count = "pinky kushwaha " email  = "pinkykushwaha2828@gmail.com" 
//                other = {{adress : 'borivali' , mob : '3002' }}
//                /> */
//               }
//        </div>
//     )
// }

// export default App 


//props in class component 

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Student22 from './Student22'

// export default class App extends  Component {

//   constructor(){
//       super() ; 
//       this.state = {
//            count : 'Brendy'
//       }
//   }

//   UpdateName(){
//         this.setState({count : 'John '})
//   }

//   render(){
//       return(
//           <div className="App">
//             <h1>  Hello world !!</h1>
//             <Student22 count = {this.state.name}  email = "Anil@gmail.com" /> 
//             {/* <button onClick = { () => this.UpdateName() }> Update count </button> */}

//             <button onClick = { () => this.setState({count : 'John'}) }> Update count </button>

//           </div>
//       )
//    }
// }



//----props in class component (Practice )

// import Student22 from "./Student22";
// import './App' ; 
// import React, {Component} from 'react' ; 
// import logo from './logo.svg'
// export default class App extends Component{

//     constructor(){
//         super() ; 
//         this.state = {
//             count :  "Ankush kushwaha" , 
//         }
//     }

//     // UpdateName() {
//     //        this.setState({count : "Vishal Kushwaha"}) ;     
//     // }
   
//     render(){

//         return(
//             <div className="App">

//                  <h1>{this.state.name}</h1>
//                  <Student22  count = "John"  email = "john12@gmail.com" />
//                  <button onClick={ () => this.setState({count : "Vishal Kushwaha"}) }> Click </button>

//             </div>
             
//         )
//     }

// }

//------------get Input Box value  --------------------

// import logo from './logo.svg';
// import './App.css';
// import React  , {useState} from 'react' ;
// function App(){
//    const [data  ,  setdata]  = useState(null) ;
//    const [print1 , setPrint] = useState(false) ; 

//    function getData(val){
//       //  console.log(val.target.value)
//        setdata(val.target.value)
//        setPrint(false) ; 

//     } 
//     function printData(){
//        setPrint(true)
//     }
//     return(
//       <div className='App'>
//            {
//             print1 ? 
//             <h1>{data}</h1> 
//             : null 
//            }

//            {/* <h2>{data}</h2> */}
//            <input type="text" onChange={getData}/> < br/>
//            <button onClick={printData}> Print Data </button>
//       </div>
//   )
// }
// export default App ;

//----get Input value(practice)

// import logo from './logo.svg'
// import './App'
// import React , {useState} from 'react'  ;

// function App(){

//      const [data , setName] = useState(null) ; 
//      const [printName1 , SetPrint]  = useState(null) ; 

//      function getData(val){
//         setName(val.target.value) ; 
          
//      }
//      function printName(){
//         SetPrint(true) ; 
//      }
//      return(
//         <center> 
//             <div className='App'>
//                 {printName1  ? <h1> {data} </h1>  : null}
//                 <input type="text" onChange={getData} />  < br />
//                 <button onClick={printName}> Print count </button>
//             </div> 
//         </center> 
//      )

// }

// export default App ; 


//-----Toggle -----

// import logo from './logo.svg'
// import './App'
// import React from 'react';

// function App(){
 
//     const [status , setstatus]  = React.useState(false) ; 
//     // function Hide1(){
//     //     setstatus(false) ; 
//     // }

//     // function Show1(){
//     //     setstatus(true) ; 
//     // }
//     function Toggle(){
//         if(status == false){
//           setstatus(true)  ; 
//         }
//         else{
//             setstatus(false) ; 
//         }
//     }

//     return (

//         <center> <div className='App'>
//             {
//                 status ? 
//                 <h1> Hello world! </h1> :
//                 null 
//             }
//             {/* <button onClick={Hide1}>Hide</button>
//             <button onClick={Show1}>Show</button> */}

//             <button onClick={Toggle}>Toggle</button>

//         </div></center>

//     )
// }
// export default App ; 


// ----------Basic Form------------------------------

// import logo from './logo.svg'
// import './App'
// import  {useState} from 'react';

// function App(){

//     const [count  , setName]  = useState("") ; 
//     const [tnc  , setTnc] = useState(false) ; 
//     const [interest , setInterest] = useState("") ; 

//     function getFormData(e){
//        console.log(count , tnc  , interest) ; 
//        e.preventDefault() ; 
//     }

//     const [value  , Dis] = useState(true) ; 
//     function DisableName(){
//             Dis(false) ; 
//     }

//     return (
//         <center> <div className='App'>
//             <h2>Handle Form in react !</h2>
//             <form onSubmit={getFormData}>
//                 {
//                    value ? 
//                    <input type="text" placeholder='Enter count ' onChange={(e) => setName(e.target.value)}></input> :
//                    null 
//                 }
//                 <button onClick={DisableName}>Disable</button> <br/>   < br/>
//                 <select onChange={(e) => setInterest(e.target.value)}>
//                     <option>Select options </option>
//                     <option>Marvel </option>
//                     <option> Dc </option>
//                 </select> < br />  < br/>
//                 <input type="checkbox" onChange={(e) => setTnc(e.target.checked)}></input>
//                 <span>Accept terms and conditions </span>     < br />  < br /> 
//                 <button type='submit'> Submit </button>
//             </form>
//         </div></center>

//     )
// }
// export default App ; 


//----Practice-----------------


// import './App' ; 
// import logo from './logo.svg'
// import { useState } from 'react';

// function App(){
       

//     const [count  , setName]  = useState("") ; 
//     const [fruits , setFruits] = useState("") ;
//     const [terms , setTerms] = useState(false) ;
    
//     function Print_data(e1){
//        console.log(count , fruits  , terms) ; 
//        e1.preventDefault() ; 
//     }
//     return(
//         <center><div className='App'>
//             <h1>hi</h1>

//             <form onSubmit={Print_data}>

//                 <input type="text" placeholder='Enter Name'  onChange={(e) => setName(e.target.value) }></input>  <br/>  <br/>

//                 <select onChange = {(e) => setFruits(e.target.value)}>
//                     <option>Mango</option>
//                     <option>Banana</option>
//                     <option>Apple</option>
//                 </select> <br/>

//                 <span>Terms and condition </span>
//                 <input type="checkbox"  onChange={(e) => setTerms(e.target.checked)}></input> <br/>  <br />
//                 <button type='submit'>Submit</button>

//             </form>
//         </div></center>
//     )

// }

// export default App ; 

//----toggle----

// import './App'
// // import Login from './Login';
// // import Profile from './Profile';
// import User22 from './User22';
// // import Toggle from './Toggle';
// import Members from './Members';

// function App(){

//   function getData(){
//     alert("hello from App !")
//   }
//     return(
//        <center><div className='App'>

//          {/* < Profile/>  */}

//          {/* < Login/> */}

         
//          <User22  data = {getData} /> 
//          <div style={{float : 'right'}}> 
//           <Members data = {getData} /> 
//         </div> 
//       </div></center> 
//     )
// }
// export default App ; 



//cycle----using Class comonent 

// import './App'
// // import { useState } from 'react'
// import React , {Component} from 'react'
// export default class App extends Component{


//   //sabse pehle ye call hoga 


//   constructor(){
//     super() ; 
//     this.state = {
//         data  :  "Ankush" , 
//     }
//   }

//   render(){
//       console.log("render") ; 
//       return(
//        <center> <div className='App'>
//           <h1>Hello world  {this.state.data}</h1>
//         </div>  </center>
//       )
//   }
// }


//render , life cycle method 


// import './App'
// import { useState } from 'react'
// import React , {Component} from 'react'
// import Render11 from './Render11' ; 

// function App() {

 
//   const [count , setName] = useState("anil") ; 
 
//   //kab kab render call ho sakkta hai 

//   //1.jab component banega
//   //2.jab state update hogi tab 
//   //3.props update hoga tab 

//  function UpdateName(){
//       setName("Ankush") ; 
//   }
//   return(
//     <center> <div className='App'>
//       <h1> render method in react </h1>
//       < Render11  count = {name} />
//       <button onClick={UpdateName}  >Update count </button>
//     </div>  </center>
//   )
  
// }

// export default App ; 


///-----------componentDidMount

// import './App'
// import React , {Component} from 'react' ; 

// export default class App extends Component {
//   /*
//     1.constructor
//     2.render
//     3.componentDidMount( Mount ke samay hi chalega uske bad nahi Chalega )
//   */

//   constructor(){
//        super() ;
//        console.log("constructor")  ; 
//        this.state = {
//           data : 'Ankush' 
//        }
//   }
  
//   componentDidMount(){
//       console.log("componenDidMount") ; 
//   }
  
//   render(){
//     console.log("render")  ; 
//     return(
//         <center> 
//         <div className='App'>
//              <h1>component did mount {this.state.data}</h1>
//              <button onClick={() => { this.setState({data : 'vishal'}) }}>Update</button>
//         </div>
//         </center>
//     )
//   }

// }


//component did update 


// import './App'
// import React , {Component} from 'react' ; 
// export default class App extends Component {
//   /*
//     1.constructor
//     2.render
//     3.componentDidMount( Mount ke samay hi chalega uske bad nahi Chalega )
//   */
//   constructor(){
//        super() ;
//        console.log("construtor") ; 
//        this.state = {
//           count : 0 
//        }
//   }
  
//   componentDidUpdate(preProps , preState , snapshot){
//       console.log("componentDidUpdate " , preState.count , this.state.count) ; 
//       if(this.state.count < 3){
//            this.setState({count : this.state.count + 1}) ; 
//           //console.log("cDidupdate") ; 
//       }
//   }


//   render(){
//     console.log("render")  ; 
//     return(
//         <center> 
//         <div className='App'>
//              <h1>component did Update {this.state.count}</h1>
//              <button onClick={() => { this.setState({count :  1 }) }}>Update</button>
//              {/* <h1>{this.state.count}</h1> */}
//         </div>
//         </center>
//     )
//   }

// }

//component did update practice 

// import './App'  ; 
// import React , {Component} from 'react';
// export default class App extends Component{

//       constructor(){
//             // console.log("constructor") ; 
//             super() ;
//             this.state = {
//                   c : 0  , 
//             }
//       }
//       componentDidUpdate(props  , prevState , snapshot){
           
//            console.log("componentDidUpdate : " , prevState.c , this.state.c) ; 

//            if(this.state.c < 3){
//               this.setState({c : this.state.c + 1}) ; 
//            }
//       }
      
//       updateCount(){
//             this.setState({c : 1}) ; 
//       }
//       render(){
//             console.log("render") ; 
//             return(
//                   <center> <div className='App'>
//                           <h1>count is  : {this.state.c}</h1>
//                           <button onClick={() => this.updateCount()}> click </button>
//                   </div> </center>
//             )
//       }
// }



//ShouldcomponentUpdate ----  

// import './App'
// import React , {Component} from 'react'
// export default class App extends Component{

//       constructor(){
//            super() ;
//            this.state = {
//                 count : 0 
//            }
//       }
//       shouldComponentUpdate(){
//             console.log("shouldComponentUpdate" , this.state.count)  ; 
             
//             return true  ; 
            
//             // if(this.state.count  > 5   &&  this.state.count  <  10){
//             //             return true ; 
//             // }
//             // else{
//             //       return false ; 
//             // }
          
//       }
 
//       render(){
        
//          return(
//             <center><div className='App'>
//                   <h1>  count is   {this.state.count} </h1>
//                   <button onClick={() => {this.setState({count : this.state.count + 1 })}}>click</button>
//             </div></center>
//          )
//       }
// }


//componentunmout

// import './App'
// import React , {Component} from 'react'
// import Student13 from './Student13';
// export default class App extends Component{

//      constructor(){
//            super() ;
//            this.state = {
//                show : true 
//            }
//      }

//      render(){
        
//           return(
//             <center><div className='App'>
//                   { this.state.show ?  < Student13 /> : <h1> Student Component removed </h1> }
//                   <button onClick={() => {this.setState({show : !this.state.show})}}>toggle child comonent</button>
//             </div></center>
//          )
//       }
// }



//----------****-----------------------------------
//hooks in react to use cycle , states , life in functional component we take the help of hooks 

//starting mai use lika aaye to samjh jana ki ye hooks hai  .

// import './App'
// import React , {useState}from 'react'

// function App(){

//       const [data , setData] = useState('ankush') ; 
//       return(
//             <center><div className='App'>

//                 <h1>Hi {data} </h1>
//                 <button onClick={() => setData('Vishal')}>Update</button>

//             </div> </center>
//       )

// }

// export default App ; 
//------------------
//use effect 
//call kabhi hoga  --> state update ho , props , koi bhi component banega 
//bina condition ke kaise use karte hain idhar wo humlog sikhne wale hain .... 

// import './App'
// import React , {useEffect , useState} from 'react'
// function App(){
//       const [counter , counterUpdate] = useState(0) ; 
//       useEffect(() => {
//            console.log("useeffect") ; 
//       })
//       return(
//             <center><div className='App'>
//                   <h1>useeffect in react {counter} </h1>
//                   <button onClick={() => counterUpdate(counter + 1)} > update counter value </button>
//             </div> </center>
//       )
// }
// export default App  ; 

// import './App'
// import React , {useEffect , useState} from 'react'
// function App(){
//       const [counter , counterUpdate] = useState(0) ; 

//       useEffect(() => {
//          console.log("use - effect") ; 
//       })
      
//       return(
//             <center><div className='App'>
//                   <h1>useeffect in react {counter} </h1>
//                   <button onClick={() => counterUpdate(counter + 1)} > update counter value </button>
//             </div> </center>
//       )
// }
// export default App  ; 


//-------------  useEffect with specific states and props --------------
// import './App'
// import Hooks11 from './Hooks11'
// import React , {useState } from 'react'

// function App(){

//       const [data ,  updateData]   = useState(100) ; 
//       const [count , updateCount]  = useState(200)  ; 

//       return(
//             <center> <div className='App'> 
//                 <Hooks11 count = {count} data = {data} />
//                 <button onClick ={() => updateCount(count + 1)}> update count </button>
//                 <button onClick ={() => updateData(data + 1)}> update data </button>
                 
//             </div></center>
//       )
// }
// export default App ; 
//useEffect practice 

// import './App'
// import React , {useEffect, useState} from 'react' ; 
// function App(){
      
//       const [c , uc] = useState(10)  ; 
//       const [c1 , uc1] = useState(20) ; 

//       //sirf uc button ko click karne par hi useEffect called hoga 
//       useEffect(() => {
//             console.log(" uc is clicked ") ; 
//       } , [c])
//       return(
//             <center>  <div className='App'>
//                  <h1> uc count is {c}  </h1>
//                  <h2>uc1 count is {c1} </h2>

//                  <button onClick={() =>  uc(c + 1)}> UC  </button>
//                  <button onClick={() =>  uc1(c1 + 1)}> UC1 </button>

//             </div> </center>
//       )
// }
// export default App ; 

// import './App'
// import React , {useState} from 'react' ; 
// import Hooks22 from './Hooks22';
// function App(){
  
      
//       const [c , uc] = useState(10)  ; 
//       const [c1 , uc1] = useState(20) ; 

//       return(
             
//             <center>  <div className='App'>
//                  < Hooks22  cc = {c}  cc1 = {c1} />  
//                  <button onClick={() =>  uc(c + 1)}> UC  </button>
//                  <button onClick={() =>  uc1(c1 + 1)}> UC1 </button>
//             </div> </center>

//       )
// }
// export default App ; 

//Style 


// import './App' ; 
// import './Styles.css'  ; 
// import style from './custom.module.css' ; 
// import React from 'react';
// function App(){
     
//       return(
//             <div className='App'>
//                   <h1 className ="ank" > Style 1 Ankush kushwaha </h1>
//                   <h2 style={{color : 'red' , backgroundColor :  "yellowgreen"}}>  Style 2 Vishal Kushwaha </h2>
//                   {/* Modular css  */}

//                   <h3 className={style.success + 'ank'}>  Raj Kushwaha  </h3>
//             </div>
//       )
// }

// export default App ; 


//combining normal css and Modular css 

// import React from 'react';
// import Button from './Button';
// import './globalStyles.css';    // import regular CSS file

// function App() {
//   return (
//     <div>
//       <h1> Hello, world!</h1>

//       <Button label="Click me" />

//     </div>
//   );
// }

// export default App;
//started with bootstrap 

// import React from 'react';
// import { Button } from 'react-bootstrap';
// function App() {
//   return (
//     <div>
//           <Button className='bg-danger' onClick={() => alert("hi world")}> Click Me </Button>
//           <Button variant="primary">Primary</Button>{' '}
//           <Button variant="secondary">Secondary</Button>{' '}
//           <Button variant="success">Success</Button>{' '}
//     </div>
//   );
// }

// export default App;

// map function 


// import './App'
// import './Styles.css'
// function App(){

//       //  const student = ['ankush' , 'vishal' , 'raj' , 'rohan']  ; 

//        const student1 = [
//             { name : 'Ankush' , email : 'ankush@gmail.com'} , 
//             { name : 'Vishal' , email : 'vishal@gmail.com'} , 
//             { name : 'Rohan' , email : 'rohan@gmail.com'}
//        ]
      
//       return(
//           <center> <div className='App'>
//           <table border="1" width="400" height = "200"> 
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Email</th>
//                 </tr>
//                {
//                   student1.map((iter , i) => 
//                      <tr key={i}>
//                          <td >{iter.name}</td>
//                          <td >{iter.email}</td>
//                      </tr>
//                   )
//                }
//                </thead>
//             </table>
//          </div> </center> 
//        )
// }
// export default App ; 


//Practice 

// import './App'

// function App(){

//    const items = [
//       { id: 1, name: 'Item 1' },
//       { id: 2, name: 'Item 2' },
//       { id: 3, name: 'Item 3' }
//     ];

   
//     function ListItem(props) {
//       return <li>{props.name}</li>;
//     }
    
//     function MyList() {
//       return <ul>{listItems}</ul>;
//     }


//     return(
//         <div className='App' >
//              {
//                const listItems = items.map((item) =>
//                   <ListItem key={item.id} name={item.name} />
//                   );
//              }
//         </div>
//     )


    

// }

// export default App ; 


//List  with bootstrap 

// import './App'

// import { Table } from 'react-bootstrap';
// function App(){

//    const student11 = [
//          {name : 'Ankush'  , email : 'ankushkushwaha2828@gmail.com' , contact : 38093} , 
//          {name : 'Vishal'  , email : 'vishalkushwaha2839@gmail.com' , contact  :397973} , 
//          {name : 'Rohan'   , email : 'rohanmourya3880@gmail.com' , contact : 212193} , 
//    ]
//    return(
//        <center><div className='App'>
//              <h1>List with bootstrap</h1>
         
//          <div className='container'>
//               <div className='row' >
//                   <div className='col-12'>
//                   <Table striped bordered hover variant="dark">  
//                      <thead>
//                         <tr>
//                            <th>Name</th>
//                            <th>Email</th>
//                            <th>Contact</th>
//                         </tr>
   
//                         {
//                            student11.map((i , i1) => 

//                             i.name === 'Ankush' ? 
//                               <tr key={i1}>
//                                  <td>{i.name}</td>
//                                  <td>{i.email}</td>
//                                  <td>{i.contact}</td>
//                               </tr>
//                               :null

//                            )
//                         }
//                      </thead>
//                </Table>
//                </div>
//             </div>
//          </div>

//       </div></center>
//    )

// }

// export default App ; 



// import './App'

// import { Table } from 'react-bootstrap';
// function App(){

//    const student11 = [
//          {
//             name : 'Ankush'  , email : 'ankushkushwaha2828@gmail.com' , contact : 38093 , address : [
//             {hn : 12 , city : 'mumbai' , country : 'India'} , 
//             {hn : 23 , city : 'lucknow' , country : 'England'} 
//          ]} , 
//          {
//             name : 'Vishal'  , email : 'vishalkushwaha2839@gmail.com' , contact  :397973  , address : [
//             {hn : 12 , city : 'mumbai' , country : 'India'} , 
//             {hn : 23 , city : 'lucknow' , country : 'England'} 
//          ]} , 
//          {
//             name : 'Rohan'   , email : 'rohanmourya3880@gmail.com' , contact : 212193 , address : [
//             {hn : 12 , city : 'mumbai' , country : 'India'} , 
//             {hn : 23 , city : 'lucknow' , country : 'England'} 
//          ]} , 
//    ]
//    return(
//        <center><div className='App'>
//              <h1>List with bootstrap</h1>
         
         
//                   <Table striped bordered hover variant="dark">  
//                      <thead>
//                         <tr>
//                            <th>Sr.No</th>
//                            <th>Name</th>
//                            <th>Email</th>
//                            <th>Contact</th>
//                            <th>Address</th>

//                         </tr>
   
//                         {
//                            student11.map((i , i1) => 

                          
//                               <tr key={i1}>
//                                   <td>{i1}</td>
//                                  <td>{i.name}</td>
//                                  <td>{i.email}</td>
//                                  <td>{i.contact}</td>

//                                  <td>
//                                     <Table striped  bordered hover variant="dark">  
//                                     <tbody>
//                                     {
//                                         i.address.map((data) => 
//                                             <tr>
//                                                 <td>{data.hn}</td>
//                                                 <td>{data.city}</td>
//                                                 <td>{data.country}</td>
//                                             </tr>
//                                         )
//                                     }
//                                     </tbody>
//                                     </Table>
//                                 </td>
//                               </tr>
                              

//                            )
//                         }
//                      </thead>
//                </Table>
//                </div>
          

//     </center>
//    )

// }

// export default App ; 


//reusable component 


import './App'
import Reusable_Componet from './Reusable_Componet'
function App(){

   return(
      <div className='App'>
            <Reusable_Componet /> 
      </div>
   )

}

export default App ; 