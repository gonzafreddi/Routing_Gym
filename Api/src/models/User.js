// esModule.js

import { DataTypes, UUIDV4 } from 'sequelize'

// Define el modelo 'User'
const defineUser = (sequelize) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        height: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return User
}

export default defineUser
