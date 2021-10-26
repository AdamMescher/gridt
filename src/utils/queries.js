import { gql } from '@apollo/client';

const queries = {
  SCHOOLS_AM_F_QUERY: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_AM_F_POP
      }
    }
  `,
  SCHOOLS_AM_M_QUERY: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_AM_M_POP
      }
    }
  `,
  SCHOOLS_AS_F_QUERY: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_AS_F_POP
      }
    }
  `,
  SCHOOLS_AS_M_QUERY: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_AS_M_POP
      }
    }
  `,
  SCHOOLS_BL_F_QUERY: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_BL_F_POP
      }
    }
  `,
  SCHOOLS_BL_M_QUERY: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_BL_M_POP
      }
    }
  `,
  SCHOOLS_HI_F_QUERY: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_HI_F_POP
      }
    }
  `,
  SCHOOLS_HI_M_QUERY: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_HI_M_POP
      }
    }
  `,
  SCHOOLS_HP_F_QUERY: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_HP_F_POP
      }
    }
  `,
  SCHOOLS_HP_M_QUERY: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_HP_M_POP
      }
    }
  `,
  SCHOOLS_TR_F_QUERY: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_TR_F_POP
      }
    }
  `,
  SCHOOLS_TR_M_QUERY: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_TR_M_POP
      }
    }
  `,
  SCHOOLS_WH_F_QUERY: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_WH_F_POP
      }
    }
  `,
  SCHOOLS_WH_M_QUERY: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_WH_M_POP
      }
    }
  `,
};

export default queries;