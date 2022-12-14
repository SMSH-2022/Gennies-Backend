var mongoose = require('mongoose');

// schema
var postSchema = mongoose.Schema({
  gen:{type:String},
  title:{type:String, required:[true,'Title is required!']},
  // hashtag:{type:String, required:[true,'Body is required!']},
  hashtag:{type:Array},
  body:{type:String, required:[true,'Body is required!']},
  author:{type:mongoose.Schema.Types.ObjectId, ref:'user', required:true},
  createdAt:{type:Date, default:Date.now},
  updatedAt:{type:Date},
});

// model & export
var Post = mongoose.model('post', postSchema);
module.exports = Post;
