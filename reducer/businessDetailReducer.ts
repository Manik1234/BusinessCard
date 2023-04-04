
import { combineReducers } from 'redux';
import { UserDetail } from '../container/BusinessDetails';

enum BusinessActionType {
  ADD_DETAIL = 'ADD_DETAIL',
  DELETE_DETAIL = 'DELETE_DETAIL'
}

interface BusinessCardAction {
  type: BusinessActionType;
  payload: UserDetail;
}


const businessDetailReducer = (state = {}, action: BusinessCardAction) => {

  switch (action.type) {
    case 'ADD_DETAIL':
      const prevBusinessCard: UserDetail[] = [];
      prevBusinessCard.push((state as any).businesUsersCard, action.payload);
      return {
        ...state, businesUsersCard: prevBusinessCard.flat().filter(elements => {
          return elements !== null && elements !== undefined ;
         })
      }
    case 'DELETE_DETAIL':
      state.businesUsersCard.splice((action.payload as number), 1)
      return {
        ...state
      }
    default:
      return state
  }
};

const allReducers = combineReducers({
  businessDetail: businessDetailReducer,
});

export default allReducers;

