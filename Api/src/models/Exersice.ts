// // esModule.js

import { DataTypes, Sequelize, UUIDV4 } from 'sequelize'
// import { Muscle } from '../db'
const defineExercise = (sequelize:Sequelize) => {

    
    const Exercise = sequelize.define('Exercise',{
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
    // Exercise.belongsToMany(Muscle,{through: 'Exercise_muscle'})
    return Exercise
}

export default defineExercise


// import { Model, InferAttributes, InferCreationAttributes, Sequelize, DataTypes, UUIDV4 } from 'sequelize'

// class Exercise extends Model{}

// Exercise.init({
//     id: {
//         type: DataTypes.UUID,
//         primaryKey: true,
//         defaultValue: UUIDV4
//     },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     description: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     image: {
//         type: DataTypes.STRING,
//         allowNull: true
//     }

// },   {
//     sequelize: new Sequelize(),
//     modelName: 'User',
// })

// // Utilizando InferAttributes e InferCreationAttributes para inferir automáticamente las tipificaciones
// export type UserAttributes = Sequelize.InferAttributes<Exercise>;
// export type UserCreationAttributes = Sequelize.InferCreationAttributes<Exercise>;

// import { sequelize } from '../db'
// import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes, UUIDV4 } from 'sequelize'

// export class Exercise extends Model<InferAttributes<Exercise>, InferCreationAttributes<Exercise>> {
//     declare id: CreationOptional<number>
//     declare name: string
//     declare description : string
//     declare image : string
// }

// Exercise.init({
//     id: {
//         type: DataTypes.UUID,
//         primaryKey: true,
//         defaultValue: UUIDV4
//     },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     description: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     image: {
//         type: DataTypes.STRING,
//         allowNull: true
//     }

// }, {
//     tableName: 'exercise',
//     sequelize
// })