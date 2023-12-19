import { Request, Response } from 'express'
import { postDayModuleController, getDayModuleByEmailController, getAllDayModuleController } from '../controllers/DayModuleController'
    
export const postDayModuleHandler = async (req: Request, res: Response): Promise<void> => {
 
    try {
        const {name, date} = req.body
        
        console.log('DayModuleHandler',req.body)
        const response= await postDayModuleController(name,date)
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
export const getDayModuleHandler = async (req: Request, res: Response): Promise<void> => {
    
    try {
        const name: string = req.query.name as string
        const result = name ? await getDayModuleByEmailController(name) : await getAllDayModuleController()
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