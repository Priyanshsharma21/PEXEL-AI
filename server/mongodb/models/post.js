import mongoose from 'mongoose'

const { Schema, model } = mongoose;

const PostSchema = new Schema({
    name : {
        type : String,
        required : true,
    },

    prompt : {
        type : String,
        required : true,
    },

    photo : {
        type : String,
        required : true,
    }
});

const Post = model('Post', PostSchema);

export default Post;