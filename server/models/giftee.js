const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gifteeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  bdate: {
    type: Date,
    required: true
  },
  relation: String,
  events: [{
    date: Date,
    name: String
  }],
  remindDate: Date,
  // giftIdeas: [{
  //   name: String,
  //   // comments: [{String}],
  //   upvotes: {
  //       type: Number,
  //       default: 0
  //     },
  //   downvotes: {
  //     type: Number,
  //     default: 0
  //   }
  // }]
})


module.exports = mongoose.model("Giftee", gifteeSchema)
