// esModule.js

import { DataTypes, UUIDV4, REAL } from 'sequelize'

const defineRoutine = (sequelize) => {
  const Routine = sequelize.define('Routine', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4
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
