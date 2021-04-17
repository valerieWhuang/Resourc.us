import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useUserContext } from '../../StateProvider';

// Route this page
// Render resource
// Put request to upvote and downvote

function ResourceCard({ teamId }) {
  const [_resource, setResource] = useState([]);
  const [count, setCount] = useState(0);
  const [comments, setComments] = useState({});
  const [fetchedComments, setFetchedComments] = useState([]);
  // const [_upvote, setUpvote] = useState({});
  const _payload = { "teamId": teamId }
  const { user } = useUserContext();

  useEffect(() => {
    fetch("http://localhost:3000/resource/list", {
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
        setResource(data)
      })
      .catch((err) => {
        console.error("Post Fail", err);
      });
  }, [count]);

  useEffect(() => {
    fetch('http://localhost:3000/comment/list', {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((data) =>{
        setFetchedComments(data)
      })
      .catch((err) => {
        console.error("Get Fail", err)
      })


  }, [])

  //get resource id
  //get current resource vote
  //update state
  function handleUpvote(event) {
    event.preventDefault();
    const id = event.target.id;
    // const parent = document.getElementById(id);
    // const teamid = parent.getAttribute("value");
    // const link = parent.getAttribute("link");
    // const votes = Number(parent.getAttribute("votes"));
    const votes = Number(event.target.getAttribute('votes'));
    const payload = {
      "_id": id,
      "votes": votes,
      "upvote": true
    }
    // POST the payload to database
    fetch("http://localhost:3000/resource/upvote", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const newResource = _resource;
        for (let i = 0; i < newResource.length; i++) {
          if (newResource[i].link === data.link) {
            newResource[i] = data;
          }
        }
        setCount(count + 1);
        setResource(newResource)
      })
      .catch((err) => {
        console.error("Post Fail", err);
      });
  }

  function handleDownvote(event) {
    event.preventDefault();
    const id = event.target.id;

    // const parent = document.getElementById(id);
    // const teamid = parent.getAttribute("value");
    // const link = parent.getAttribute("link");
    // const votes = Number(parent.getAttribute("votes"));
    const votes = Number(event.target.getAttribute('votes'));
    const payload = {
      "_id": id,
      "votes": votes,
      "upvote": false
    }
    // POST the payload to database
    fetch("http://localhost:3000/resource/upvote", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const newResource = _resource;
        for (let i = 0; i < newResource.length; i++) {
          if (newResource[i].link === data.link) {
            newResource[i] = data;
          }
        }
        setCount(count + 1);
        setResource(newResource)
      })
      .catch((err) => {
        console.error("Post Fail", err);
      });
  }

  function handleSubmitComment(e, resourceId) {
    e.preventDefault();
    fetch('http://localhost:3000/comment/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: comments[resourceId],
        postedBy: user.id,
        resourceId
      }),
    });
  }

  return (
    <div className="container">
      {_resource.map((resource) => (
        <div key={resource._id}>
          <div className="resourceCard">
            <div className="votes">
              <div className="voteCount">{resource.votes}</div>
              <div className="actions">
                <button>
                  <i
                    onClick={handleUpvote}
                    votes={resource.votes}
                    id={resource._id}
                    className="bx bxs-upvote"
                  ></i>
                </button>
                <button>
                  <i
                    onClick={handleDownvote}
                    votes={resource.votes}
                    id={resource._id}
                    className="bx bxs-downvote"
                  ></i>
                </button>
              </div>
            </div>
            <div className="link">
              <Link to={`resources/${resource._id}`}>{resource.link}</Link>
            </div>
          </div>
          <div className="comments">
            <div>
              {user.id && (
                <form>
                  Comments
                  <input
                    placeholder="Add comment"
                    value={comments[resource._id]}
                    onChange={(e) =>
                      setComments({
                        ...comments,
                        [resource._id]: e.target.value,
                      })
                    }
                  />
                  <button onClick={(e) => handleSubmitComment(e, resource._id)}>
                    comment
                  </button>
                </form>
              )}
            </div>
            {fetchedComments
              .filter((fetchedComment) => {
                return fetchedComment.resourceId === resource._id;
              })
              .map((filteredComment) => {
                return <div key={filteredComment._id}>{`${filteredComment.message} posted by ${filteredComment.postedBy}`}</div>;
              })}
          </div>
        </div>
      ))}
    </div>
  );
}

export {ResourceCard};

// const parent = document.getElementById("ethan");
    // const teamid = parent.getAttribute("value");
    // const link = parent.getAttribute("link");

    // const newUpvote = _upvote;
    // newUpvote.link = link;
    // newUpvote.teamId = teamid;
    // newUpvote.votes = 0;
    // newUpvote.upvote = true;
    // setUpvote(newUpvote);


// {_resource.map((resource) => (
//   <div
//     id="ethan"
//     className="teamCard"
//     value={resource.teamid}
//     key={resource._id}
//     link={resource.link}
//   >
//     <h1>{resource.link}</h1>
//     <h1>{resource.votes}</h1>
//     <button onClick={handleVote}>Upvote</button>
//     <button>Downvote</button>
//   </div>
// ))}
