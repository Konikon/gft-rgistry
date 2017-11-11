import axios from "axios";
const gifteesUrl = "http://localhost:5000/giftees/";

export function loadGiftee(){
    return (dispatch)=>{
      axios.get(gifteesUrl).then((response)=>{
        dispatch({
          type: "LOAD_GIFTEE",
          giftees: response.data.reverse()
        })
      }).catch((loadGifteeError)=>{
        console.log(loadGifteeError);
      })
    }
}

export function addGiftee(giftee){
    return (dispatch)=>{
      axios.post(gifteesUrl, giftee).then((response)=>{
          dispatch({
            type: "ADD_GIFTEE",
            issue:response.data
          })
      }).catch((addGifteeError)=>{
        console.log(addGifteeError);
      })
  }
}

export function editGiftee(id, editedGiftee) {
  return (dispatch) => {
    axios.put(gifteesUrl + id, editedGiftee).then((response)=>{
      dispatch({
        type: "EDIT_GIFTEE",
        id,
        editedGiftee: response.data
      })
    }).catch((editGifteeError)=>{
        console.log(editGifteeError);
      })
    }
  }

export function deleteGiftee(id){
  return (dispatch)=>{
    axios.delete(gifteesUrl + id).then((response)=>{
      dispatch({
        type: "DELETE_GIFTEE",
        id})
      }).catch((err)=>{
        console.log(err);
      })
    }
  }
