let defaultGiftees = []
export const giftees = function(prevGiftees = defaultGiftees, action){
  let newGiftees = [...prevGiftees]
    switch(action.type){
      case "LOAD_GIFTEE":
          return action.giftees;

      case "ADD_GIFTEE":
          newGiftees.unshift(action.giftee)
          return newGiftees;

      case "EDIT_GIFTEE":
        return newGiftees.map((giftee)=>{
          if(action.id === giftee._id){
            return action.editedGiftee;
          } else {
              return giftee;
          }
        });

      case "DELETE_GIFTEE":
        return newGiftees.filter((giftee)=>{
          return action.id !== giftee._id;
        });

      default:
      return prevGiftees;
  }
}
