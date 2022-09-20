export const GET_TASKS = 'GET_TASKS';
export const POST_TASK = 'POST_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const GET_TASK_BY_ID = 'GET_TASK_BY_ID';
export const UPDATE_TASK_COMPLETE = 'UPDATE_TASK_COMPLETE';
export const SET_LOADING = 'SET_LOADING_TASK';

import {TaskService} from '../../../database/business/TaskService';

export const getTask = recordId => dispatch => {
  const service = new TaskService();
  dispatch(setLoading(true));

  service
    .getByRecordId(recordId)
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
  const service = new TaskService();
  dispatch(setLoading(true));

  service
    .getById(id)
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
  const service = new TaskService();

  service
    .add(model)
    .then(res => {
      dispatch({
        type: POST_TASK,
        payload: res,
      });
    })
    .catch(e => {
      dispatch({
        type: POST_TASK,
        payload: [],
      });
    });
};

export const updateTask = model => dispatch => {
  const service = new TaskService();

  service
    .update(model)
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
  const service = new TaskService();

  service
    .updateComplete(model)
    .then(res => {
      dispatch({
        type: UPDATE_TASK_COMPLETE,
        payload: {id: model.id, res},
      });
    })
    .catch(e => {
      dispatch({
        type: UPDATE_TASK_COMPLETE,
        payload: {},
      });
    });
};

export const deleteTask = id => dispatch => {
  const service = new TaskService();

  service
    .delete(id)
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
