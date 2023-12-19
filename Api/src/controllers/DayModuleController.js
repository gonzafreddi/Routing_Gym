import { DayModule } from '../db'
import { Op } from 'sequelize'
//import { getIdTrainerByEmail } from './PtrainerControler'
//import { getIdByEmail } from './UserController'


export const postDayModuleController = async (name,date) => {
    try {
        console.log('Entre a DayModuleController')
        const newDayModule = await DayModule.create({ name, date})
       
        return newDayModule
    } catch (error) {
        console.log('error en el controlador ' , error)
        return `error in the controller ${error.message}`
    }    
    

}


export const getDayModuleByEmailController = async(name) => {
    
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