import { PersonalTrainer } from '../db'
import { PTrainerInterface } from '../utils/interfaces'
import { getUserByEmail } from './UserController'



export const postPTrainer = async(Ptrainer:PTrainerInterface)=>{
    try {
        const { email, name, password ,photo, description, gender, age, certificates } = Ptrainer

        const findPtrainer = await getUserByEmail(email)
        if (findPtrainer) {
            return 'This user already exists'

        }
        const newPTrainer = await PersonalTrainer.findOrCreate({
            where: {email},
            defaults:{
                name, 
                password,
                photo, 
                description, 
                gender, 
                age,
                certificates 
            }
        })
        console.log(newPTrainer)
        return newPTrainer
    } catch (error) {
        if (error instanceof Error) {
            return error.message
        } else {
            return 'Internal Server Error'
        }
    }
}
export const getAllTrainers = async()=>{
    try {
        const users = await PersonalTrainer.findAll()
        console.log(users)
        return users
    } catch (error) {
        console.log(error)
    }
}
