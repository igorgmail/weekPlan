// boilerPlate
import { ADDTASK, TOGGLE_STATUS, SORT_BY_DONE, FILTER_BY_All, FILTER_BY_DONE, UPDATE_ITEM, DELETE_ITEM, CHECK_ALL_DONE } from './boilerplate'

// action generator

const appInitState = (() => {
  const appConfigFromLocal = localStorage.getItem('wp_config');
  if (appConfigFromLocal) {
    console.log("▶ ⇛ appConfigFromLocal:", appConfigFromLocal);
    return JSON.parse(appConfigFromLocal)
  } else {
    // localStorage.setItem('wp_config', JSON.stringify({ theme: 'light', lang: 'RU' }))
    return {
      theme: 'light',
      lang: 'RU',
    }
  }

})

function appReducer(state = appInitState(), action) {

  switch (action.type) {
    case ADDTASK:
      const newTask = {
        task: action.payload,
        status: 'work',
        dataEnd: Date.now()
      }
      return { ...state }

    default:
      return { ...state }
  }

}

export default appReducer;