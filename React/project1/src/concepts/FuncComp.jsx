import React from "react"; //import react package
//create a js function which returns jsx
//nameof function= filename
//export func and import in app.jsx
function FuncComp(props){
    console.log(props);
    return(
        <div>
            <h1>I am a functional component.</h1>
            <h2>Hello my name is {props.data.name} and age is {props.data.age}.</h2>
        </div>
    );
}

export default FuncComp;