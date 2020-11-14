/**
 * Archivo del reducer que manejara el flujo de la informacion
 * de la aplicacion y las acciones que realizaremos
 */

//Este reducer se encarga de manejar la informacion y ponerla en el estado
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      const exist = state.myList.find(item => item.id === action.payload.id);
      if (exist) {
        return { ...state };
      }
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
      break;
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter(items => items.id !== action.payload),
      };
      break;
    case 'LOGIN_REQUEST':
      //manejamos la informacion
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
