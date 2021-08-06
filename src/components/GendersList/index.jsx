import React from 'react';

const Gender = ({ gender }) => (
  <div>
    <h3>Gender</h3>
    <p>{`ID: ${gender.id}`}</p>
    <p>{`Name: ${gender.name}`}</p>
    <p>{`Abbreviation: ${gender.abbreviation}`}</p>
  </div>
);

const GendersList = ({ genders }) =>
  genders.map((gender) => <Gender gender={gender} />);

export default GendersList;
