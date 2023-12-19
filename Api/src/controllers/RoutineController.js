import { Routine} from '../db'
import { Op } from 'sequelize'
import { getIdTrainerByEmail } from './PtrainerControler'
import { getIdByEmail } from './UserController'


export const postRoutineController = async (name, description, objetive, target_time, initial_weight, actual_weight, target_weight, emailPersonalTrainer, emailUser) => {
    try {
        //console.log('Entre a RoutineController')
        const PersonalTrainerId = await getIdTrainerByEmail(emailPersonalTrainer)
        //console.log('idPersonalTrainer', PersonalTrainerId)
        const UserId = await getIdByEmail(emailUser)
        //console.log('idUser', UserId)
        const newRoutine = await Routine.create({ name, description, objetive, target_time, initial_weight, actual_weight, target_weight, PersonalTrainerId, UserId})
       
        return newRoutine
    } catch (error) {
        console.log('error en el controlador ' , error)
        return `error in the controller ${error.message}`
    }    
    

}


export const getRoutineByNameController = async(name) => {
    
    const result = await Routine.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            },
        },
       
    })
    return result
    
}

export const getAllRoutineController = async()=> {

    const result = await Routine.findAll()
    return result

}