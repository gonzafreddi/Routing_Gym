import { MuscleInstance } from './muscleInterface'
export interface ExerciseInstance {
    id?: string;
    name: string;
    description: string;
    image: string | null;
  
    // addMuscle: (muscle:MuscleInstance)
    addMuscle: (muscle: MuscleInstance | MuscleInstance['id']) => Promise<void>
}