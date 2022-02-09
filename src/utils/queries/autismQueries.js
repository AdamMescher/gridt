import { gql } from '@apollo/client';

const autismQueries = {
  SCHOOLS_AM_F_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_AS_F_POP_AUT
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
  SCHOOLS_WH_F_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_WH_F_POP_AUT
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
  SCHOOLS_AM_F_WH_F_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_AM_F_WH_F_AUT
      }
    }
  `,
  SCHOOLS_AM_M_WH_M_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_AM_M_WH_M_AUT
      }
    }
  `,
  SCHOOLS_AS_F_WH_F_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_AS_F_WH_F_AUT
      }
    }
  `,
  SCHOOLS_AS_M_WH_M_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_AS_M_WH_M_AUT
      }
    }
  `,
  SCHOOLS_BL_F_WH_F_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_BL_F_WH_F_AUT
      }
    }
  `,
  SCHOOLS_BL_M_WH_M_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_BL_M_WH_M_AUT
      }
    }
  `,
  SCHOOLS_HI_F_WH_F_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_HI_F_WH_F_AUT
      }
    }
  `,
  SCHOOLS_HI_M_WH_M_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_HI_M_WH_M_AUT
      }
    }
  `,
  SCHOOLS_HP_F_WH_F_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_HP_F_WH_F_AUT
      }
    }
  `,
  SCHOOLS_HP_M_WH_M_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_HP_M_WH_M_AUT
      }
    }
  `,
  SCHOOLS_TR_F_WH_F_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_TR_F_WH_F_AUT
      }
    }
  `,
  SCHOOLS_TR_M_WH_M_AUT_QUERY: gql`
    query Query($filter: FilterFindManyAutismInput, $limit: Int) {
      autisms(filter: $filter, limit: $limit) {
        RR_TR_M_WH_M_AUT
      }
    }
  `,
};

export default autismQueries;
