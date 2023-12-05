import { Request, Response} from 'express'
import { getIdByEmail} from '../controllers/UserController'
import { AsociateUsersControllers } from '../controllers/AsociateUserController'
import { getIdTrainerByEmail } from '../controllers/PtrainerControler'
export const asociateUsersHandler = async(req:Request, res:Response)=>{

    try {
        const userEmail:string = req.params.userEmail as string
        const trainerEmail:string = req.params.trainerEmail as string
        console.log(userEmail,trainerEmail)
    
        if(!userEmail || !trainerEmail){
            res.status(400).send('please require email')
            return
        }
        const userId  = await getIdByEmail(userEmail) 
        const trainerId = await getIdTrainerByEmail(trainerEmail) 
        console.log({
            'userId': userId,
            'trainerId': trainerId
        })
        if(userId && trainerId){
            const response = await AsociateUsersControllers(userId, trainerId)
            return res.status(200).send(response)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}