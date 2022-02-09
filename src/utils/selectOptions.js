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
  raceOptionsWhiteComparison: [
    { value: 'AM', label: 'American Indian / Alaskan Native' },
    { value: 'AS', label: 'Asian' },
    { value: 'BL', label: 'Black' },
    { value: 'HI', label: 'Hispanic' },
    { value: 'HP', label: 'Pacific Islander' },
    { value: 'TR', label: 'Two or More Races' },
  ],
  disabilityOptions: [
    { value: 'AUT', label: 'Autism' },
    { value: 'DD', label: 'Developmental Delay' },
    { value: 'DB', label: 'Deaf-Blindness' },
    { value: 'HI', label: 'Hearing Impairment' },
    { value: 'MD', label: 'Multiple Disabilities' },
    { value: 'MR', label: 'Intellectual Disability' },
    { value: 'OI', label: 'Orthopedic Impairment' },
    { value: 'OHI', label: 'Other Health Impairment' },
    { value: 'SLD', label: 'Specific Learning Disability' },
    {
      value: 'SLI',
      label: 'Speech or Language Impairment',
    },
    { value: 'EMN', label: 'Emotional Disturbance' },
    { value: 'TBI', label: 'Traumatic Brain Injury' },
  ],
};

export default selectOptions;
