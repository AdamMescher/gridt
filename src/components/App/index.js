import { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const api = {
    getGenders: 'http://localhost:3333/api/v1/genders',
    getRaces: 'http://localhost:3333/api/v1/races',
    getDisabilities: 'http://localhost:3333/api/v1/disabilities',
    getDistricts: 'http://localhost:3333/api/v1/districts',
    getSchools: 'http://localhost:3333/api/v1/schools',
  };

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [genders, setGenders] = useState({ genders: [] });
  const [races, setRaces] = useState({ races: [] });
  const [disabilities, setDisabilities] = useState({ disabilities: [] });
  const [districts, setDistricts] = useState({ districts: [] });
  const [schools, setSchools] = useState({ schools: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        if (localStorage.getItem('genders')) {
          setGenders(JSON.parse(localStorage.getItem('genders')));
        } else {
          const gendersResult = await axios(api.getGenders);
          localStorage.setItem(
            'genders',
            JSON.stringify(gendersResult.data.genders),
          );
          setGenders(gendersResult.data.genders);
        }
        if (localStorage.getItem('races')) {
          setRaces(JSON.parse(localStorage.getItem('races')));
        } else {
          const racesResult = await axios(api.getGenders);
          localStorage.setItem('races', JSON.stringify(racesResult.data.races));
          setRaces(racesResult.data.races);
        }
        if (localStorage.getItem('disabilities')) {
          setDisabilities(JSON.parse(localStorage.getItem('disabilities')));
        } else {
          const disabilitiesResult = await axios(api.getDisabilities);
          localStorage.setItem(
            'disabilities',
            JSON.stringify(disabilitiesResult.data.disabilities),
          );
          setDisabilities(disabilitiesResult.data.disabilities);
        }
        if (localStorage.getItem('disctricts')) {
          setDistricts(JSON.parse(localStorage.getItem('districts')));
        } else {
          const districtsResult = await axios(api.getDistricts);
          localStorage.setItem(
            'districts',
            JSON.stringify(districtsResult.data.districts),
          );
        }
        if (localStorage.getItem('schools').length > 0) {
          console.log('IN IF');
          setSchools(JSON.parse(localStorage.getItem('schools')));
        } else {
          console.log('LOADING SCHOOLS...');
          const schoolsResult = await axios(api.getSchools);
          localStorage.setItem(
            'schools',
            JSON.stringify(schoolsResult.data.schools),
          );
          console.log('DONE LOADING SCHOOLS');
        }
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>GRIDT</h1>
      {isError && <div>Something went wrong...</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h2>Genders</h2>
          {genders.length
            ? genders.map((gender) => <li key={uuidv4()}>{gender.name}</li>)
            : null}
          <h2>Races</h2>
          {races.length
            ? races.map((race) => <li key={uuidv4()}>{race.name}</li>)
            : null}
          <h2>Disabilities</h2>
          {disabilities.length
            ? disabilities.map((disability) => (
                <li key={uuidv4()}>{disability.name}</li>
              ))
            : null}
          <h2>
            {districts.length ? `Districts: ${districts.length}` : `Districts`}
          </h2>
          <h2>{schools.length ? `Schools: ${schools.length}` : `Schools`}</h2>
        </>
      )}
    </div>
  );
}

export default App;
