// Aquí puedes definir los tipos necesarios para tu estado y acciones
// Por ejemplo, puedes definir interfaces para el estado, acciones, etc.
// Reemplaza 'any' con tipos específicos según corresponda a tu aplicación

export interface RootState {
    // Define la estructura de tu estado
    users: any[];
    usersCopy: any[];
    trainers: any[];
  }
  
  export interface RootAction {
    // Define la estructura de tus acciones
    type: string;
    payload: any;
    // Puedes agregar más campos según sea necesario para tus acciones
  }
  