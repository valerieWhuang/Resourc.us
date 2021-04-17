import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import { useUserContext } from '../StateProvider';

function HomePage() {
  const { user , dispatch } = useUserContext();
  const [ teams, setTeams ] = useState([]);
  const [ otherTeams, setOtherTeams ] = useState([]);

  const colors = [
    ['#ff4b1f', '#ff9068'],
    ['#16BFFD', '#CB3066'],
    ['#1D4350', '#A43931'],
    ['#a80077', '#66ff00'],
    ['#ff4b1f', '#1fddff'],
    ['#0D0D0D', '#434343'],
    ['#4B79A1', '#283E51'],
    ['#834d9b', '#d04ed6'],
    ['#0099F7', '#F11712'],
    ['#B24592', '#F15F79'],
    ['#673AB7', '#512DA8'],
    ['#005C97', '#363795']
  ]

  function colorPicker() {
    return Math.floor(Math.random() * colors.length);
  }

  useEffect(()=> {
    if (user.user.isLoggedIn) {
      fetch("http://localhost:3000/teams/joinedList")
      .then((res) => res.json())
      .then(allTeams => {
        const userTeams = [];
        const nonUserTeams = [];

        for (let i=0; i < allTeams.length; i++) {
          if (user.user.teamsList.includes(allTeams[i]._id.toString())) {
            userTeams.push(allTeams[i])
          } else {
            nonUserTeams.push(allTeams[i])
          }
        }
        setTeams(userTeams);
        setOtherTeams(nonUserTeams);
      }).catch(err => {
        console.log('GET FAILED', err);
      })
    
    }

  }, []);

  const joinTeam = (team) => {
    console.log("join team", team);
    const updatedUser = JSON.parse(JSON.stringify(user.user));
    updatedUser.teamsList.push(team._id);
    dispatch({
      type: 'JOIN_TEAM',
      item: updatedUser,
    })

    const teamsUpdate = JSON.parse(JSON.stringify(teams));
    teamsUpdate.push(team);

    const otherTeamsUpdate = JSON.parse(JSON.stringify(otherTeams));
    let index = undefined;
    for (let i=0; i < otherTeamsUpdate.length; i++){
      if (otherTeamsUpdate[i]._id === team._id){
        index = i;
      }
    }
    otherTeamsUpdate.splice(index, 1);

    setOtherTeams(otherTeamsUpdate);
    setTeams(teamsUpdate);

    // Add to mongoDB database    
    fetch("http://localhost:3000/teams/join", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then(res => {
        console.log(res);
        console.log(res.teamsList);
      }).catch(err => {
        console.log('UPDATING TEAM FAILED', err);
      })
    

  }

  const leaveTeam = (team) => {
    console.log(team);
    const updatedUser = JSON.parse(JSON.stringify(user.user));
    let index = undefined;
    for (let i=0; i < updatedUser.teamsList.length; i++){
      if (updatedUser.teamsList[i] === team._id){
        index = i;
      }
    }
    updatedUser.teamsList.splice(index, 1);
    
    dispatch({
      type: 'LEAVE_TEAM',
      item: updatedUser,
    })


    const otherTeamsUpdate = JSON.parse(JSON.stringify(otherTeams));
    otherTeamsUpdate.push(team);
    setOtherTeams(otherTeamsUpdate);
    console.log(otherTeamsUpdate);

    const teamsUpdate = JSON.parse(JSON.stringify(teams));
    let teamsIndex = undefined;
    for (let i=0; i < teamsUpdate.length; i++){
      if (teamsUpdate[i]._id === team._id){
        teamsIndex = i;
      }
    }
    teamsUpdate.splice(teamsIndex, 1);
    
    setTeams(teamsUpdate); ////////// NEED TO FIX THIS TO BE THE OTHER LIST WITH FULL TEAM INFO
    console.log(teamsUpdate);
    

    // Add to mongoDB database    
    fetch("http://localhost:3000/teams/leave", {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then(res => {
        console.log(res);
        console.log(res.teamsList);
      }).catch(err => {
        console.log('UPDATING TEAM FAILED', err);
      })
    

  }

  return (
    <div className="container">
      <h1>Home Page</h1>
      <div className="cardContainer">
        {user.user.isLoggedIn && <h2>Your Teams:</h2>}
        {user.user.isLoggedIn && teams.map(team =>
          <div className="teamCard" key={team._id}>
            <header>
              <img src="https://images.unsplash.com/photo-1612392166886-ee8475b03af2?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2102&q=80" />
              <div className="mask" style={{ background: `linear-gradient(${colors[colorPicker()][0]}, ${colors[colorPicker()][1]})` }}></div>
              <h1>{team.name}</h1>
            </header>
            <section>
              <div className="meta">
                <div>{team.category}</div>
                <div><i className='bx bx-merge'></i> 342</div>
                <div><i className='bx bxs-user-account'></i> 24</div>
              </div>
              <article>
                <p>{team.description}</p>
              </article>
              <div className="actions">
                <div>
                  { user.user.teamsList.indexOf(team._id) !== -1 && <button type="button" onClick={() => leaveTeam(team)}>Leave Team</button>}
                  <Link className="btn btn-primary" to={"/teams/" + team._id}>View</Link>
                </div>
              </div>
            </section>
          </div>
        )}
        {user.user.isLoggedIn && <h2>Discover:</h2>}
        {user.user.isLoggedIn && otherTeams.map(team =>
          <div className="teamCard" key={team._id}>
            <header>
              <img src="https://images.unsplash.com/photo-1612392166886-ee8475b03af2?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2102&q=80" />
              <div className="mask" style={{ background: `linear-gradient(${colors[colorPicker()][0]}, ${colors[colorPicker()][1]})` }}></div>
              <h1>{team.name}</h1>
            </header>
            <section>
              <div className="meta">
                <div>{team.category}</div>
                <div><i className='bx bx-merge'></i> 342</div>
                <div><i className='bx bxs-user-account'></i> 24</div>
              </div>
              <article>
                <p>{team.description}</p>
              </article>
              <div className="actions">
                <div>
                { user.user.teamsList.indexOf(team._id) === -1 && <button type="button" onClick={() => joinTeam(team)}>Join</button>}
                { user.user.teamsList.indexOf(team._id) !== -1 && <p>Joined</p> }
                  <Link className="btn btn-primary" to={"/teams/" + team._id}>View</Link>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
