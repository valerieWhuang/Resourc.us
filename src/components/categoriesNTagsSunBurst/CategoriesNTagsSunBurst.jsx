import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SunBurstChart } from '../SunBurstChart';
import {data as mockData} from "./mockData";

const CategoriesNTagsSunBurst = () => {
  const [sunBurstData, setSunBurstData] = useState({});

  const getCategoriesStats = async () => {
    try {
      const {data} = await axios.get("http://localhost:3000/categories/list");
      console.log(data);
      const obj = {
        name: "Categories & Tags",
        color: "hsl(57, 70%, 50%)",
        children: [],
      };
      data.forEach(({mentionCount, name}) => {
        obj.children.push({
          name,
          color: "hsl(294, 70%, 50%)", // Replace this color values with random generated color that matches the team background color
          loc: mentionCount,
        });
      });
      setSunBurstData(obj);
    } catch (e) {
      console.error(e);
    }
  };

  const getTagsStats = async () => {
    try {
      const {data} = await axios.get("http://localhost:3000/tags/list");
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getCategoriesStats();
    getTagsStats();
  }, []);

  console.log("sunBurstData --> ", sunBurstData);

  return (
    <SunBurstChart 
      data={mockData} 
    />
  );
};

export {CategoriesNTagsSunBurst};