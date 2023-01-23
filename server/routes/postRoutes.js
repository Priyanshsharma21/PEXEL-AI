import express from 'express'
import { getAllPost,createPost } from '../controllers/postControllers.js'

const router = express.Router()


router.get('/', getAllPost)
router.post('/', createPost)



export default router
