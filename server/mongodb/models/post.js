import mongoose from "mongoose";


const Post = mongoose.Schema({
    name: {type:String, required: true},
    prompt: {type:String, required: true},
    photo: {type:String, required: true},
});
const Postschema = mongoose.model('Post', Post)


export default Postschema;