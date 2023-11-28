import express, { Router, Request, Response } from 'express'
import { getUserHandler } from '../handlers/UserHandler'

export const router = Router()

// Asociar el controlador con el verbo HTTP específico (GET en este caso)
router.get('/user', (req: Request, res: Response) => {
  getUserHandler(req, res)
    .then(() => {
      // La promesa se resolvió correctamente (puede que no necesites hacer nada aquí)
    })
    .catch((error) => {
      // Manejar errores aquí
      console.error('Error:', error)
      res.status(500).send('Internal Server Error')
    })
})

router.use(express.json())
