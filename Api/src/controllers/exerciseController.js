import { Exercise} from '../db'
import { Op } from 'sequelize'
import { getMuscleByName } from './MuscleCotrollers'

export const postExerciseController = async (name, image, description, muscles) => {
    try {
        if (muscles) {
            const newExercise = await Exercise.create({ name, image, description })
            await muscles.forEach(async element => {
                let muscleName = await getMuscleByName(element)
                await newExercise.addMuscle(muscleName)
            })
            return 'Exercise created succesfully'
        }else{
            return 'must add at least one muscle'
        }
    } catch (error) {
        return error.message
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

export const getAllExerciseController = async ()=> await Exercise.findAll()
