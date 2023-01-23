import express from 'express'
import { getAIImages } from '../controllers/lexiaControllers.js'

const router = express.Router()


router.get('/:qId', getAIImages)



export default router
