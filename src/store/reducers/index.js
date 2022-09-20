import {combineReducers} from 'redux';
import noteReducer from '../note/reducers/note.reducer.js';
import recordReducer from '../record/reducers/record.reducer';
import appointmentReducer from '../appointment/reducers/appointment.reducer';
import dragReducer from '../drag/reducers/drag.reducer';
import taskReducer from '../task/reducers/task.reducer';
import quickAddReducer from '../quick-add/reducers/quickAdd.reducer';

const createReducer = () =>
  combineReducers({
    noteReducer,
    recordReducer: recordReducer,
    appointmentReducer: appointmentReducer,
    dragReducer: dragReducer,
    taskReducer: taskReducer,
    quickAddReducer: quickAddReducer,
  });

export default createReducer;
