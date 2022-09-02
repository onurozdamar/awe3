export const GET_TASKS = 'GET_TASKS';
export const POST_TASK = 'POST_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const GET_TASK_BY_ID = 'GET_TASK_BY_ID';
export const UPDATE_TASK_COMPLETE = 'UPDATE_TASK_COMPLETE';
export const SET_LOADING = 'SET_LOADING';

import {BaseManager} from '../../../database';

export const getTask = recordId => dispatch => {
  const manager = new BaseManager();
  dispatch(setLoading(true));

  manager
    .getTask(recordId)
    .then(res => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_TASKS,
        payload: res,
      });
    })
    .catch(e => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_TASKS,
        payload: [],
      });
    });
};

export const getTaskById = id => dispatch => {
  const manager = new BaseManager();
  dispatch(setLoading(true));

  return manager
    .getTaskById(id)
    .then(res => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_TASK_BY_ID,
        payload: res[0],
      });
    })
    .catch(e => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_TASK_BY_ID,
        payload: {},
      });
    });
};

export const addTask = model => dispatch => {
  const manager = new BaseManager();

  manager
    .addTask(model)
    .then(res => {
      dispatch({
        type: POST_TASK,
        payload: res,
      });
      dispatch(getTask(model.recordId));
    })
    .catch(e => {
      dispatch({
        type: POST_TASK,
        payload: [],
      });
    });
};

export const updateTask = model => dispatch => {
  const manager = new BaseManager();

  manager
    .updateTask(model)
    .then(res => {
      dispatch({
        type: UPDATE_TASK,
        payload: res,
      });
    })
    .catch(e => {
      dispatch({
        type: UPDATE_TASK,
        payload: [],
      });
    });
};

export const updateTaskComplete = model => dispatch => {
  const manager = new BaseManager();

  manager
    .updateTaskComplete(model)
    .then(res => {
      dispatch({
        type: UPDATE_TASK_COMPLETE,
        payload: res,
      });
      dispatch(getTaskById(model.id));
      dispatch(getTask(model.recordId));
    })
    .catch(e => {
      dispatch({
        type: UPDATE_TASK_COMPLETE,
        payload: {},
      });
    });
};

export const deleteTask = id => dispatch => {
  const manager = new BaseManager();

  manager
    .deleteTask(id)
    .then(res => {
      dispatch({
        type: DELETE_TASK,
        payload: res,
      });
    })
    .catch(e => {
      dispatch({
        type: DELETE_TASK,
        payload: [],
      });
    });
};

export const setLoading = loading => dispatch => {
  dispatch({
    type: SET_LOADING,
    payload: loading,
  });
};
