import React, { useState } from 'react';
import { CREATE_EVENT, DELETE_ALL_EVENTS } from '../actions';

const EventForm = (props) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addEvent = (e) => {
    e.preventDefault();

    props.dispatch({
      type: CREATE_EVENT,
      title,
      body,
    });

    setTitle('');
    setBody('');
  };

  const deleteAllEvents = (e) => {
    e.preventDefault();
    const deleteCheck = window.confirm('イベントを全て削除してもよろしいですか？');
    if(deleteCheck) props.dispatch({ type: DELETE_ALL_EVENTS });
  };

  const unCreatable = title === '' || body === '';
  const unAllDeletable = props.state.length === 0;

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
      </form>
    </>
  );
}

export default EventForm;
