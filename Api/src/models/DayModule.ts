// esModule.js

import { DataTypes, Sequelize, UUIDV4 } from 'sequelize'

const defineDayModule = (sequelize:Sequelize) => {
    const DayModule = sequelize.define('DayModule', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })

    return DayModule
}

export default defineDayModule
