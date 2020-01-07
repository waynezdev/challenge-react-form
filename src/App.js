import React, { Component } from "react";
import Idcard from "./components/Idcard";

class App extends Component {
    render () {
        return (
            <>
            <div>
                <h3>Username</h3>
                <input type="textfield"  />
            </div>

            <div>
                <h3>Email</h3>
                <input type="textfield"  />
            </div>

            <Idcard />
            </>

        )
    }      
}


export default App;
