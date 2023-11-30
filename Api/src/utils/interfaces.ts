
export interface UserInterface {
    name:string, 
    password:string
    email:string,
    photo?:string,  
    description?:string, 
    gender:'women' | 'man', 
    age:number, 
    height:number
}

export interface PTrainerInterface extends Omit<UserInterface, 'height'> {
    certificates: string[]
}