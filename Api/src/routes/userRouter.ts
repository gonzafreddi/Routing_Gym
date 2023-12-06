import { Router } from 'express'
import { getUserHandler, postUserHandler } from '../handlers/UserHandler'
const userRouter = Router()

userRouter.post('/post',postUserHandler )
userRouter.get('/', getUserHandler)


export default userRouter