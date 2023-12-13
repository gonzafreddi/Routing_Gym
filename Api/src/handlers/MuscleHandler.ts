import { Request, Response} from 'express'
import { getAllMuscle, postMuscleController } from '../controllers/MuscleCotrollers'

export const postMuscleHandler =async (req:Request, res: Response) => {
    try {
        const {name, image, description} = req.body
        const response = postMuscleController(name, image, description)
        res.status(200).send(response)
    } catch (error) {
        res.status(500).send(error)
    }    
}

export const getAllMuscleHandler = async(_req:Request, res:Response)=>{
    try {
        const response = await getAllMuscle()
        res.status(200).send(response)
    } catch (error) {
        res.status(500).send(error)
    }
}