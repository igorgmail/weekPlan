export default function reducer(state, action) {
  switch (action.type) {
    case 'ADDTASK':

      return [action.payload, ...state]

    case 'TOGGLE_STATUS':
      const newState = state.map((el, ind) => {
        if (ind === Number(action.payload)) {
          if (el.status === 'done') {
            return { ...el, status: 'work' };
          } else {
            return { ...el, status: 'done' };
          }
        }
        return el
      })

      return newState

    case 'SORT_BY_DONE':
      const sortedArray = [...state].sort((a, b) => {
        if (a.status === 'done' && b.status !== 'done') {
          return 1; // a должно идти после b
        }
        if (a.status !== 'done' && b.status === 'done') {
          return -1; // a должно идти перед b
        }
        return 0; // порядок a и b остается неизменным
      });
      return sortedArray

    case 'FILTER_BY_All':
      return [...state]

    case 'FILTER_BY_DONE':
      return [...state].filter((el) => el.status === 'done')

    case 'UPDATE_ITEM':
      return [...state].map((el, ind) => {
        if (ind === Number(action.payload.index)) {
          return { ...el, task: action.payload.value }
        }
        return el
      })

    case 'DELETE_ITEM':
      return [...state].filter((el, ind) => ind !== Number(action.payload))


    default:
      return [...state]
  }

}