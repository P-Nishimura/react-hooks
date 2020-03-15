import React, { useContext } from 'react';

import { DELETE_EVENT } from '../actions';
import AppContext from '../contexts/AppContext';

const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext);

  const id = event.id;
  const handleClickDelete = () => {
    const result = window.confirm(`イベント(id=${id})を削除してもよろしいですか？`);
    if(result) dispatch({type: DELETE_EVENT, id});
  };

  return(
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td><button className="btn btn-danger" type="button" onClick={handleClickDelete}>Delete</button></td>
    </tr>
  );
}

export default Event;
