import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="container-fluid">
      <h4>Event Create Form</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">Title</label>
          <input className="form-control" id="formEventTitle"></input>
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">Body</label>
          <textarea className="form-control" id="formEventBody"></textarea>
        </div>

        <button className="btn btn-primary">Event Create</button>
        <button className="btn btn-danger">All Event Delete</button>

        <h4>Event List</h4>
        <table className="table table-hover">
          <thead>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th></th>
          </thead>
          <tbody>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default App;
