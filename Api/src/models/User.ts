// esModule.js
import { DataTypes, Model, Sequelize, UUIDV4 } from 'sequelize'
import { UserInterface } from '../utils/interfaces'
// paso userInterface{} para inluir npliciotamemnte todas las propiedades de esta interfas sino no garatniotza que se hereden
interface UserModel extends Model<UserInterface>, UserInterface {}

const defineUser = (sequelize: Sequelize) => {
    const User = sequelize.define<UserModel>('User', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: UUIDV4,
        },
        name: {
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
        password: {
            type: DataTypes.STRING,
            allowNull: false,
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
            validate: {
                isIn: [['women', 'man']],
            },
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        height: {
            type: DataTypes.REAL,
            allowNull: false,
        },
        //PersonalTrainerId: {
        //type: DataTypes.UUID,
        //allowNull: true,
        //},
    })


    return User
}
  
export default defineUser