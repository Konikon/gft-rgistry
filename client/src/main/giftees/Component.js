import React from "react";
import {connect} from "react-redux";
import {giftees} from "../../redux/actions/";
import EditGifteeContainer from "./giftee/edit-giftee/Container";

function GifteeComponent(props){

    return(
        <div className="gifteeList">
            <h2>Name : {props.giftee.name} </h2>
            <h4> B_date : {props.giftee.bdate} </h4>
            <h4> Relation: {props.giftee.relation} </h4>
            <h4> Gift Ideas: {props.giftee.giftIdeas} </h4>
            <h4> Remind me on: {props.giftee.remindDate} </h4>
            <EditGifteeContainer giftee={props.giftee}/>
            <hr/>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        giftees: state.giftees
    }
}

export default connect(mapStateToProps, giftees)(GifteeComponent);
