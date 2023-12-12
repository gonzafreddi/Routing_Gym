// esModule.js

import { DataTypes, Sequelize, UUIDV4 } from 'sequelize'

// Define el modelo 'Week'
const defineWeek = (sequelize:Sequelize) => {
    const Week = sequelize.define('Week', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Week
}

export default defineWeek
