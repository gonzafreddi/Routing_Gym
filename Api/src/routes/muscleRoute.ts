import { Router } from 'express'
import { postMuscleHandler, getAllMuscleHandler } from  '../handlers/MuscleHandler'

const muscleRouter = Router()

muscleRouter.post('/create', postMuscleHandler)
muscleRouter.get('/', getAllMuscleHandler)

export default muscleRouter