const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const giftSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  events: [{
    name: String,
        {
        dt: Date,
        required: true
      }
  }],
  
  gifteeSide: {
    comment: String,
    {
      upvote: Number,
      default: 0
    },
    {
    downvote: Number,
    default: 0
    }
  }

})


module.exports = mongoose.model("Gift", giftSchema)
