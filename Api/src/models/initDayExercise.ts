// esModule.js

// Importa los módulos necesarios de Sequelize y define la conexión
import { DataTypes, Model, Sequelize } from 'sequelize'

// Define el modelo para la tabla intermedia
class DayExercise extends Model {
   
    public series!: number
    public repetitons!: number
    public breakTime!: string
}

// Inicializa el modelo con Sequelize
export const initDayExercise = (sequelize: Sequelize) => {
    DayExercise.init(
        {
            
            series: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            repetitons: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            breakTime: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'DayExercise',
            tableName: 'DayExercise',
        }
    )

    return DayExercise
}
export default initDayExercise