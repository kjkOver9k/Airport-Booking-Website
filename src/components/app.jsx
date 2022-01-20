import React, { useState } from "react";
import Test from "./test";

function App() {
  
  const [name, setName] = useState("");
  

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }
  return (
    <center>
      <div>
        
        
     <Test>

     </Test>
     </div>    
     
     </center>
  );
}

export default App;