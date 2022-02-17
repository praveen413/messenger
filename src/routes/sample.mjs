import express from 'express'
import { Sample,PostMsg,ShowPost } from '../controller/samplecontroller.mjs'

const router = express.Router()

router.route('/').get(Sample)
router.route('/post/').post(PostMsg)
router.route('/show/').get(ShowPost)

export default router
