import React from "react";
import {connect} from "react-redux";
import {giftees} from "../../redux/actions/"

import GifteeFormComponent from "./Component";

class GifteeFormContainer extends React.Component{
  constructor() {
    super();
    this.state = {
      addGiftee: {
        name: "",
        bdate: "",
        relation: "",
        events: "",
        remindDate: ""
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.addNewGiftee = this.addNewGiftee.bind(this);
  }

  handleChange(e){
      e.persist();
      this.setState((prevState)=>{
        return{
          addGiftee: {
            ...prevState.addIssue,
            [e.target.name]: e.target.value
          }
        }
      })
    };

  addNewGiftee(e){
    console.log(e);
      e.preventDefault();
      this.props.addGiftee(this.state.addGiftee)
      this.setState({
        addGiftee: {
          name: "",
          bdate: "",
          relation: "",
          events: "",
          remindDate: ""
        }
      })
    }

  render(){
    return(
      <div>
          <GifteeFormComponent newGiftee = {this.state.addGiftee}
                            addNewGiftee={this.addNewGiftee}
                            handleChange={this.handleChange}
                            />

      </div>
    )
  }

}


export default connect(null, giftees)(GifteeFormContainer);
