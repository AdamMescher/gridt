import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GendersList from '../GendersList';

const App = () => {
  const [genders, setGenders] = useState([]);
  const [races, setRaces] = useState([]);
  const [disabilities, setDisabilites] = useState([]);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [schools, setSchools] = useState([]);
  useEffect(() => {
    const fetchGenders = async () => {
      const gendersResult = await axios.get(
        'http://localhost:3333/api/v1/genders',
      );
      setGenders(gendersResult.data.genders);
    };
    const fetchRaces = async () => {
        const racesResult = await axios.get(
          'http://localhost:3333/api/v1/races',
        );
        setGenders(racesResult.data.races);
      };
    fetchGenders();
  }, []);

  return (
    <div>
      <h1>Adam</h1>
      {genders.length > 1 ? <GendersList genders={genders} /> : <div>nope</div>}
    </div>
  );
};

export default App;
