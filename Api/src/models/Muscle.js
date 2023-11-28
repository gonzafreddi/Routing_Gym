import { DataTypes, UUIDV4 } from 'sequelize'

const defineMuscle = (sequelize) => {
  const Muscle = sequelize.define('Muscle', {
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
      allowNull: true,
      defaultValue: 'https://w7.pngwing.com/pngs/79/814/png-transparent-fitness-centre-computer-icons-dumbbell-weight-training-gym-physical-fitness-text-sports-thumbnail.png'
    }
  })

  return Muscle
}

export default defineMuscle
