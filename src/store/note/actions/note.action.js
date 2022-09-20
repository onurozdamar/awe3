import {NoteService} from '../../../database/business/NoteService';

export const GET_NOTES = 'GET_NOTES';
export const GET_NOTE_BY_ID = 'GET_NOTE_BY_ID';
export const POST_NOTE = 'POST_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const SET_LOADING = 'SET_LOADING_NOTE';

export const getNote = recordId => dispatch => {
  const service = new NoteService();
  dispatch(setLoading(true));

  service
    .getByRecordId(recordId)
    .then(response => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_NOTES,
        payload: response,
      });
    })
    .catch(e => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_NOTES,
        payload: [],
      });
    });
};

export const getNoteById = id => dispatch => {
  const service = new NoteService();
  dispatch(setLoading(true));

  service
    .getById(id)
    .then(response => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_NOTE_BY_ID,
        payload: response[0],
      });
    })
    .catch(e => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_NOTE_BY_ID,
        payload: {},
      });
    });
};

export const addNote = model => dispatch => {
  const service = new NoteService();

  service
    .add(model)
    .then(response => {
      dispatch({
        type: POST_NOTE,
        payload: response,
      });
    })
    .catch(e => {
      dispatch({
        type: POST_NOTE,
        payload: {},
      });
    });
};

export const updateNote = model => dispatch => {
  const service = new NoteService();

  service
    .update(model)
    .then(response => {
      dispatch({
        type: UPDATE_NOTE,
        payload: response,
      });
    })
    .catch(e => {
      dispatch({
        type: UPDATE_NOTE,
        payload: {},
      });
    });
};

export const deleteNote = id => dispatch => {
  const service = new NoteService();

  service
    .delete(id)
    .then(response => {
      dispatch({
        type: DELETE_NOTE,
        payload: response,
      });
    })
    .catch(e => {
      dispatch({
        type: DELETE_NOTE,
        payload: {},
      });
    });
};

export const setLoading = loading => dispatch => {
  dispatch({
    type: SET_LOADING,
    payload: loading,
  });
};
