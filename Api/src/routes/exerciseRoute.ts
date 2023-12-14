import { Router } from 'express'
import { postExrciseHandler } from '../handlers/ExerciseHandler'
const exerciseRouter = Router()
//console.log('Estoy en postExerciseHandler')
exerciseRouter.post('/create', postExrciseHandler)

export default exerciseRouter