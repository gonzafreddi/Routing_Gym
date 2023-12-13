import { Exercise, Muscle} from '../db'
import { Op } from 'sequelize'
import { getMuscleByName } from './MuscleCotrollers'

export const postExerciseController = async (name, image, description, muscles) => {
    try {
        const newExercise = await Exercise.create({ name, image, description })
        if (muscles) {
            console.log('entrp en el if')
            const muscleInstances = await getMuscleByName(muscles)
            console.log(muscleInstances)
            await newExercise.addMuscle(muscleInstances)    
        }
        return newExercise
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