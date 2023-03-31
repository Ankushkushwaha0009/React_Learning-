function Student(st){

    console.log(st) ; 
    return (
        <div style={{backgroundColor: "limegreen"}}>
            <h1> Name is   : {st.name}</h1>
            <h2> Email is  : {st.email}</h2>
        </div>
    )
}
export default Student ; 

