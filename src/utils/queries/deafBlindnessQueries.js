import { gql } from '@apollo/client';

const deafBlindnessQueries = {
  SCHOOLS_AM_F_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      deafblindnesses(filter: $filter, limit: $limit) {
        RR_AS_F_POP_DB
      }
    }
  `,
  SCHOOLS_AM_M_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      deafblindnesses(filter: $filter, limit: $limit) {
        RR_AM_M_POP_DB
      }
    }
  `,
  SCHOOLS_AS_F_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      deafblindnesses(filter: $filter, limit: $limit) {
        RR_AS_F_POP_DB
      }
    }
  `,
  SCHOOLS_AS_M_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      deafblindnesses(filter: $filter, limit: $limit) {
        RR_AS_M_POP_DB
      }
    }
  `,
  SCHOOLS_BL_F_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      deafblindnesses(filter: $filter, limit: $limit) {
        RR_BL_F_POP_DB
      }
    }
  `,
  SCHOOLS_BL_M_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      deafblindnesses(filter: $filter, limit: $limit) {
        RR_BL_M_POP_DB
      }
    }
  `,
  SCHOOLS_HI_F_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      deafblindnesses(filter: $filter, limit: $limit) {
        RR_HI_F_POP_DB
      }
    }
  `,
  SCHOOLS_HI_M_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      deafblindnesses(filter: $filter, limit: $limit) {
        RR_HI_M_POP_DB
      }
    }
  `,
  SCHOOLS_HP_F_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      deafblindnesses(filter: $filter, limit: $limit) {
        RR_HP_F_POP_DB
      }
    }
  `,
  SCHOOLS_HP_M_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      deafblindnesses(filter: $filter, limit: $limit) {
        RR_HP_M_POP_DB
      }
    }
  `,
  SCHOOLS_TR_F_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      deafblindnesses(filter: $filter, limit: $limit) {
        RR_TR_F_POP_DB
      }
    }
  `,
  SCHOOLS_TR_M_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      deafblindnesses(filter: $filter, limit: $limit) {
        RR_TR_M_POP_DB
      }
    }
  `,
  SCHOOLS_WH_F_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      deafblindnesses(filter: $filter, limit: $limit) {
        RR_WH_F_POP_DB
      }
    }
  `,
  SCHOOLS_WH_M_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      deafblindnesses(filter: $filter, limit: $limit) {
        RR_WH_M_POP_DB
      }
    }
  `,
  SCHOOLS_AM_F_WH_F_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      deafblindnesses(filter: $filter, limit: $limit) {
        RR_AM_F_WH_F_DB
      }
    }
  `,
  SCHOOLS_AM_M_WH_M_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      deafblindnesses(filter: $filter, limit: $limit) {
        RR_AM_M_WH_M_DB
      }
    }
  `,
  SCHOOLS_AS_F_WH_F_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      deafblindnesses(filter: $filter, limit: $limit) {
        RR_AS_F_WH_F_DB
      }
    }
  `,
  SCHOOLS_AS_M_WH_M_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      deafblindnesses(filter: $filter, limit: $limit) {
        RR_AS_M_WH_M_DB
      }
    }
  `,
  SCHOOLS_BL_F_WH_F_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      deafblindnesses(filter: $filter, limit: $limit) {
        RR_BL_F_WH_F_DB
      }
    }
  `,
  SCHOOLS_BL_M_WH_M_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      deafblindnesses(filter: $filter, limit: $limit) {
        RR_BL_M_WH_M_DB
      }
    }
  `,
  SCHOOLS_HI_F_WH_F_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      deafblindnesses(filter: $filter, limit: $limit) {
        RR_HI_F_WH_F_DB
      }
    }
  `,
  SCHOOLS_HI_M_WH_M_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      deafblindnesses(filter: $filter, limit: $limit) {
        RR_HI_M_WH_M_DB
      }
    }
  `,
  SCHOOLS_HP_F_WH_F_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      deafblindnesses(filter: $filter, limit: $limit) {
        RR_HP_F_WH_F_DB
      }
    }
  `,
  SCHOOLS_HP_M_WH_M_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      deafblindnesses(filter: $filter, limit: $limit) {
        RR_HP_M_WH_M_DB
      }
    }
  `,
  SCHOOLS_TR_F_WH_F_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      deafblindnesses(filter: $filter, limit: $limit) {
        RR_TR_F_WH_F_DB
      }
    }
  `,
  SCHOOLS_TR_M_WH_M_DB_QUERY: gql`
    query Query($filter: FilterFindManyDeafblindnessInput, $limit: Int) {
      deafblindnesses(filter: $filter, limit: $limit) {
        RR_TR_M_WH_M_DB
      }
    }
  `,
};

export default deafBlindnessQueries;
