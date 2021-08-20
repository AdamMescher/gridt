import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [genders, setGenders] = useState([]);
  const [races, setRaces] = useState([]);
  const [disabilities, setDisabilites] = useState([]);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  // const [schools, setSchools] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const fetchGenders = async () => {
      const gendersResult = await axios.get(
        'http://localhost:3333/api/v1/genders',
      );
      setGenders(gendersResult.data.genders);
    };
    const fetchRaces = async () => {
      const racesResult = await axios.get('http://localhost:3333/api/v1/races');
      setRaces(racesResult.data.races);
    };
    const fetchDisabilities = async () => {
      const disabilitiesResult = await axios.get(
        'http://localhost:3333/api/v1/disabilities',
      );
      setDisabilites(disabilitiesResult.data.disabilities);
    };
    const fetchStates = async () => {
      const statesResult = await axios.get(
        'http://localhost:3333/api/v1/states',
      );
      setStates(statesResult.data.states);
    };
    const fetchDistricts = async () => {
      const districtsResult = await axios.get(
        'http://localhost:3333/api/v1/districts',
      );
      setDistricts(districtsResult.data.districts);
    };
    fetchGenders();
    fetchRaces();
    fetchDisabilities();
    fetchStates();
    fetchDistricts();
  }, []);

  return (
    <div>
      <h1>GRIDT</h1>
      {genders.length > 1 ? (
        <h2>{`Total Genders: ${genders.length}`}</h2>
      ) : (
        <h2>{`Total Genders: Loading...`}</h2>
      )}
      {races.length > 1 ? (
        <h2>{`Total races: ${races.length}`}</h2>
      ) : (
        <h2>{`Total races: Loading...`}</h2>
      )}
      {disabilities.length > 1 ? (
        <h2>{`Total disabilities: ${disabilities.length}`}</h2>
      ) : (
        <h2>{`Total disabilities: Loading...`}</h2>
      )}
      {states.length > 1 ? (
        <h2>{`Total states: ${states.length}`}</h2>
      ) : (
        <h2>{`Total states: Loading...`}</h2>
      )}
      {districts.length > 1 ? (
        <h2>{`Total districts: ${districts.length}`}</h2>
      ) : (
        <h2>{`Total districts: Loading...`}</h2>
      )}
      <form>
        <input type="text" placeholder="school name" onChange={handleChange} />
        <input
          type="submit"
          onClick={async (event) => {
            event.preventDefault();
            // query DB with search term
            console.log('BUTTON CLICKED!');
            const searchResult = await axios.get(
              `http://localhost:3333/api/v1/schools?text=${searchTerm}&limit=10`,
            );
            console.log(searchTerm);
            console.log(searchResult);
          }}
        />
      </form>
    </div>
  );
};

export default App;
