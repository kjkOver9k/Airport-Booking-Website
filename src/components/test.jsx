import React, { useState } from "react";


function Test() {
      const [name, setName] = useState("");
  

      function handleChange(event) {
        console.log(event.target.value);
        setName(event.target.value);
      }

  
  return (

      <center>
      
      <h1>SIGN UP</h1>
        
      <h1>Welcome {name}</h1> 
       
       <h1>LOGO HERE</h1>
      <form action = "">
              <label><h4>Enter username</h4><input type="text" value=""  onChange={handleChange} value={name}></input></label>
              <br></br>
              <label><h4>Enter password</h4><input type="password" id="pass" name="password"
              minlength="8" required></input></label>
              <br></br>
              <label><h4>Re-enter password</h4><input type="password" id="pass" name="reenterpassword"
                  minlength="8" required></input></label>
              <br></br>
              <input type="submit" value="Sign up"></input>
              <br></br>
                <a href = "forgotpassword.html"> Forgot password? </a>
                <br></br>
                <a href = "signin.html"> Already a user? </a>
        </form>
 
      
      </center>
     );
}

export default Test;
