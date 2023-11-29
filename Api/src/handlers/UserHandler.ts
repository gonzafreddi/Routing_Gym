import { Request, Response } from 'express'
import { postUser } from '../controllers/UserController'
import { UserInterface } from '../utils/interfaces'
export const getUserHandler = async (_req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).send('hola ando')
    } catch (error) {
        console.error('Error:', error)
        res.status(500).send('Internal Server Error')
    }
}

export const postUserHandler=async(req:Request, res:Response): Promise<void>=>{
    const user:UserInterface = req.body
    try {
        const response = await postUser(user)
        res.status(201).send(response)
    } catch (error) {
        console.log(error)
    }
} 