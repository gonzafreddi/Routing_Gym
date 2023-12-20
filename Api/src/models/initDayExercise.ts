// Importa los módulos necesarios de Sequelize y define la conexión
import { DataTypes, Model, Sequelize } from 'sequelize'

// Define el modelo para la tabla intermedia
class DayExercise extends Model {
   
    public additionalField1!: string
    public additionalField2!: number
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
            tableName: 'Day_Exercise',
        }
    )

    return DayExercise
}
