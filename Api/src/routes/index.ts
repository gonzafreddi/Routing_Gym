import express,  { Router} from 'express'
import userRouter from './userRouter'
import Ptrainer from './Ptrainer'
import asociateRouter from './AsociateUsersRoute'
import  exerciseRouter  from './exerciseRoute'
import muscleRouter from './muscleRoute'
import routineRouter from './routineRouter'
import dayModuleRouter  from './dayModuleRouter'
const router = Router()

// Asociar el controlador con el verbo HTTP específico (GET en este caso)
router.use('/user', userRouter)
router.use('/personalTrainer', Ptrainer)
router.use('/asociate', asociateRouter)
router.use('/exercise', exerciseRouter)
router.use('/muscle', muscleRouter)
router.use('/Routine',routineRouter)
router.use('/dayModule', dayModuleRouter)
router.use(express.json)

export { router }
