
import { Muscle } from '../db'


export const postMuscleController= async(name:string, image:string, description:string)=>{
    try {
        const newMuscle = await Muscle.findOrCreate({
            where: {
                name: name
            },
            defaults : {
                name, 
                description, 
                image
            }
        })
        return `muscle creado con exito ${newMuscle}`
    } catch (error) {
        if( error instanceof Error){
            return error.message
        }else{
            'Error in the postMuscleController'
        }
    }
}

export const getMuscleByName = async(name:string)=>{
    try {
        const response = await Muscle.findOne({where:{
            name: name
        }})
        return response
    } catch (error) {
        if(error instanceof Error){
            return error.message
        }else{
            'Error on search muscle by name'
        }
    }
}

export const getAllMuscle = async ()=> await Muscle.findAll()