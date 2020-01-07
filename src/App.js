import React, { Component } from "react";
import Idcard from "./components/Idcard";
import Form from "./components/Form";

class App extends Component {

    state = {

        username:"",
        email: ""
    }


    render () {
        return (
            <>
            <Form />
            <Idcard />
            </>

        )
    }      
}


export default App;
