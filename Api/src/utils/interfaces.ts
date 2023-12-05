
export interface UserInterface {
    id?: string;
    name:string, 
    password:string
    email:string,
    photo?:string,  
    description?:string, 
    gender:'women' | 'man', 
    age:number, 
    height:number,
    personalTrainerId?: string | null;
}

export interface PTrainerInterface extends Omit<UserInterface, 'height'> {
    certificates: string[]
}