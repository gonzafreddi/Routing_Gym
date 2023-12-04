import { Router } from 'express'

const asociateRouter = Router()

asociateRouter.post('/:userId/:trainerId')

export default asociateRouter