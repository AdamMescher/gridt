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
  SCHOOLS_AM_F_WH_F_QUERY: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_AM_F_WH_F
      }
    }
  `,
  SCHOOLS_AM_M_WH_M_QUERY: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_AM_M_WH_M
      }
    }
  `,
  SCHOOLS_AS_F_WH_F_QUERY: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_AS_F_WH_F
      }
    }
  `,
  SCHOOLS_AS_M_WH_M_QUERY: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_AS_M_WH_M
      }
    }
  `,
  SCHOOLS_BL_F_WH_F_QUERY: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_BL_F_WH_F
      }
    }
  `,
  SCHOOLS_BL_M_WH_M_QUERY: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_BL_M_WH_M
      }
    }
  `,
  SCHOOLS_HI_F_WH_F_QUERY: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_HI_F_WH_F
      }
    }
  `,
  SCHOOLS_HI_M_WH_M_QUERY: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_HI_M_WH_M
      }
    }
  `,
  SCHOOLS_HP_F_WH_F_QUERY: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_HP_F_WH_F
      }
    }
  `,
  SCHOOLS_HP_M_WH_M_QUERY: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_HP_M_WH_M
      }
    }
  `,
  SCHOOLS_TR_F_WH_F_QUERY: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_TR_F_WH_F
      }
    }
  `,
  SCHOOLS_TR_M_WH_M_QUERY: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_TR_M_WH_M
      }
    }
  `,
  SCHOOLS_WH_F_WH_F_QUERY: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_WH_F_WH_F
      }
    }
  `,
  SCHOOLS_WH_M_WH_M_QUERY: gql`
    query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {
      schools(filter: $schoolsFilter, limit: $schoolsLimit) {
        RR_WH_M_WH_M
      }
    }
  `,
  SCHOOLS_AM_F_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_AM_F_POP_AUT
      }
    }
  `,
  SCHOOLS_AM_M_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_AM_M_POP_AUT
      }
    }
  `,
  SCHOOLS_AS_F_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_AS_F_POP_AUT
      }
    }
  `,
  SCHOOLS_AS_M_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_AS_M_POP_AUT
      }
    }
  `,
  SCHOOLS_BL_F_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_BL_F_POP_AUT
      }
    }
  `,
  SCHOOLS_BL_M_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_BL_M_POP_AUT
      }
    }
  `,
  SCHOOLS_HI_F_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_HI_F_POP_AUT
      }
    }
  `,
  SCHOOLS_HI_M_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_HI_M_POP_AUT
      }
    }
  `,
  SCHOOLS_HP_F_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_HP_F_POP_AUT
      }
    }
  `,
  SCHOOLS_HP_M_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_HP_M_POP_AUT
      }
    }
  `,
  SCHOOLS_TR_F_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_TR_F_POP_AUT
      }
    }
  `,
  SCHOOLS_TR_M_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_TR_M_POP_AUT
      }
    }
  `,
  SCHOOLS_WH_M_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_WH_M_POP_AUT
      }
    }
  `,
  SCHOOLS_WH_F_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_WH_F_POP_AUT
      }
    }
  `,
  SCHOOLS_AM_F_WH_F_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_AM_F_WH_F_POP_AUT
      }
    }
  `,
  SCHOOLS_AM_M_WH_M_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_AM_M_WH_M_POP_AUT
      }
    }
  `,
  SCHOOLS_AS_F_WH_F_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_AS_F_WH_F_POP_AUT
      }
    }
  `,
  SCHOOLS_AS_M_WH_M_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_AS_M_WH_M_POP_AUT
      }
    }
  `,
  SCHOOLS_BL_F_WH_F_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_BL_F_WH_F_POP_AUT
      }
    }
  `,
  SCHOOLS_BL_M_WH_M_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_BL_M_WH_M_POP_AUT
      }
    }
  `,
  SCHOOLS_HI_F_WH_F_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_HI_F_WH_F_POP_AUT
      }
    }
  `,
  SCHOOLS_HI_M_WH_M_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_HI_M_WH_M_POP_AUT
      }
    }
  `,
  SCHOOLS_HP_F_WH_F_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_HP_F_WH_F_POP_AUT
      }
    }
  `,
  SCHOOLS_HP_M_WH_M_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_HP_M_WH_M_POP_AUT
      }
    }
  `,
  SCHOOLS_TR_F_WH_F_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_TR_F_WH_F_POP_AUT
      }
    }
  `,
  SCHOOLS_TR_M_WH_M_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_TR_M_WH_M_POP_AUT
      }
    }
  `,
  SCHOOLS_AM_F_DD_QUERY: gql`
    query Query($filter: FilterFindManyDevelopmentaldelayInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AS_F_POP_DD
      }
    }
  `,
  SCHOOLS_AM_M_DD_QUERY: gql`
    query Query($filter: FilterFindManyDevelopmentaldelayInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AM_M_POP_DD
      }
    }
  `,
  SCHOOLS_AS_F_DD_QUERY: gql`
    query Query($filter: FilterFindManyDevelopmentaldelayInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AS_F_POP_DD
      }
    }
  `,
  SCHOOLS_AS_M_DD_QUERY: gql`
    query Query($filter: FilterFindManyDevelopmentaldelayInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AS_M_POP_DD
      }
    }
  `,
  SCHOOLS_BL_F_DD_QUERY: gql`
    query Query($filter: FilterFindManyDevelopmentaldelayInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_BL_F_POP_DD
      }
    }
  `,
  SCHOOLS_BL_M_DD_QUERY: gql`
    query Query($filter: FilterFindManyDevelopmentaldelayInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_BL_M_POP_DD
      }
    }
  `,
  SCHOOLS_HI_F_DD_QUERY: gql`
    query Query($filter: FilterFindManyDevelopmentaldelayInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HI_F_POP_DD
      }
    }
  `,
  SCHOOLS_HI_M_DD_QUERY: gql`
    query Query($filter: FilterFindManyDevelopmentaldelayInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HI_M_POP_DD
      }
    }
  `,
  SCHOOLS_HP_F_DD_QUERY: gql`
    query Query($filter: FilterFindManyDevelopmentaldelayInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HP_F_POP_DD
      }
    }
  `,
  SCHOOLS_HP_M_DD_QUERY: gql`
    query Query($filter: FilterFindManyDevelopmentaldelayInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HP_M_POP_DD
      }
    }
  `,
  SCHOOLS_TR_F_DD_QUERY: gql`
    query Query($filter: FilterFindManyDevelopmentaldelayInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_TR_F_POP_DD
      }
    }
  `,
  SCHOOLS_TR_M_DD_QUERY: gql`
    query Query($filter: FilterFindManyDevelopmentaldelayInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_TR_M_POP_DD
      }
    }
  `,
  SCHOOLS_WH_F_DD_QUERY: gql`
    query Query($filter: FilterFindManyDevelopmentaldelayInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_WH_F_POP_DD
      }
    }
  `,
  SCHOOLS_WH_M_DD_QUERY: gql`
    query Query($filter: FilterFindManyDevelopmentaldelayInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_WH_M_POP_DD
      }
    }
  `,
  SCHOOLS_AM_F_WH_F_DD_QUERY: gql`
    query Query($filter: FilterFindManyDevelopmentaldelayInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AM_F_WH_F_DD
      }
    }
  `,
  SCHOOLS_AM_M_WH_M_DD_QUERY: gql`
    query Query($filter: FilterFindManyDevelopmentaldelayInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AM_M_WH_M_DD
      }
    }
  `,
  SCHOOLS_AS_F_WH_F_DD_QUERY: gql`
    query Query($filter: FilterFindManyDevelopmentaldelayInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AS_F_WH_F_DD
      }
    }
  `,
  SCHOOLS_AS_M_WH_M_DD_QUERY: gql`
    query Query($filter: FilterFindManyDevelopmentaldelayInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AS_M_WH_M_DD
      }
    }
  `,
  SCHOOLS_BL_F_WH_F_DD_QUERY: gql`
    query Query($filter: FilterFindManyDevelopmentaldelayInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_BL_F_WH_F_DD
      }
    }
  `,
  SCHOOLS_BL_M_WH_M_DD_QUERY: gql`
    query Query($filter: FilterFindManyDevelopmentaldelayInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_BL_M_WH_M_DD
      }
    }
  `,
  SCHOOLS_HI_F_WH_F_DD_QUERY: gql`
    query Query($filter: FilterFindManyDevelopmentaldelayInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HI_F_WH_F_DD
      }
    }
  `,
  SCHOOLS_HI_M_WH_M_DD_QUERY: gql`
    query Query($filter: FilterFindManyDevelopmentaldelayInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HI_M_WH_M_DD
      }
    }
  `,
  SCHOOLS_HP_F_WH_F_DD_QUERY: gql`
    query Query($filter: FilterFindManyDevelopmentaldelayInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HP_F_WH_F_DD
      }
    }
  `,
  SCHOOLS_HP_M_WH_M_DD_QUERY: gql`
    query Query($filter: FilterFindManyDevelopmentaldelayInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HP_M_WH_M_DD
      }
    }
  `,
  SCHOOLS_TR_F_WH_F_DD_QUERY: gql`
    query Query($filter: FilterFindManyDevelopmentaldelayInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_TR_F_WH_F_DD
      }
    }
  `,
  SCHOOLS_TR_M_WH_M_DD_QUERY: gql`
    query Query($filter: FilterFindManyDevelopmentaldelayInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_TR_M_WH_M_DD
      }
    }
  `,
  SCHOOLS_AM_F_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AS_F_POP_DB
      }
    }
  `,
  SCHOOLS_AM_M_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AM_M_POP_DB
      }
    }
  `,
  SCHOOLS_AS_F_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AS_F_POP_DB
      }
    }
  `,
  SCHOOLS_AS_M_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AS_M_POP_DB
      }
    }
  `,
  SCHOOLS_BL_F_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_BL_F_POP_DB
      }
    }
  `,
  SCHOOLS_BL_M_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_BL_M_POP_DB
      }
    }
  `,
  SCHOOLS_HI_F_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HI_F_POP_DB
      }
    }
  `,
  SCHOOLS_HI_M_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HI_M_POP_DB
      }
    }
  `,
  SCHOOLS_HP_F_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HP_F_POP_DB
      }
    }
  `,
  SCHOOLS_HP_M_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HP_M_POP_DB
      }
    }
  `,
  SCHOOLS_TR_F_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_TR_F_POP_DB
      }
    }
  `,
  SCHOOLS_TR_M_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_TR_M_POP_DB
      }
    }
  `,
  SCHOOLS_WH_F_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_WH_F_POP_DB
      }
    }
  `,
  SCHOOLS_WH_M_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_WH_M_POP_DB
      }
    }
  `,
  SCHOOLS_AM_F_WH_F_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AM_F_WH_F_DB
      }
    }
  `,
  SCHOOLS_AM_M_WH_M_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AM_M_WH_M_DB
      }
    }
  `,
  SCHOOLS_AS_F_WH_F_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AS_F_WH_F_DB
      }
    }
  `,
  SCHOOLS_AS_M_WH_M_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AS_M_WH_M_DB
      }
    }
  `,
  SCHOOLS_BL_F_WH_F_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_BL_F_WH_F_DB
      }
    }
  `,
  SCHOOLS_BL_M_WH_M_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_BL_M_WH_M_DB
      }
    }
  `,
  SCHOOLS_HI_F_WH_F_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HI_F_WH_F_DB
      }
    }
  `,
  SCHOOLS_HI_M_WH_M_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HI_M_WH_M_DB
      }
    }
  `,
  SCHOOLS_HP_F_WH_F_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HP_F_WH_F_DB
      }
    }
  `,
  SCHOOLS_HP_M_WH_M_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HP_M_WH_M_DB
      }
    }
  `,
  SCHOOLS_TR_F_WH_F_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_TR_F_WH_F_DB
      }
    }
  `,
  SCHOOLS_TR_M_WH_M_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_TR_M_WH_M_DB
      }
    }
  `,
  SCHOOLS_AM_F_HI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AS_F_POP_HI
      }
    }
  `,
  SCHOOLS_AM_M_HI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AM_M_POP_HI
      }
    }
  `,
  SCHOOLS_AS_F_HI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AS_F_POP_HI
      }
    }
  `,
  SCHOOLS_AS_M_HI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AS_M_POP_HI
      }
    }
  `,
  SCHOOLS_BL_F_HI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_BL_F_POP_HI
      }
    }
  `,
  SCHOOLS_BL_M_HI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_BL_M_POP_HI
      }
    }
  `,
  SCHOOLS_HI_F_HI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HI_F_POP_HI
      }
    }
  `,
  SCHOOLS_HI_M_HI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HI_M_POP_HI
      }
    }
  `,
  SCHOOLS_HP_F_HI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HP_F_POP_HI
      }
    }
  `,
  SCHOOLS_HP_M_HI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HP_M_POP_HI
      }
    }
  `,
  SCHOOLS_TR_F_HI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_TR_F_POP_HI
      }
    }
  `,
  SCHOOLS_TR_M_HI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_TR_M_POP_HI
      }
    }
  `,
  SCHOOLS_WH_F_HI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_WH_F_POP_HI
      }
    }
  `,
  SCHOOLS_WH_M_HI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_WH_M_POP_HI
      }
    }
  `,
  SCHOOLS_AM_F_WH_F_HI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AM_F_WH_F_HI
      }
    }
  `,
  SCHOOLS_AM_M_WH_M_HI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AM_M_WH_M_HI
      }
    }
  `,
  SCHOOLS_AS_F_WH_F_HI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AS_F_WH_F_HI
      }
    }
  `,
  SCHOOLS_AS_M_WH_M_HI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AS_M_WH_M_HI
      }
    }
  `,
  SCHOOLS_BL_F_WH_F_HI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_BL_F_WH_F_HI
      }
    }
  `,
  SCHOOLS_BL_M_WH_M_HI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_BL_M_WH_M_HI
      }
    }
  `,
  SCHOOLS_HI_F_WH_F_HI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HI_F_WH_F_HI
      }
    }
  `,
  SCHOOLS_HI_M_WH_M_HI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HI_M_WH_M_HI
      }
    }
  `,
  SCHOOLS_HP_F_WH_F_HI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HP_F_WH_F_HI
      }
    }
  `,
  SCHOOLS_HP_M_WH_M_HI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HP_M_WH_M_HI
      }
    }
  `,
  SCHOOLS_TR_F_WH_F_HI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_TR_F_WH_F_HI
      }
    }
  `,
  SCHOOLS_TR_M_WH_M_HI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_TR_M_WH_M_HI
      }
    }
  `,
  SCHOOLS_AM_F_MD_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AS_F_POP_MD
      }
    }
  `,
  SCHOOLS_AM_M_MD_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AM_M_POP_MD
      }
    }
  `,
  SCHOOLS_AS_F_MD_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AS_F_POP_MD
      }
    }
  `,
  SCHOOLS_AS_M_MD_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AS_M_POP_MD
      }
    }
  `,
  SCHOOLS_BL_F_MD_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_BL_F_POP_MD
      }
    }
  `,
  SCHOOLS_BL_M_MD_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_BL_M_POP_MD
      }
    }
  `,
  SCHOOLS_HI_F_MD_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HI_F_POP_MD
      }
    }
  `,
  SCHOOLS_HI_M_MD_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HI_M_POP_MD
      }
    }
  `,
  SCHOOLS_HP_F_MD_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HP_F_POP_MD
      }
    }
  `,
  SCHOOLS_HP_M_MD_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HP_M_POP_MD
      }
    }
  `,
  SCHOOLS_TR_F_MD_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_TR_F_POP_MD
      }
    }
  `,
  SCHOOLS_TR_M_MD_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_TR_M_POP_MD
      }
    }
  `,
  SCHOOLS_WH_F_MD_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_WH_F_POP_MD
      }
    }
  `,
  SCHOOLS_WH_M_MD_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_WH_M_POP_MD
      }
    }
  `,
  SCHOOLS_AM_F_WH_F_MD_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AM_F_WH_F_MD
      }
    }
  `,
  SCHOOLS_AM_M_WH_M_MD_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AM_M_WH_M_MD
      }
    }
  `,
  SCHOOLS_AS_F_WH_F_MD_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AS_F_WH_F_MD
      }
    }
  `,
  SCHOOLS_AS_M_WH_M_MD_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AS_M_WH_M_MD
      }
    }
  `,
  SCHOOLS_BL_F_WH_F_MD_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_BL_F_WH_F_MD
      }
    }
  `,
  SCHOOLS_BL_M_WH_M_MD_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_BL_M_WH_M_MD
      }
    }
  `,
  SCHOOLS_HI_F_WH_F_MD_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HI_F_WH_F_MD
      }
    }
  `,
  SCHOOLS_HI_M_WH_M_MD_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HI_M_WH_M_MD
      }
    }
  `,
  SCHOOLS_HP_F_WH_F_MD_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HP_F_WH_F_MD
      }
    }
  `,
  SCHOOLS_HP_M_WH_M_MD_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HP_M_WH_M_MD
      }
    }
  `,
  SCHOOLS_TR_F_WH_F_MD_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_TR_F_WH_F_MD
      }
    }
  `,
  SCHOOLS_TR_M_WH_M_MD_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_TR_M_WH_M_MD
      }
    }
  `,
  SCHOOLS_AM_F_MR_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AS_F_POP_MR
      }
    }
  `,
  SCHOOLS_AM_M_MR_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AM_M_POP_MR
      }
    }
  `,
  SCHOOLS_AS_F_MR_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AS_F_POP_MR
      }
    }
  `,
  SCHOOLS_AS_M_MR_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AS_M_POP_MR
      }
    }
  `,
  SCHOOLS_BL_F_MR_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_BL_F_POP_MR
      }
    }
  `,
  SCHOOLS_BL_M_MR_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_BL_M_POP_MR
      }
    }
  `,
  SCHOOLS_HI_F_MR_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HI_F_POP_MR
      }
    }
  `,
  SCHOOLS_HI_M_MR_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HI_M_POP_MR
      }
    }
  `,
  SCHOOLS_HP_F_MR_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HP_F_POP_MR
      }
    }
  `,
  SCHOOLS_HP_M_MR_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HP_M_POP_MR
      }
    }
  `,
  SCHOOLS_TR_F_MR_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_TR_F_POP_MR
      }
    }
  `,
  SCHOOLS_TR_M_MR_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_TR_M_POP_MR
      }
    }
  `,
  SCHOOLS_WH_F_MR_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_WH_F_POP_MR
      }
    }
  `,
  SCHOOLS_WH_M_MR_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_WH_M_POP_MR
      }
    }
  `,
  SCHOOLS_AM_F_WH_F_MR_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AM_F_WH_F_MR
      }
    }
  `,
  SCHOOLS_AM_M_WH_M_MR_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AM_M_WH_M_MR
      }
    }
  `,
  SCHOOLS_AS_F_WH_F_MR_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AS_F_WH_F_MR
      }
    }
  `,
  SCHOOLS_AS_M_WH_M_MR_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AS_M_WH_M_MR
      }
    }
  `,
  SCHOOLS_BL_F_WH_F_MR_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_BL_F_WH_F_MR
      }
    }
  `,
  SCHOOLS_BL_M_WH_M_MR_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_BL_M_WH_M_MR
      }
    }
  `,
  SCHOOLS_HI_F_WH_F_MR_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HI_F_WH_F_MR
      }
    }
  `,
  SCHOOLS_HI_M_WH_M_MR_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HI_M_WH_M_MR
      }
    }
  `,
  SCHOOLS_HP_F_WH_F_MR_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HP_F_WH_F_MR
      }
    }
  `,
  SCHOOLS_HP_M_WH_M_MR_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HP_M_WH_M_MR
      }
    }
  `,
  SCHOOLS_TR_F_WH_F_MR_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_TR_F_WH_F_MR
      }
    }
  `,
  SCHOOLS_TR_M_WH_M_MR_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_TR_M_WH_M_MR
      }
    }
  `,
  SCHOOLS_AM_F_OI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AS_F_POP_OI
      }
    }
  `,
  SCHOOLS_AM_M_OI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AM_M_POP_OI
      }
    }
  `,
  SCHOOLS_AS_F_OI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AS_F_POP_OI
      }
    }
  `,
  SCHOOLS_AS_M_OI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AS_M_POP_OI
      }
    }
  `,
  SCHOOLS_BL_F_OI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_BL_F_POP_OI
      }
    }
  `,
  SCHOOLS_BL_M_OI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_BL_M_POP_OI
      }
    }
  `,
  SCHOOLS_HI_F_OI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HI_F_POP_OI
      }
    }
  `,
  SCHOOLS_HI_M_OI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HI_M_POP_OI
      }
    }
  `,
  SCHOOLS_HP_F_OI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HP_F_POP_OI
      }
    }
  `,
  SCHOOLS_HP_M_OI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HP_M_POP_OI
      }
    }
  `,
  SCHOOLS_TR_F_OI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_TR_F_POP_OI
      }
    }
  `,
  SCHOOLS_TR_M_OI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_TR_M_POP_OI
      }
    }
  `,
  SCHOOLS_WH_F_OI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_WH_F_POP_OI
      }
    }
  `,
  SCHOOLS_WH_M_OI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_WH_M_POP_OI
      }
    }
  `,
  SCHOOLS_AM_F_WH_F_OI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AM_F_WH_F_OI
      }
    }
  `,
  SCHOOLS_AM_M_WH_M_OI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AM_M_WH_M_OI
      }
    }
  `,
  SCHOOLS_AS_F_WH_F_OI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AS_F_WH_F_OI
      }
    }
  `,
  SCHOOLS_AS_M_WH_M_OI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_AS_M_WH_M_OI
      }
    }
  `,
  SCHOOLS_BL_F_WH_F_OI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_BL_F_WH_F_OI
      }
    }
  `,
  SCHOOLS_BL_M_WH_M_OI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_BL_M_WH_M_OI
      }
    }
  `,
  SCHOOLS_HI_F_WH_F_OI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HI_F_WH_F_OI
      }
    }
  `,
  SCHOOLS_HI_M_WH_M_OI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HI_M_WH_M_OI
      }
    }
  `,
  SCHOOLS_HP_F_WH_F_OI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HP_F_WH_F_OI
      }
    }
  `,
  SCHOOLS_HP_M_WH_M_OI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_HP_M_WH_M_OI
      }
    }
  `,
  SCHOOLS_TR_F_WH_F_OI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_TR_F_WH_F_OI
      }
    }
  `,
  SCHOOLS_TR_M_WH_M_OI_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      developmentaldelays(filter: $filter, limit: $limit) {
        RR_TR_M_WH_M_OI
      }
    }
  `,
};

export default queries;
