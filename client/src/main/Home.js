import React from "react";

import { FormGroup, Button } from "react-bootstrap";


function Home(){
    return(
        <div className = "wholebg">
          <br/>
          <br/>
          <h1>
          gft rgstr
          </h1>
          <br/>
          <br/>
          <br/>


          <h3>Login / Sign in </h3>
          <FormGroup>
              <form >
                  <h4>email</h4>
                  <input type="email"
                        name= "name"
                        placeholder="email"/>
                  <h4>Username</h4>
                  <input type="text"
                          name= "name"
                          placeholder="username"/>
                  <h4>password</h4>
                  <input type="password"
                    name= "psw"/>
                  <Button> Submit </Button>
              </form>
          </FormGroup>
        </div>
    )
}

export default Home;
