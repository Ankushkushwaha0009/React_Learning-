import React ,  {Component}  from 'react' ;

 class Student22 extends Component {

       render(){

        console.log(this.props)
        return(
            
            <div style={ {backgroundColor  : 'aqua' }} >
                
                <h1>Hi {this.props.name} </h1>
                <h2>Your email is : {this.props.email}</h2>
            </div>
        )
      }
}

export default Student22 ; 