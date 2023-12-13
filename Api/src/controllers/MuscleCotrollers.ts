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
        console.log(error)
    }
}

export const getMuscleByName = async(name:string)=>{
    try {
        console.log(name, 'soy el log del get muscle')
        const response = await Muscle.findOne({where:{
            name: name
        }})
        console.log(response, 'esta es la response del musculo')
        return response
    } catch (error) {
        console.log(`error al buscar el musculo ${error}`)
    }
}

export const getAllMuscle = async ()=> await Muscle.findAll()