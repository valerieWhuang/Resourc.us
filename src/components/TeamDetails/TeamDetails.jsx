import React, { useState, useEffect } from "react";
import {ResourceCard} from "../ResourceCard";
import {Button, Container, Row, Col} from "react-bootstrap";
import {useUserContext} from '../../StateProvider';

function TeamDetails({ match }) {
  // get the team ID from the URL params (destructure props.match.params)
  const { params: { id } } = match;
  const [team, setTeam] = useState([]);
  const [teamResources, setTeamResources] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const {user} = useUserContext();

  useEffect(() => {
    // when team page is visited, set current team in localStorage
    localStorage.setItem('currentTeam', id)

    // GET team details by ID
    fetch("http://localhost:3000/teams/list")
      .then(response => response.json())
      .then(data => {
        const team = data.filter(t => t._id === id)
        setTeam(team)
      })
      .then(() => {
        // GET resources that belong to current team by team ID
        fetch("http://localhost:3000/resource/listAll")
          .then(response => response.json())
          .then(data => {
            const currentResources = data.filter(r => r.team === id)
            setTeamResources(currentResources)
          })
      })
      .catch(err => {
        console.error('GET FAILED', err);
      })
  }, [])

  useEffect(() => {
    if (!team[0]?.adminsList) setIsAdmin(false);
    if (team[0]?.adminsList?.includes(user.user.id)) setIsAdmin(true);
  }, [team]);

  return (
    <div className="container teamContainer">
      <div className="teamCard teamHero">
        {team.map(t => <div key={t._id}>
          <header>
            <div className="mask"></div>
            <h1>{t.name}</h1>
            {isAdmin && (
              <Button 
                variant="outline-dark" 
                size="sm"
                className="editButton"
              >
                Edit
              </Button>
            )}
          </header>
          <section>
          <div className="meta">
            <div>{t.categoriesList[0]?.name ?? "Category"}</div>
          </div>
          <article><p>{t.description}</p></article>  
          </section>
          
          <ResourceCard teamId={t._id}></ResourceCard>

          {teamResources.map(resource => 
            <p key={resource._id}>{resource.title}</p>
          )}
        </div>)}
      </div>
    </div>
  );
}


export {TeamDetails};