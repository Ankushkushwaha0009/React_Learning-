import React  , {Component} from "react";

export default class Render11 extends Component{


    render(){

        console.log("Render Method" , this.props) ; 
        return(
            <div>
                <h1>User Component</h1>
            </div>
        )
    }
}


