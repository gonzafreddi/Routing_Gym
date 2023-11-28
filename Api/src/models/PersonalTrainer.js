import { DataTypes, UUIDV4 } from 'sequelize'

const definePersonalTrainer = (sequelize) => {
  const PersonalTrainer = sequelize.define('PersonalTrainer', {
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
      allowNull: false
    },
    certificates: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    }
  })

  return PersonalTrainer
}

export default definePersonalTrainer
