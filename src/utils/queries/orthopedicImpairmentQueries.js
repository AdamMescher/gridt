import { gql } from '@apollo/client';

const orthopedicImpairmentQueries = {
  SCHOOLS_AM_F_OI_QUERY: gql`
    query Query($filter: FilterFindManyOrthopedicimpairmentInput, $limit: Int) {
      orthopedicimpairments(filter: $filter, limit: $limit) {
        RR_AS_F_POP_OI
      }
    }
  `,
  SCHOOLS_AM_M_OI_QUERY: gql`
    query Query($filter: FilterFindManyOrthopedicimpairmentInput, $limit: Int) {
      orthopedicimpairments(filter: $filter, limit: $limit) {
        RR_AM_M_POP_OI
      }
    }
  `,
  SCHOOLS_AS_F_OI_QUERY: gql`
    query Query($filter: FilterFindManyOrthopedicimpairmentInput, $limit: Int) {
      orthopedicimpairments(filter: $filter, limit: $limit) {
        RR_AS_F_POP_OI
      }
    }
  `,
  SCHOOLS_AS_M_OI_QUERY: gql`
    query Query($filter: FilterFindManyOrthopedicimpairmentInput, $limit: Int) {
      orthopedicimpairments(filter: $filter, limit: $limit) {
        RR_AS_M_POP_OI
      }
    }
  `,
  SCHOOLS_BL_F_OI_QUERY: gql`
    query Query($filter: FilterFindManyOrthopedicimpairmentInput, $limit: Int) {
      orthopedicimpairments(filter: $filter, limit: $limit) {
        RR_BL_F_POP_OI
      }
    }
  `,
  SCHOOLS_BL_M_OI_QUERY: gql`
    query Query($filter: FilterFindManyOrthopedicimpairmentInput, $limit: Int) {
      orthopedicimpairments(filter: $filter, limit: $limit) {
        RR_BL_M_POP_OI
      }
    }
  `,
  SCHOOLS_HI_F_OI_QUERY: gql`
    query Query($filter: FilterFindManyOrthopedicimpairmentInput, $limit: Int) {
      orthopedicimpairments(filter: $filter, limit: $limit) {
        RR_HI_F_POP_OI
      }
    }
  `,
  SCHOOLS_HI_M_OI_QUERY: gql`
    query Query($filter: FilterFindManyOrthopedicimpairmentInput, $limit: Int) {
      orthopedicimpairments(filter: $filter, limit: $limit) {
        RR_HI_M_POP_OI
      }
    }
  `,
  SCHOOLS_HP_F_OI_QUERY: gql`
    query Query($filter: FilterFindManyOrthopedicimpairmentInput, $limit: Int) {
      orthopedicimpairments(filter: $filter, limit: $limit) {
        RR_HP_F_POP_OI
      }
    }
  `,
  SCHOOLS_HP_M_OI_QUERY: gql`
    query Query($filter: FilterFindManyOrthopedicimpairmentInput, $limit: Int) {
      orthopedicimpairments(filter: $filter, limit: $limit) {
        RR_HP_M_POP_OI
      }
    }
  `,
  SCHOOLS_TR_F_OI_QUERY: gql`
    query Query($filter: FilterFindManyOrthopedicimpairmentInput, $limit: Int) {
      orthopedicimpairments(filter: $filter, limit: $limit) {
        RR_TR_F_POP_OI
      }
    }
  `,
  SCHOOLS_TR_M_OI_QUERY: gql`
    query Query($filter: FilterFindManyOrthopedicimpairmentInput, $limit: Int) {
      orthopedicimpairments(filter: $filter, limit: $limit) {
        RR_TR_M_POP_OI
      }
    }
  `,
  SCHOOLS_WH_F_OI_QUERY: gql`
    query Query($filter: FilterFindManyOrthopedicimpairmentInput, $limit: Int) {
      orthopedicimpairments(filter: $filter, limit: $limit) {
        RR_WH_F_POP_OI
      }
    }
  `,
  SCHOOLS_WH_M_OI_QUERY: gql`
    query Query($filter: FilterFindManyOrthopedicimpairmentInput, $limit: Int) {
      orthopedicimpairments(filter: $filter, limit: $limit) {
        RR_WH_M_POP_OI
      }
    }
  `,
  SCHOOLS_AM_F_WH_F_OI_QUERY: gql`
    query Query($filter: FilterFindManyOrthopedicimpairmentInput, $limit: Int) {
      orthopedicimpairments(filter: $filter, limit: $limit) {
        RR_AM_F_WH_F_OI
      }
    }
  `,
  SCHOOLS_AM_M_WH_M_OI_QUERY: gql`
    query Query($filter: FilterFindManyOrthopedicimpairmentInput, $limit: Int) {
      orthopedicimpairments(filter: $filter, limit: $limit) {
        RR_AM_M_WH_M_OI
      }
    }
  `,
  SCHOOLS_AS_F_WH_F_OI_QUERY: gql`
    query Query($filter: FilterFindManyOrthopedicimpairmentInput, $limit: Int) {
      orthopedicimpairments(filter: $filter, limit: $limit) {
        RR_AS_F_WH_F_OI
      }
    }
  `,
  SCHOOLS_AS_M_WH_M_OI_QUERY: gql`
    query Query($filter: FilterFindManyOrthopedicimpairmentInput, $limit: Int) {
      orthopedicimpairments(filter: $filter, limit: $limit) {
        RR_AS_M_WH_M_OI
      }
    }
  `,
  SCHOOLS_BL_F_WH_F_OI_QUERY: gql`
    query Query($filter: FilterFindManyOrthopedicimpairmentInput, $limit: Int) {
      orthopedicimpairments(filter: $filter, limit: $limit) {
        RR_BL_F_WH_F_OI
      }
    }
  `,
  SCHOOLS_BL_M_WH_M_OI_QUERY: gql`
    query Query($filter: FilterFindManyOrthopedicimpairmentInput, $limit: Int) {
      orthopedicimpairments(filter: $filter, limit: $limit) {
        RR_BL_M_WH_M_OI
      }
    }
  `,
  SCHOOLS_HI_F_WH_F_OI_QUERY: gql`
    query Query($filter: FilterFindManyOrthopedicimpairmentInput, $limit: Int) {
      orthopedicimpairments(filter: $filter, limit: $limit) {
        RR_HI_F_WH_F_OI
      }
    }
  `,
  SCHOOLS_HI_M_WH_M_OI_QUERY: gql`
    query Query($filter: FilterFindManyOrthopedicimpairmentInput, $limit: Int) {
      orthopedicimpairments(filter: $filter, limit: $limit) {
        RR_HI_M_WH_M_OI
      }
    }
  `,
  SCHOOLS_HP_F_WH_F_OI_QUERY: gql`
    query Query($filter: FilterFindManyOrthopedicimpairmentInput, $limit: Int) {
      orthopedicimpairments(filter: $filter, limit: $limit) {
        RR_HP_F_WH_F_OI
      }
    }
  `,
  SCHOOLS_HP_M_WH_M_OI_QUERY: gql`
    query Query($filter: FilterFindManyOrthopedicimpairmentInput, $limit: Int) {
      orthopedicimpairments(filter: $filter, limit: $limit) {
        RR_HP_M_WH_M_OI
      }
    }
  `,
  SCHOOLS_TR_F_WH_F_OI_QUERY: gql`
    query Query($filter: FilterFindManyOrthopedicimpairmentInput, $limit: Int) {
      orthopedicimpairments(filter: $filter, limit: $limit) {
        RR_TR_F_WH_F_OI
      }
    }
  `,
  SCHOOLS_TR_M_WH_M_OI_QUERY: gql`
    query Query($filter: FilterFindManyOrthopedicimpairmentInput, $limit: Int) {
      orthopedicimpairments(filter: $filter, limit: $limit) {
        RR_TR_M_WH_M_OI
      }
    }
  `,
};

export default orthopedicImpairmentQueries;
