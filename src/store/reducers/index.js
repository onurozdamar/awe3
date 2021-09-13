import {combineReducers} from 'redux';
import hospitalReducer from '../hospital/reducers/hospital.reducer';
import randevuReducer from '../randevu/reducers/randevu.reducer';
import ilacReducer from '../ilac/reducers/ilac.reducer';
import gorevReducer from '../gorev/reducers/gorev.reducer';

const createReducer = () =>
  combineReducers({
    hospitalReducer: hospitalReducer,
    randevuReducer: randevuReducer,
    ilacReducer: ilacReducer,
    gorevReducer: gorevReducer,
  });

export default createReducer;
