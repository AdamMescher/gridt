import asyncSelectQueries from './queries/asyncSelect/asyncSelectQueries';

const setTypeAndQueryFromDisability = (disability) => {
  let type;
  let query;
  switch (disability.value) {
    case 'AUT':
      type = 'autisms';
      query = asyncSelectQueries.AUTISMS_BY_NAME_ASYNCSELECT;
      return { type, query };
    case 'DB':
      type = 'deafblindnesses';
      query = asyncSelectQueries.DEAF_BLINDNESSES_BY_NAME_ASNYCSELECT;
      return { type, query };
    case 'DD':
      type = 'developmentaldelays';
      query = asyncSelectQueries.DEVELOPMENTAL_DELAYS_BY_NAME_ASYNCSELECT;
      return { type, query };
    case 'HI':
      type = 'hearingimpairments';
      query = asyncSelectQueries.HEARING_IMPAIRMENTS_BY_NAME_ASYNCSELECT;
      return { type, query };
    case 'EMN':
      type = 'emotionaldisturbances';
      query = asyncSelectQueries.EMOTIONAL_DISTURBANCES_BY_NAME_ASYNCSELECT;
      return { type, query };
    case 'MD':
      type = 'multipledisabilities';
      query = asyncSelectQueries.MULTIPLE_DISABILITIES_BY_NAME_ASYNCSELECT;
      return { type, query };
    case 'MR':
      type = 'intellectualdisabilities';
      query = asyncSelectQueries.INTELLECTUAL_DISABILITIES_BY_NAME_ASYNCSELECT;
      return { type, query };
    case 'OI':
      type = 'orthopedicimpairments';
      query = asyncSelectQueries.ORTHOPEDIC_IMPAIRMENTS_BY_NAME_ASYNCSELECT;
      return { type, query };
    case 'OHI':
      type = 'otherhealthimpairments';
      query = asyncSelectQueries.OTHER_HEALTH_IMPAIRMENTS_BY_NAME_ASYNCSELECT;
      return { type, query };
    case 'SLD':
      type = 'specificlearningdisabilities';
      query =
        asyncSelectQueries.SPECIFIC_LEARNING_DISABILITIES_BY_NAME_ASYNCSELECT;
      return { type, query };
    case 'SLI':
      type = 'speechlanguageimpairments';
      query =
        asyncSelectQueries.SPEECH_LANGUAGE_IMPAIRMENTS_BY_NAME_ASYNCSELECT;
      return { type, query };
    case 'TBI':
      type = 'traumaticbraininjuries';
      query = asyncSelectQueries.TRAUMATIC_BRAIN_INJURIES_BY_NAME_ASYNCSELECT;
      return { type, query };
    case 'VI':
      type = 'visualimpairments';
      query = asyncSelectQueries.VISUAL_IMPAIRMENTS_BY_NAME_ASYNCSELECT;
      return { type, query };
    default:
      type = 'schools';
      query = asyncSelectQueries.SCHOOLS_BY_NAME_ASNYCSELECT;
      return { type, query };
  }
};

export default setTypeAndQueryFromDisability;
