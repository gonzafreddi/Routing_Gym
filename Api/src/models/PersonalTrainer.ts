// esModule.js
import { DataTypes, Model, Sequelize, UUIDV4 } from 'sequelize'

class PersonalTrainer extends Model {
    public id!: string
    public name!: string
    public password!: string
    public email!: string
    public photo!: string | null
    public description!: string | null
    public gender!: string
    public age!: number
    public certificates!: string[]

    public readonly createdAt!: Date
    public readonly updatedAt!: Date
}

const definePersonalTrainer = (sequelize: Sequelize) => {
    PersonalTrainer.init(
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: UUIDV4,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true,
                },
            },
            photo: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            gender: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            certificates: {
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'PersonalTrainer',
        }
    )

    return PersonalTrainer
}

export default definePersonalTrainer
