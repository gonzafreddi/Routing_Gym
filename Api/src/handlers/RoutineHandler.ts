import { Request, Response } from 'express'

import { postRoutineController, getRoutineByEmailController, getAllRoutineController } from '../controllers/RoutineController'
    
export const postRoutineHandler = async (req: Request, res: Response): Promise<void> => {
 
    try {
        const {description, objetive, target_time, initial_weight, actual_weight, target_weight, emailPersonalTrainer, emailUser } = req.body
        //if (muscles) {}= req.body
        console.log('RoutineHandler',req.body)
        const response= await postRoutineController(description, objetive, target_time, initial_weight, actual_weight, target_weight, emailPersonalTrainer, emailUser)
        res.status(201).json(response)
    } catch (error) {
        console.error('Error:', error)
        if (error instanceof Error) {
            res.status(400).json({ error: error.message })
        } else {
            // Manejar otros tipos de errores o hacer algo más
            res.status(500).json({ error: 'Error desconocido' })
        }
    }

}
export const getRoutineHandler = async (req: Request, res: Response): Promise<void> => {
    
    try {
        const name: string = req.query.name as string
        const result = name ? await getRoutineByEmailController(name) : await getAllRoutineController()
        res.status(200).json(result)


    } catch (error) {
        console.error('Error:', error)
        if (error instanceof Error) {
            res.status(400).json({ error: error.message })
        } else {
            // Manejar otros tipos de errores o hacer algo más
            res.status(500).json({ error: 'Error desconocido' })
        }
    }}