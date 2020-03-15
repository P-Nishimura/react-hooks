import React, { useState, useContext } from 'react';
import { 
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPARATION_LOGS
} from '../actions';
import AppContext from '../contexts/AppContext';
import { timeCurrentIso8601 } from '../utils';

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addEvent = (e) => {
    e.preventDefault();

    dispatch({
      type: CREATE_EVENT,
      title,
      body,
    });

    dispatch({
      type: ADD_OPERATION_LOG,
      description: 'イベントを作成しました.',
      operatedAt: timeCurrentIso8601(),
    });

    setTitle('');
    setBody('');
  };

  const deleteAllEvents = (e) => {
    e.preventDefault();
    const deleteCheck = window.confirm('イベントを全て削除してもよろしいですか？');
    if(deleteCheck) {
      dispatch({
        type: DELETE_ALL_EVENTS
      });
      dispatch({
        type: ADD_OPERATION_LOG,
        description: '全てのイベントを削除しました.',
        operatedAt: timeCurrentIso8601(),
      });
    }
  };

  const deleteAllOperationLogs = (e) => {
    e.preventDefault();
    const deleteCheck = window.confirm('全ての操作ログを削除してもよろしいですか？');
    if(deleteCheck) {
      dispatch({
        type: DELETE_ALL_OPARATION_LOGS,
      });
    }
  };

  const unCreatable = title === '' || body === '';
  const unAllDeletable = state.events.length === 0;
  const unAllDeleLogstable = state.operationLogs.length === 0;

  return (
    <>
      <h4>Event Create Form</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">Title</label>
          <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)}></input>
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">Body</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)}></textarea>
        </div>

        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>Event Create</button>
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={unAllDeletable}>All Event Delete</button>
        <button className="btn btn-danger" onClick={deleteAllOperationLogs} disabled={unAllDeleLogstable} >All Logs Delete</button>
      </form>
    </>
  );
}

export default EventForm;
