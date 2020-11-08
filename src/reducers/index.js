/**
 * Archivo del reducer que manejara el flujo de la informacion
 * de la aplicacion y las acciones que realizaremos
 */

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
