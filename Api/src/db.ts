
import { Sequelize } from 'sequelize'
import defineUser from './models/User'
import definePersonalTrainer from './models/PersonalTrainer'
import defineRoutine from './models/Routine'
import defineWeek from './models/Week'
import defineMuscle from './models/Muscle'
import defineExercise from './models/Exersice'
import defineDayModule from './models/DayModule'
const database = new Sequelize(
    'postgresql://postgres:Cb1AF6b25B45-faG3EAd1666E-6BCCcC@monorail.proxy.rlwy.net:34963/railway',
    {
        logging: false, // set to console.log to see the raw SQL queries
        native: false // lets Sequelize know we can use pg-native for ~30% more speed
    }
)
export const User =defineUser(database)
export const PersonalTrainer = definePersonalTrainer(database)
defineRoutine(database)
defineWeek(database)
defineMuscle(database)
defineExercise(database)
defineDayModule(database)

export const {
    Routine,
    Week,
    Muscle,
    Exercise,
    DayModule
} = database.models


export const conn = database
const verifyConnection = async () => {
    try {
        await database.authenticate()
        console.log('exit in the connection on database')
    } catch (error) {
        console.log(error)
    }
}
verifyConnection()


User.belongsTo(PersonalTrainer)
PersonalTrainer.hasMany(User)

PersonalTrainer.hasMany(Routine)
Routine.belongsTo(PersonalTrainer)

User.hasMany(Routine)
Routine.belongsTo(User)

Routine.hasMany(Week)
Week.belongsTo(Routine)

Week.hasMany(DayModule)
DayModule.belongsTo(Week)

DayModule.belongsToMany(Exercise, { through: 'Day_Exersice' })
Exercise.belongsToMany(DayModule, { through: 'Day_Exersice' })

Muscle.belongsToMany(Exercise, { through: 'Muscle_Exercise' })
Exercise.belongsToMany(Muscle, { through: 'Muscle_Exercise' })
