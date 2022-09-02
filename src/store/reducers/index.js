import {combineReducers} from 'redux';
import hospitalReducer from '../hospital/reducers/hospital.reducer';
import appointmentReducer from '../appointment/reducers/appointment.reducer';
import dragReducer from '../drag/reducers/drag.reducer';
import taskReducer from '../task/reducers/task.reducer';

const createReducer = () =>
  combineReducers({
    hospitalReducer: hospitalReducer,
    appointmentReducer: appointmentReducer,
    dragReducer: dragReducer,
    taskReducer: taskReducer,
  });

export default createReducer;
