import { Router } from 'express'
import { postPTrainerHandler, getPTrainer } from '../handlers/PtrainerHandler'
const userRouter = Router()

userRouter.post('/post',postPTrainerHandler )
userRouter.get('/', getPTrainer)



export default userRouter