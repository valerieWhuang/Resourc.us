import React, { useState, useEffect } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Multiselect } from 'multiselect-react-dropdown';

function createResource() {
  const currentTeam = localStorage.getItem('currentTeam')
  const currentUser = localStorage.getItem('currentUser')
  
  // State
  const [_payload, setPayload] = useState({
    title: "",
    description: "",
    link: "",
    team: currentTeam, // team is preselected if already on team page
    votes: 0,
    tags: [],
    commentsList: [],
    postedBy: currentUser, // user is auto-populated if logged in
    relatedLocation: ""
  });

  const [_teams, setTeams] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/teams/list")
      .then((response) => {
        return response.json(); //Parses to JSON
      })
      .then((data) => {
        setTeams(data);
        // console.log(data); ENDLESS RUNNING BUG!?
      })
      .catch((err) => {
        console.log("GET FAILED", err);
      });
  }, []);

  // tag options
  const [ tagOptions, setTagOptions ] = useState([])
  const [ newTagOption, setNewTagOption] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/tags/list")
      .then(response => response.json())
      .then( data => {
        console.log('tag options', data)
        setTagOptions(data)
      })
      .catch( err => {
        console.log("FAILED TO GET TAG OPTIONS", err)
      })
  }, [])

  // during tag search, capture search query 
  function handleTagSearch() {
    const newValues = document.getElementById('search_input').value
    setNewTagOption(newValues)
    console.log('newValues: ', newValues)
  }

  // if tag doesn't exist in DB,
  // create it and update the tag options in state
  function createNewTag(e) {
    e.preventDefault()
    console.log('newTagOption:', newTagOption)
  }

  function handleTagSelect(selectedList, selectedItem) {
    console.log(selectedList, 'selectedItem:', selectedItem)
  }

  function handleTagRemove(selectedList, removedItem) {
    console.log(selectedList, 'removedItem:', removedItem)
  }


  function handleChange(event) {
    const { name, value } = event.target; //event target is each indivisual form that is being inputed
    console.log(_payload);
    setPayload({ ..._payload, [name]: value }); // copies previous state and updates only changed key/values
  }

  function handleClick(event) {
    event.preventDefault();
    //test if server is working
    // POST the payload to database
    fetch("http://localhost:3000/resource/create", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(_payload),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("Post Fail", err);
      });
    // ADD RESET STATE HERE AFTER SUMBIT
  }

  function selectTeam(e) {
    const payload = _payload;
    payload.teamId = e.currentTarget.value;
    setPayload(payload);
    console.log(_payload);
  }

  return (
    <div className='container formContainer'>
      <h1>Create Resource Page</h1>

      <form>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="title"
            value={_payload.title}
            autoComplete="off"
            className="form-control"
            placeholder="Title"
          ></input>
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="link"
            value={_payload.link}
            autoComplete="off"
            className="form-control"
            placeholder="link"
          ></input>
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="description"
            value={_payload.description}
            autoComplete="off"
            className="form-control"
            placeholder="Description"
          ></input>
        </div>

        {/* Tag Multiselect Component */}
        <Multiselect
          options={tagOptions} // Options to display in the dropdown
          selectedValues="" // Preselected value to persist in dropdown
          displayValue="name" // Property name to display in the dropdown options
          onSearch={handleTagSearch}
          onSelect={handleTagSelect} // Function will trigger on select event
          onRemove={handleTagRemove} // Function will trigger on remove event
          emptyRecordMsg={<p>{newTagOption} <button onClick={createNewTag} className="btn btn-sm btn-primary">Create tag</button></p>}
          closeIcon="circle"
        />
  

        {/* <select onChange={selectTeam}>
          {_teams.map((team) => (
            <option value={team._id} key={team._id}>{team.name}</option>
          ))}
        </select> */}

        <button onClick={handleClick} className="btn btn-lg btn-info" style={{marginTop: "100px"}}>
          Create Resource
        </button>
      </form>
    </div>
  );
}

export default createResource;
