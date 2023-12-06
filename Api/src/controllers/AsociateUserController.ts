import { PersonalTrainer, User } from '../db'

export const AsociateUsersControllers = async (userId: string, trainerId: string) => {
    try {
        if (!userId || !trainerId) return 'Id obligatorio'
        const user = await User.findByPk(userId)
        const trainer = await PersonalTrainer.findByPk(trainerId)
        if (!user || !trainer) {
            return 'Usuario o entrenador no encontrado'
        } else {
            // Asociar el usuario al entrenador personal
            await user.update({
                PersonalTrainerId: trainerId
            })
            await user.save()
        }
        console.log(user)
        return 'asociacion exitosa'
    } catch (error) {
        console.log(error)
    }
}
