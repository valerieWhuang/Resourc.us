import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useUserContext } from '../StateProvider';


const ResourceCardPage = () => {
   const { id } = useParams();
  console.log(id)

  const [resource, setResource] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/resource/${id}`, {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setResource(data);
      })
      .catch((err) => {
        console.log('Get Fail', err);
      });

  }, [])
  console.log(resource);
  return (
    <>
      <div>{resource.link}</div>
      <div>{resource.description}</div>
    </>
  )
}

export default ResourceCardPage;