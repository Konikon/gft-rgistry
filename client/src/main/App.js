import React from "react";
import {Switch, Route} from "react-router-dom";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Home from "./Home";
import GifteesComponent from "./Component";


function App(){
    return(
        <div >
            <Header />
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={Body} />
            <Route path="/see" component={GifteesComponent}/>
            </Switch >
            <Footer />
        </div>
    )
}

export default App;
