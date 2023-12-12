
import { DataTypes, Model, Sequelize, UUIDV4 } from 'sequelize'

export class MuscleClass extends Model {
    public id!: string
    public name!: string
    public description!: string
    public image!: string
}

export const defineMuscle = (sequelize: Sequelize) => {
    const Muscle = sequelize.define<MuscleClass>('Muscle', {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'https://w7.pngwing.com/pngs/79/814/png-transparent-fitness-centre-computer-icons-dumbbell-weight-training-gym-physical-fitness-text-sports-thumbnail.png'
        }
    })
    return Muscle

}