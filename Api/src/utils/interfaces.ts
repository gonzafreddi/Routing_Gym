import { gender } from './types'
export interface UserInterface {
    name:string, 
    email:string,
    photo?:string, 
    description?:string, 
    gender:gender, 
    age:number, 
    height:number
}
