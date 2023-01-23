import Post from '../mongodb/models/post.js'
import { v2 as cloudinary } from 'cloudinary'

import * as dotenv from 'dotenv'
dotenv.config()


cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET,
})


export const postConfirmationController = (req,res)=>{
    res.send("Hello Post Route")
}

// GET ALL POST 
export const getAllPost = async(req,res)=>{
    try {
        const posts = await Post.find({});

        res.status(200).json({data : posts, success: true})
    } catch (error) {
        res.status(500).json({data : error,success: false})
    }
}



// CREATE A POST
export const createPost = async(req,res)=>{
    try {
        const { name, prompt, photo } = req.body;
        const photoUrl = await cloudinary.uploader.upload(photo);

        console.log({name,prompt, photoUrl})
    
        const newPost = await Post.create({
          name,
          prompt,
          photo: photoUrl.url,
        });
    
        res.status(200).json({ success: true, data: newPost });
      } catch (err) {
        res.status(500).json({ success: false, message: 'Unable to create a post, please try again' });
      }
}
