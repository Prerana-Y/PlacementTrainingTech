import React, { useState } from 'react'

function ToggleState() {
    const [name1, setName1] = useState("Aishu");
    const [name2, setName2] = useState("Maaza");
    const [toggle, setToggle] = useState(true);

    function handleClick(){
        setToggle(!toggle);
    }

    return(
       <div>
        {toggle ? (<div>
            <h1>Hi this is {name1}.</h1>
       </div>
    ) : (
        <div>
            <h1>Hi this is {name2}.</h1>
        </div>
    )}
    <button onClick={handleClick}>Change Name</button>
    </div>
    );
}
export default ToggleState;


    // if (toggle){
    //     return(
    //          <div>
    //             <h1>Hello this is {name1}.</h1>
    //             <button onClick={handleClick}>Change Name</button>
    //     </div>
    // );
    // }
    // else{
    //     return(
    //     <div>
    //         <h1>Hello this is {name2}.</h1>
    //         <button onClick={handleClick}>Change Name</button>
    //     </div>
    //     );
    // }


