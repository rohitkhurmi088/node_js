const mongoose = require('mongoose');

//:::: Creating a model for Post ::::
/* Post is going to refer to user --> linked to --> user Schema using mongoose.Schema.Types.ObjectId
One user can create multiple post  (1:m) relation
One post cant be related to multipe users */

//creating schema
const postSchema = new mongoose.Schema({
    content:{
        type:String,
        required: true //content must be in a post
    },   
    user:{
        //post linked to user(userSchema)
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' //refering to User (Model)-->Schema
    },
},{
    timestamps:true,
});


//creating model
const Post = mongoose.model('Post', postSchema);

//Exporting Schema
module.exports = Post;


