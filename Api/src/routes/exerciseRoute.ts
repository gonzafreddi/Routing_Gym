import { Router } from 'express'
import { postExrciseHandler } from '../handlers/ExerciseHandler'
const exerciseRouter = Router()

exerciseRouter.post('/create', postExrciseHandler)

export default exerciseRouter