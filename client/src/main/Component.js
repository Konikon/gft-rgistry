//this file lists the giftees from database
  //maps individual giftee and
//along with the gifts given in past

import React from "react";
import GifteeComponent from "./giftees/Component.js"
import {connect} from "react-redux";
import {giftees} from "../redux/actions/";

class GifteesComponent extends React.Component {
  constructor(props){
    super(props);
    this.genList = this.genList.bind(this);
  }

  componentDidMount(){
    this.props.loadGiftee()
  }

  genList(){
    return this.props.giftees.map((giftee, index)=>{
      return(
        <GifteeComponent
            key = {giftee.name + index}
            giftee = {giftee}
            index = {index} />
      )
    })
  }

  render(){
    console.log(this.props);
    return(
        <div>
            {this.genList()}
        </div>
    )
  }

}
const mapStateToProps = (state)=>{
    return {
        giftees: state.giftees
    }
}
export default connect(mapStateToProps, giftees)(GifteesComponent);
