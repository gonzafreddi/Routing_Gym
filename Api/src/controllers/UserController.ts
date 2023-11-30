import {User} from '../db'
import { UserInterface } from '../utils/interfaces'


export const getUserByEmail=async(email:string)=>{
    const findUser = await User.findOne({
        where:{
            email: email
        }
    })
    return findUser
}


export const getAllUser = async()=>{
    try {
        const users = await User.findAll()
        return users
    } catch (error) {
        console.log(error)
    }
}


export const postUser = async function(user:UserInterface){
    try {
        const { email, name, password ,photo, description, gender, age, height } = user

        const findUser = await getUserByEmail(email)
        console.log(findUser)
        if(findUser){
            return 'This user already exists'
        }
        const newUser = await User.findOrCreate({
            where:{email},
            defaults:{
                name, 
                password,
                photo, 
                description, 
                gender, 
                age, 
                height
            }
        })
        return newUser
    } catch (error) {
        if (error instanceof Error) {
            return error.message
        } else {
            return 'Internal Server Error'
        }
    }
}   

