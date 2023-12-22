import { DayModule } from '../db'
import { Op } from 'sequelize'
import { getIdByNameRoutine } from './RoutineController'
import { getIdByNameExercise } from './exerciseController'
//import { getIdTrainerByEmail } from './PtrainerControler'
//import { getIdByEmail } from './UserController'



export const postDayModuleController = async (name,date,nameRoutine,nameExercise,series,repetitons,breakTime) => {
    try {
        console.log('nameRoutine', nameRoutine)
        const RoutineId= await getIdByNameRoutine(nameRoutine)
        console.log('idRoutine', RoutineId)
        const ExerciseId= await getIdByNameExercise(nameExercise)
        const newDayModule = await DayModule.create({ name, date,RoutineId})
        //await newDayModule.addExercise(ExerciseId,series,repetitons,breakTime)
        await newDayModule.addExercise(ExerciseId, {
            through: { series, repetitons, breakTime },
        })
        return newDayModule
    } catch (error) {
        console.log('error en el controlador ' , error)
        return `error in the controller ${error.message}`
    }    

}


export const getDayModuleByNameController = async(name) => {
    
    const result = await DayModule.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            },
        },
       
    })
    return result
    
}

export const getAllDayModuleController = async()=> {

    const result = await DayModule.findAll()
    return result

}
