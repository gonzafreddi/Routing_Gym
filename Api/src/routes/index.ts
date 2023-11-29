import express,  { Router} from 'express'
import userRouter from './userRouter'

const router = Router()

// Asociar el controlador con el verbo HTTP específico (GET en este caso)
router.use('/user', userRouter)

router.use(express.json)

export { router }
