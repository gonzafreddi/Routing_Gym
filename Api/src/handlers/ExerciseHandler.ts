import { Request, Response } from 'express'

import { postExerciseController, getExerciseByNameController, getAllExerciseController } from '../controllers/exerciseController'
    
export const postExrciseHandler = async (req: Request, res: Response): Promise<void> => {
 
    try {
        const {name, image, description, muscles}= req.body
        console.log('ExerciseHandler',req.body)
        const response= await postExerciseController(name, image, description, muscles)
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
export const getExerciseHandler = async (req: Request, res: Response): Promise<void> => {
    
    try {
        const name: string = req.query.name as string
        const result = name ? await getExerciseByNameController(name) : await getAllExerciseController()
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