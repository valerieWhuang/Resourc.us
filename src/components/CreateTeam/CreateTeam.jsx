import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import axios from "axios";

function CreateTeam() {
  const history = useHistory();
  const [_payload, setPayload] = useState({
    name: '',
    image: '',
    description: '',
    category: '',
  });

  function handleChange(event) {
    // event target is each indivisual form that is being inputed
    const { name, value } = event.target;

    // copies previous state and updates only changed key/values
    setPayload({ ..._payload, [name]: value });
  }
  function handleClick(event) {
    event.preventDefault();
    // test if server is working
    // eslint-disable-next-line no-console
    console.log(_payload);
    // POST the payload to database
    fetch('http://localhost:3000/teams/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(_payload),
    })
      .then((res) => res.json())
      .then((data) => {
        // eslint-disable-next-line no-console
        console.log(data);
        history.push('/teams');
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('Post Fail', err);
      });
    // ADD RESET STATE HERE AFTER SUMBIT
  }

  return (
    <div className="container formContainer">
      <h1>{_payload.name ? _payload.name : "New Team"}</h1>
      <form>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="name"
            value={_payload.name}
            className="form-control"
            placeholder="Team Name"
          />
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="image"
            value={_payload.image}
            className="form-control"
            placeholder="Avatar"
          />
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="description"
            value={_payload.description}
            className="form-control"
            placeholder="Description"
          />
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="category"
            value={_payload.category}
            className="form-control"
            placeholder="Category"
          />
        </div>
        <button type="button" onClick={handleClick} className="btn btn-lg btn-info">
          Create Team
        </button>
      </form>
    </div>
  );
}

export {CreateTeam};
