
import { combineReducers } from 'redux';

const INITIAL_STATE = { name: '', occupation: '', company: '', email: '', phone: '', linkedin: '' };

const businessDetailReducer = (state = INITIAL_STATE, action: any) => {
  console.log('dispatch mahendru--->', action.type, state);
  
    switch (action.type) {
      default:
        return state
    }
  };

  const allReducers = combineReducers({
    businessDetail: businessDetailReducer,
  });
  
  export default allReducers;
  
  