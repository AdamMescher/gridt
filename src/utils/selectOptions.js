const selectOptions = {
  genderOptions: [
    { value: 'F', label: 'Female' },
    { value: 'M', label: 'Male' },
  ],
  raceOptions: [
    { value: 'AM', label: 'American Indian / Alaskan Native' },
    { value: 'AS', label: 'Asian' },
    { value: 'BL', label: 'Black' },
    { value: 'HI', label: 'Hispanic' },
    { value: 'HP', label: 'Pacific Islander' },
    { value: 'TR', label: 'Two or More Races' },
    { value: 'WH', label: 'White' },
  ],
  disabilityOptions: [
    { value: 'AUT', label: 'Autism' },
    { value: 'DD', label: 'Deafness' },
    { value: 'DB', label: 'Deaf-Blindness' },
    { value: 'HI', label: 'Hearing Impairment' },
    { value: 'MD', label: 'multiple disabilities' },
    { value: 'MR', label: 'mr' },
    { value: 'OI', label: 'orthopedic impairment' },
    { value: 'OHI', label: 'other health impairment' },
    { value: 'SLD', label: 'specific learning disability' },
    {
      value: 'SLI',
      label: 'speech or language impairment',
    },
    { value: 'EMN', label: 'emotional disturbance' },
    { value: 'TBI', label: 'traumatic brain injury' },
  ],
};

export default selectOptions;
