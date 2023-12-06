import { Request, Response} from 'express'
import { postPTrainer, getAllTrainers} from '../controllers/PtrainerControler'
import { PTrainerInterface } from '../utils/interfaces'


export const postPTrainerHandler = async (req:Request, res: Response)=>{
    const ptrainer:PTrainerInterface = req.body 
    try {
        const response = await postPTrainer(ptrainer)
        res.status(200).send(response)
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error')
    }
}
export const getPTrainer= async(_req:Request, res:Response):Promise<void>=>{
    try {
        const trainers = await getAllTrainers()
        res.status(201).send(trainers)
    } catch (error) {
        res.status(500).send(error)
    }
}

