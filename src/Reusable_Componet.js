import User_Reusable from "./User_Reusable";
// import './Styles.css'
function Reusabale_Componet(){


       const users = [

           {name : 'Ankush' , email : 'ankush@gmail.com' , contact : 279733} , 
           {name : 'Vishal' , email : 'vishal@gmail.com' , contact : 883808} , 
           {name : 'Rohan'  , email : 'rohan@gmail.com'  , contact : 723923} , 
        
        ]
        return(
                  <center><div className="APP">
                        {
                            users.map((item , i ) => 
                                <User_Reusable data = {item} />
                            )
                        }
                  </div></center>
                 
       )

}
export default Reusabale_Componet ; 

