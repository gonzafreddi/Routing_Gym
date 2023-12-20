// esModule.js

import { DataTypes, UUIDV4 } from 'sequelize'

// Define el modelo 'Week'
const defineWeek = (sequelize) => {
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
