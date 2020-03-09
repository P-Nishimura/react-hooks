import React from 'react';

const Event = ({ event, dispatch }) => {
  const id = event.id;
  const handleClickDelete = () => {
    dispatch({type: 'DELETE_EVENT', id});
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

export default Event
