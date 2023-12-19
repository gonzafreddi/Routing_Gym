// esModule.js

import { DataTypes, UUIDV4, REAL, Sequelize } from 'sequelize'

const defineRoutine = (sequelize:Sequelize) => {
    const Routine = sequelize.define('Routine', {
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
        objetive: {
            type: DataTypes.STRING,
            allowNull: true
        },
        target_time: {
            type: DataTypes.STRING,
            allowNull: true
        },
        initial_weight: {
            type: REAL,
            allowNull: true
        },
        actual_weight: {
            type: DataTypes.ARRAY(REAL),
            allowNull: false
        },
        target_weight: {
            type: REAL,
            allowNull: false
        }
    })
    return Routine
}

export default defineRoutine
