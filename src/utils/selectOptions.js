const selectOptions = {
  genderOptions: [
    { value: 'F', label: 'Female', type: 'gender' },
    { value: 'M', label: 'Male', type: 'gender' },
  ],
  raceOptions: [
    { value: 'AM', label: 'American Indian / Alaskan Native', type: 'race' },
    { value: 'AS', label: 'Asian', type: 'race' },
    { value: 'BL', label: 'Black', type: 'race' },
    { value: 'HI', label: 'Hispanic', type: 'race' },
    { value: 'HP', label: 'Pacific Islander', type: 'race' },
    { value: 'TR', label: 'Two or More Races', type: 'race' },
    { value: 'WH', label: 'White', type: 'race' },
  ],
  disabilityOptions: [
    { value: 'AUT', label: 'Autism', type: 'disability' },
    { value: 'DD', label: 'Deafness', type: 'disability' },
    { value: 'DB', label: 'Deaf-Blindness', type: 'disability' },
    { value: 'HI', label: 'Hearing Impairment', type: 'disability' },
    { value: 'MD', label: 'multiple disabilities', type: 'disability' },
    { value: 'MR', label: 'mr', type: 'disability' },
    { value: 'OI', label: 'orthopedic impairment', type: 'disability' },
    { value: 'OHI', label: 'other health impairment', type: 'disability' },
    { value: 'SLD', label: 'specific learning disability', type: 'disability' },
    {
      value: 'SLI',
      label: 'speech or language impairment',
      type: 'disability',
    },
    { value: 'EMN', label: 'emotional disturbance', type: 'disability' },
    { value: 'TBI', label: 'traumatic brain injury', type: 'disability' },
  ],
};

export default selectOptions;
