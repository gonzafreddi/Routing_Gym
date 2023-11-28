import { Request, Response } from 'express'

export const getUserHandler = async (_req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).send('hola ando')
    } catch (error) {
        console.error('Error:', error)
        res.status(500).send('Internal Server Error')
    }
}
