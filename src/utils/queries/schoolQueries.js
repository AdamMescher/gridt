import { gql } from '@apollo/client';

const schoolQueries = {
  SCHOOLS_AM_F_TOTAL_QUERY: gql`
    query SCHOOLS_AM_F_TOTAL_QUERY(
      $filter: FilterFindManySchoolInput
      $limit: Int
    ) {
      schools(filter: $filter, limit: $limit) {
        RR_AM_F_POP
      }
    }
  `,
  SCHOOLS_AM_M_TOTAL_QUERY: gql`
    query SCHOOLS_AM_M_TOTAL_QUERY(
      $filter: FilterFindManySchoolInput
      $limit: Int
    ) {
      schools(filter: $filter, limit: $limit) {
        RR_AM_M_POP
      }
    }
  `,
  SCHOOLS_AS_F_TOTAL_QUERY: gql`
    query Query($filter: FilterFindManySchoolInput, $limit: Int) {
      schools(filter: $filter, limit: $limit) {
        RR_AS_F_POP
      }
    }
  `,
  SCHOOLS_AS_M_TOTAL_QUERY: gql`
    query Query($filter: FilterFindManySchoolInput, $limit: Int) {
      schools(filter: $filter, limit: $limit) {
        RR_AS_M_POP
      }
    }
  `,
  SCHOOLS_BL_F_TOTAL_QUERY: gql`
    query Query($filter: FilterFindManySchoolInput, $limit: Int) {
      schools(filter: $filter, limit: $limit) {
        RR_BL_F_POP
      }
    }
  `,
  SCHOOLS_BL_M_TOTAL_QUERY: gql`
    query Query($filter: FilterFindManySchoolInput, $limit: Int) {
      schools(filter: $filter, limit: $limit) {
        RR_BL_M_POP
      }
    }
  `,
  SCHOOLS_HI_F_TOTAL_QUERY: gql`
    query Query($filter: FilterFindManySchoolInput, $limit: Int) {
      schools(filter: $filter, limit: $limit) {
        RR_HI_F_POP
      }
    }
  `,
  SCHOOLS_HI_M_TOTAL_QUERY: gql`
    query Query($filter: FilterFindManySchoolInput, $limit: Int) {
      schools(filter: $filter, limit: $limit) {
        RR_HI_M_POP
      }
    }
  `,
  SCHOOLS_HP_F_TOTAL_QUERY: gql`
    query Query($filter: FilterFindManySchoolInput, $limit: Int) {
      schools(filter: $filter, limit: $limit) {
        RR_HP_F_POP
      }
    }
  `,
  SCHOOLS_HP_M_TOTAL_QUERY: gql`
    query Query($filter: FilterFindManySchoolInput, $limit: Int) {
      schools(filter: $filter, limit: $limit) {
        RR_HP_M_POP
      }
    }
  `,
  SCHOOLS_TR_F_TOTAL_QUERY: gql`
    query Query($filter: FilterFindManySchoolInput, $limit: Int) {
      schools(filter: $filter, limit: $limit) {
        RR_TR_F_POP
      }
    }
  `,
  SCHOOLS_TR_M_TOTAL_QUERY: gql`
    query Query($filter: FilterFindManySchoolInput, $limit: Int) {
      schools(filter: $filter, limit: $limit) {
        RR_TR_M_POP
      }
    }
  `,
  SCHOOLS_WH_F_TOTAL_QUERY: gql`
    query Query($filter: FilterFindManySchoolInput, $limit: Int) {
      schools(filter: $filter, limit: $limit) {
        RR_WH_F_POP
      }
    }
  `,
  SCHOOLS_WH_M_TOTAL_QUERY: gql`
    query Query($filter: FilterFindManySchoolInput, $limit: Int) {
      schools(filter: $filter, limit: $limit) {
        RR_WH_M_POP
      }
    }
  `,
  SCHOOLS_AM_F_WH_F_TOTAL_QUERY: gql`
    query Query($filter: FilterFindManySchoolInput, $limit: Int) {
      schools(filter: $filter, limit: $limit) {
        RR_AM_F_WH_F
      }
    }
  `,
  SCHOOLS_AM_M_WH_M_TOTAL_QUERY: gql`
    query Query($filter: FilterFindManySchoolInput, $limit: Int) {
      schools(filter: $filter, limit: $limit) {
        RR_AM_M_WH_M
      }
    }
  `,
  SCHOOLS_AS_F_WH_F_TOTAL_QUERY: gql`
    query Query($filter: FilterFindManySchoolInput, $limit: Int) {
      schools(filter: $filter, limit: $limit) {
        RR_AS_F_WH_F
      }
    }
  `,
  SCHOOLS_AS_M_WH_M_TOTAL_QUERY: gql`
    query Query($filter: FilterFindManySchoolInput, $limit: Int) {
      schools(filter: $filter, limit: $limit) {
        RR_AS_M_WH_M
      }
    }
  `,
  SCHOOLS_BL_F_WH_F_TOTAL_QUERY: gql`
    query Query($filter: FilterFindManySchoolInput, $limit: Int) {
      schools(filter: $filter, limit: $limit) {
        RR_BL_F_WH_F
      }
    }
  `,
  SCHOOLS_BL_M_WH_M_TOTAL_QUERY: gql`
    query Query($filter: FilterFindManySchoolInput, $limit: Int) {
      schools(filter: $filter, limit: $limit) {
        RR_BL_M_WH_M
      }
    }
  `,
  SCHOOLS_HI_F_WH_F_TOTAL_QUERY: gql`
    query Query($filter: FilterFindManySchoolInput, $limit: Int) {
      schools(filter: $filter, limit: $limit) {
        RR_HI_F_WH_F
      }
    }
  `,
  SCHOOLS_HI_M_WH_M_TOTAL_QUERY: gql`
    query Query($filter: FilterFindManySchoolInput, $limit: Int) {
      schools(filter: $filter, limit: $limit) {
        RR_HI_M_WH_M
      }
    }
  `,
  SCHOOLS_HP_F_WH_F_TOTAL_QUERY: gql`
    query Query($filter: FilterFindManySchoolInput, $limit: Int) {
      schools(filter: $filter, limit: $limit) {
        RR_HP_F_WH_F
      }
    }
  `,
  SCHOOLS_HP_M_WH_M_TOTAL_QUERY: gql`
    query Query($filter: FilterFindManySchoolInput, $limit: Int) {
      schools(filter: $filter, limit: $limit) {
        RR_HP_M_WH_M
      }
    }
  `,
  SCHOOLS_TR_F_WH_F_TOTAL_QUERY: gql`
    query Query($filter: FilterFindManySchoolInput, $limit: Int) {
      schools(filter: $filter, limit: $limit) {
        RR_TR_F_WH_F
      }
    }
  `,
  SCHOOLS_TR_M_WH_M_TOTAL_QUERY: gql`
    query Query($filter: FilterFindManySchoolInput, $limit: Int) {
      schools(filter: $filter, limit: $limit) {
        RR_TR_M_WH_M
      }
    }
  `,
  SCHOOLS_WH_F_WH_F_TOTAL_QUERY: gql`
    query Query($filter: FilterFindManySchoolInput, $limit: Int) {
      schools(filter: $filter, limit: $limit) {
        RR_WH_F_WH_F
      }
    }
  `,
  SCHOOLS_WH_M_WH_M_TOTAL_QUERY: gql`
    query Query($filter: FilterFindManySchoolInput, $limit: Int) {
      schools(filter: $filter, limit: $limit) {
        RR_WH_M_WH_M
      }
    }
  `,
};

export default schoolQueries;
