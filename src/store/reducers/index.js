import {combineReducers} from 'redux';
import recordReducer from '../record/reducers/record.reducer';
import appointmentReducer from '../appointment/reducers/appointment.reducer';
import dragReducer from '../drag/reducers/drag.reducer';
import taskReducer from '../task/reducers/task.reducer';

const createReducer = () =>
  combineReducers({
    recordReducer: recordReducer,
    appointmentReducer: appointmentReducer,
    dragReducer: dragReducer,
    taskReducer: taskReducer,
  });

export default createReducer;
