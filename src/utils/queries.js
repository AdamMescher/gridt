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
  SCHOOLS_AM_F_DD_QUERY: gql``,
  SCHOOLS_AM_M_DD_QUERY: gql``,
  SCHOOLS_AS_F_DD_QUERY: gql``,
  SCHOOLS_AS_M_DD_QUERY: gql``,
  SCHOOLS_BL_F_DD_QUERY: gql``,
  SCHOOLS_BL_M_DD_QUERY: gql``,
  SCHOOLS_HI_F_DD_QUERY: gql``,
  SCHOOLS_HI_M_DD_QUERY: gql``,
  SCHOOLS_HP_F_DD_QUERY: gql``,
  SCHOOLS_HP_M_DD_QUERY: gql``,
  SCHOOLS_TR_F_DD_QUERY: gql``,
  SCHOOLS_TR_M_DD_QUERY: gql``,
  SCHOOLS_WH_F_DD_QUERY: gql``,
  SCHOOLS_WH_M_DD_QUERY: gql``,
};

export default queries;
