
import { Sequelize } from 'sequelize'
import defineUser from './models/User'
import definePersonalTrainer from './models/PersonalTrainer'
import defineRoutine from './models/Routine'
import defineWeek from './models/Week'
import { defineMuscle } from './models/Muscle'
import defineExercise from './models/Exersice'
import defineDayModule from './models/DayModule'
export const sequelize = new Sequelize(
    'postgresql://postgres:Cb1AF6b25B45-faG3EAd1666E-6BCCcC@monorail.proxy.rlwy.net:34963/railway',
    {
        logging: false, // set to console.log to see the raw SQL queries
        native: false // lets Sequelize know we can use pg-native for ~30% more speed
    }
)
export const User =defineUser(sequelize)
export const PersonalTrainer = definePersonalTrainer(sequelize)
defineRoutine(sequelize)
defineWeek(sequelize)
defineMuscle(sequelize)
defineExercise(sequelize)
defineDayModule(sequelize)

export const {
    Routine,
    Week,
    Muscle,
    Exercise,
    DayModule
} = sequelize.models


export const conn = sequelize
const verifyConnection = async () => {
    try {
        await sequelize.authenticate()
        console.log('exit in the connection on sequelize')
    } catch (error) {
        console.log(error)
    }
}
verifyConnection()

PersonalTrainer.hasMany(User)
User.belongsTo(PersonalTrainer)


PersonalTrainer.hasMany(Routine)
Routine.belongsTo(PersonalTrainer)

User.hasMany(Routine)
Routine.belongsTo(User)


Routine.hasMany(DayModule)
DayModule.belongsTo(Routine)

// Routine.hasMany(Week)
// Week.belongsTo(Routine)

// Week.hasMany(DayModule)
// DayModule.belongsTo(Week)

DayModule.belongsToMany(Exercise, { through: 'Day_Exersice' })
Exercise.belongsToMany(DayModule, { through: 'Day_Exersice' })

Muscle.belongsToMany(Exercise, { through: 'Muscle_Exercise' })
Exercise.belongsToMany(Muscle, { through: 'Muscle_Exercise' })
