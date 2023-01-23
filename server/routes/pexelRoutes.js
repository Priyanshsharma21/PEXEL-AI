import express from 'express'
import { pexelConfirmationController,postOpenAiResponse } from '../controllers/pexelControllers.js'

const router = express.Router()

router.get('/',pexelConfirmationController);
router.post('/', postOpenAiResponse)


export default router