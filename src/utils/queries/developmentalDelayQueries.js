import { gql } from '@apollo/client';

const developmentalDelayQueries = {
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
};

export default developmentalDelayQueries;
