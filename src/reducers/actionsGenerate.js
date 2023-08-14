import { ADDTASK, TOGGLE_STATUS, SORT_BY_DONE, FILTER_BY_All, FILTER_BY_DONE, UPDATE_ITEM, DELETE_ITEM, CHECK_ALL_DONE } from './boilerplate'

class Actions {

  addTask(payload) {
    return {
      type: ADDTASK,
      payload
    }
  }
  toogleStatus(payload) {
    return {
      type: TOGGLE_STATUS,
      payload,
    }
  }
  sortByDone(payload) {
    return {
      type: SORT_BY_DONE,
      payload,
    }
  }
  filterByAll(payload) {
    return {
      type: FILTER_BY_All,
      payload,
    }
  }
  filterByDone(payload) {
    return {
      type: FILTER_BY_DONE,
      payload,
    }
  }
  updatiItem(payload) {
    return {
      type: UPDATE_ITEM,
      payload: {
        index: payload.itemIndex,
        value: payload.textValue
      }
    }
  }
  deleteItem(payload) {
    return {
      type: DELETE_ITEM,
      payload,
    }
  }
  checkAllDone(payload) {
    return {
      type: CHECK_ALL_DONE,
      payload,
    }
  }
}

const actions = new Actions();
export default actions;