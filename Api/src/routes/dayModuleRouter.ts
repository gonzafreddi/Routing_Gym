import { Router } from 'express'
import { postDayModuleHandler } from '../handlers/DayModuleHandler'

const dayModuleRouter = Router()

dayModuleRouter.post('/create', postDayModuleHandler)

export default dayModuleRouter