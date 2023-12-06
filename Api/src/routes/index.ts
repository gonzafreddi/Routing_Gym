import express,  { Router} from 'express'
import userRouter from './userRouter'
import Ptrainer from './Ptrainer'
import asociateRouter from './AsociateUsersRoute'
const router = Router()

// Asociar el controlador con el verbo HTTP específico (GET en este caso)
router.use('/user', userRouter)
router.use('/personalTrainer', Ptrainer)
router.use('/asociate', asociateRouter)

router.use(express.json)

export { router }
