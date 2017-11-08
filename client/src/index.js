import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux";
import {BrowserRouter as Router} from "react-router-dom";

import App from "./main/App";
import reducer from "./redux/reducers"
import "./index.css"

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(()=>{
  console.log(store.getState());
})

ReactDOM.render(<Router><Provider store={store}><App/></Provider></Router>, document.getElementById('root'));
