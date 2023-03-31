import { Component } from "react";
export default class Cycle extends Component {

  
    render() {
        console.log("render method" , this.props) ; 
        return (
            <center> <div>
                
                <h1> Cycle comonent </h1>

            </div> </center>

        )
    }
}


