import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useUserContext } from '../StateProvider';


const ResourceCardPage = () => {
   const { id } = useParams();
  console.log(id)

  useEffect( () => {

  }, [])
  return (
    <div></div>
  )
}

export default ResourceCardPage;