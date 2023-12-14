import { Router } from 'express'
import { postRoutineHandler } from '../handlers/RoutineHandler'

const routineRouter = Router()

routineRouter.post('/create', postRoutineHandler)

export default routineRouter