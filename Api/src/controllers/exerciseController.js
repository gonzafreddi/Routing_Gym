import { Exercise, Muscle} from '../db'
import { Op } from 'sequelize'
import { getMuscleByName } from './MuscleCotrollers'

export const postExerciseController = async (name, image, description, muscles) => {
    try {
        
        if (muscles) {
            const newExercise = await Exercise.create({ name, image, description })
            const muscleAdds = await muscles.forEach(async element => {
                let muscleName = await getMuscleByName(element)
                await newExercise.addMuscle(muscleName)
                console.log('log de los musculos names ', muscleName)
            })
            console.log('log de los musculos',muscleAdds)
            return newExercise
        }
        
    } catch (error) {
        console.log('error en el controlador ' , error)
        return `error in the controller ${error.message}`
    }    
    

}


export const getExerciseByNameController = async(name) => {
    
    const result = await Exercise.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            },
        },
       
    })
    return result
    
}

export const getAllExerciseController = async()=> {

    const result = await Exercise.findAll()
    return result

}