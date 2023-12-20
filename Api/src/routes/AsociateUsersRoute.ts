import { Router } from 'express'
import { asociateUsersHandler } from '../handlers/AsociateUsersHandler'
const asociateRouter = Router()


asociateRouter.put('/:userEmail/:trainerEmail', asociateUsersHandler) 

export default asociateRouter