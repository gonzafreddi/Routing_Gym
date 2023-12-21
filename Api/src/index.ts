import express, { Request, Response, NextFunction } from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { router } from './routes'
import { conn } from './db'

 interface CustomError extends Error {
  status?: number // defino status en error por defecto no viene
}

export const server = express()
server.use(express.json())



server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
server.use(bodyParser.json({ limit: '50mb' }))
server.use(cookieParser())
server.use(morgan('dev'))
server.use(cors()) 
server.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    next()
})

server.use('/', router)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
server.use((err: CustomError, _req: Request, res: Response, _next: NextFunction): void => {
    const status = err.status ?? 500
    const message = err.message !== '' ? err.message : 'Internal Server Error'
    console.error(err)
    res.status(status).send(message)
})

conn.sync({ force: true }).then(() => {
    server.listen(3001, () => {
        console.log('Port listening at', 3001)
    })
})
    .catch(error => {
        console.log(error)
    })
