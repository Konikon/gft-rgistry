import React from "react";

function GifteeFormComponent(props){

  return(
    <div className="bodybg">
        <h1> Add new person/giftee to the list </h1>
        <h3> Giftee </h3> <p> name, relation and b_day </p>
          <div >
            <form onSubmit={props.addNewGiftee}>
                <input type="text"
                      name= "name"
                      placeholder="Add name"
                      value={props.newGiftee.name}
                      onChange={props.handleChange}/>

                <input type="text"
                      name= "relation"
                      placeholder="relation"
                      value={props.newGiftee.relation}
                      onChange={props.handleChange}/>

                <input type="date"
                      name= "bdate"
                      placeholder="Add birthdate/event date"
                      value={props.newGiftee.bdate}
                      onChange={props.handleChange}/>
                      <button type="submit"> Add Giftee </button>

                <p>Enter events to add for this person</p>
                <input type="checkbox"
                        name="e1" />
                <input type="text"
                        name="e1"
                        placeholder="event name"/>
                <input type="date"
                      name= "date"
                      placeholder="remind date"
                      value={props.newGiftee.remindDate}
                      onChange={props.handleChange}/>
                <br/>
                <input type="checkbox"
                        name="e2"/>
                <input type="text"
                        name="e2"
                        placeholder="event name"/>
                <input type="date"
                      name= "date"
                      placeholder="remind date"
                      value={props.newGiftee.remindDate}
                      onChange={props.handleChange}/>

                <h4>Remind me on </h4>
                <input type="date"
                      name= "date"
                      placeholder="remind date"
                      value={props.newGiftee.remindDate}
                      onChange={props.handleChange}/>

            </form>
            <hr/>
            <hr/>
          </div>

    </div>
  )
}

export default GifteeFormComponent;
