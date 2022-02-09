import { gql } from '@apollo/client';

const hearingImpairmentQueries = {
  SCHOOLS_AM_F_HI_QUERY: gql`
    query Query($filter: FilterFindManyHearingimpairmentInput, $limit: Int) {
      hearingimpairments(filter: $filter, limit: $limit) {
        RR_AS_F_POP_HI
      }
    }
  `,
  SCHOOLS_AM_M_HI_QUERY: gql`
    query Query($filter: FilterFindManyHearingimpairmentInput, $limit: Int) {
      hearingimpairments(filter: $filter, limit: $limit) {
        RR_AM_M_POP_HI
      }
    }
  `,
  SCHOOLS_AS_F_HI_QUERY: gql`
    query Query($filter: FilterFindManyHearingimpairmentInput, $limit: Int) {
      hearingimpairments(filter: $filter, limit: $limit) {
        RR_AS_F_POP_HI
      }
    }
  `,
  SCHOOLS_AS_M_HI_QUERY: gql`
    query Query($filter: FilterFindManyHearingimpairmentInput, $limit: Int) {
      hearingimpairments(filter: $filter, limit: $limit) {
        RR_AS_M_POP_HI
      }
    }
  `,
  SCHOOLS_BL_F_HI_QUERY: gql`
    query Query($filter: FilterFindManyHearingimpairmentInput, $limit: Int) {
      hearingimpairments(filter: $filter, limit: $limit) {
        RR_BL_F_POP_HI
      }
    }
  `,
  SCHOOLS_BL_M_HI_QUERY: gql`
    query Query($filter: FilterFindManyHearingimpairmentInput, $limit: Int) {
      hearingimpairments(filter: $filter, limit: $limit) {
        RR_BL_M_POP_HI
      }
    }
  `,
  SCHOOLS_HI_F_HI_QUERY: gql`
    query Query($filter: FilterFindManyHearingimpairmentInput, $limit: Int) {
      hearingimpairments(filter: $filter, limit: $limit) {
        RR_HI_F_POP_HI
      }
    }
  `,
  SCHOOLS_HI_M_HI_QUERY: gql`
    query Query($filter: FilterFindManyHearingimpairmentInput, $limit: Int) {
      hearingimpairments(filter: $filter, limit: $limit) {
        RR_HI_M_POP_HI
      }
    }
  `,
  SCHOOLS_HP_F_HI_QUERY: gql`
    query Query($filter: FilterFindManyHearingimpairmentInput, $limit: Int) {
      hearingimpairments(filter: $filter, limit: $limit) {
        RR_HP_F_POP_HI
      }
    }
  `,
  SCHOOLS_HP_M_HI_QUERY: gql`
    query Query($filter: FilterFindManyHearingimpairmentInput, $limit: Int) {
      hearingimpairments(filter: $filter, limit: $limit) {
        RR_HP_M_POP_HI
      }
    }
  `,
  SCHOOLS_TR_F_HI_QUERY: gql`
    query Query($filter: FilterFindManyHearingimpairmentInput, $limit: Int) {
      hearingimpairments(filter: $filter, limit: $limit) {
        RR_TR_F_POP_HI
      }
    }
  `,
  SCHOOLS_TR_M_HI_QUERY: gql`
    query Query($filter: FilterFindManyHearingimpairmentInput, $limit: Int) {
      hearingimpairments(filter: $filter, limit: $limit) {
        RR_TR_M_POP_HI
      }
    }
  `,
  SCHOOLS_WH_F_HI_QUERY: gql`
    query Query($filter: FilterFindManyHearingimpairmentInput, $limit: Int) {
      hearingimpairments(filter: $filter, limit: $limit) {
        RR_WH_F_POP_HI
      }
    }
  `,
  SCHOOLS_WH_M_HI_QUERY: gql`
    query Query($filter: FilterFindManyHearingimpairmentInput, $limit: Int) {
      hearingimpairments(filter: $filter, limit: $limit) {
        RR_WH_M_POP_HI
      }
    }
  `,
  SCHOOLS_AM_F_WH_F_HI_QUERY: gql`
    query Query($filter: FilterFindManyHearingimpairmentInput, $limit: Int) {
      hearingimpairments(filter: $filter, limit: $limit) {
        RR_AM_F_WH_F_HI
      }
    }
  `,
  SCHOOLS_AM_M_WH_M_HI_QUERY: gql`
    query Query($filter: FilterFindManyHearingimpairmentInput, $limit: Int) {
      hearingimpairments(filter: $filter, limit: $limit) {
        RR_AM_M_WH_M_HI
      }
    }
  `,
  SCHOOLS_AS_F_WH_F_HI_QUERY: gql`
    query Query($filter: FilterFindManyHearingimpairmentInput, $limit: Int) {
      hearingimpairments(filter: $filter, limit: $limit) {
        RR_AS_F_WH_F_HI
      }
    }
  `,
  SCHOOLS_AS_M_WH_M_HI_QUERY: gql`
    query Query($filter: FilterFindManyHearingimpairmentInput, $limit: Int) {
      hearingimpairments(filter: $filter, limit: $limit) {
        RR_AS_M_WH_M_HI
      }
    }
  `,
  SCHOOLS_BL_F_WH_F_HI_QUERY: gql`
    query Query($filter: FilterFindManyHearingimpairmentInput, $limit: Int) {
      hearingimpairments(filter: $filter, limit: $limit) {
        RR_BL_F_WH_F_HI
      }
    }
  `,
  SCHOOLS_BL_M_WH_M_HI_QUERY: gql`
    query Query($filter: FilterFindManyHearingimpairmentInput, $limit: Int) {
      hearingimpairments(filter: $filter, limit: $limit) {
        RR_BL_M_WH_M_HI
      }
    }
  `,
  SCHOOLS_HI_F_WH_F_HI_QUERY: gql`
    query Query($filter: FilterFindManyHearingimpairmentInput, $limit: Int) {
      hearingimpairments(filter: $filter, limit: $limit) {
        RR_HI_F_WH_F_HI
      }
    }
  `,
  SCHOOLS_HI_M_WH_M_HI_QUERY: gql`
    query Query($filter: FilterFindManyHearingimpairmentInput, $limit: Int) {
      hearingimpairments(filter: $filter, limit: $limit) {
        RR_HI_M_WH_M_HI
      }
    }
  `,
  SCHOOLS_HP_F_WH_F_HI_QUERY: gql`
    query Query($filter: FilterFindManyHearingimpairmentInput, $limit: Int) {
      hearingimpairments(filter: $filter, limit: $limit) {
        RR_HP_F_WH_F_HI
      }
    }
  `,
  SCHOOLS_HP_M_WH_M_HI_QUERY: gql`
    query Query($filter: FilterFindManyHearingimpairmentInput, $limit: Int) {
      hearingimpairments(filter: $filter, limit: $limit) {
        RR_HP_M_WH_M_HI
      }
    }
  `,
  SCHOOLS_TR_F_WH_F_HI_QUERY: gql`
    query Query($filter: FilterFindManyHearingimpairmentInput, $limit: Int) {
      hearingimpairments(filter: $filter, limit: $limit) {
        RR_TR_F_WH_F_HI
      }
    }
  `,
  SCHOOLS_TR_M_WH_M_HI_QUERY: gql`
    query Query($filter: FilterFindManyHearingimpairmentInput, $limit: Int) {
      hearingimpairments(filter: $filter, limit: $limit) {
        RR_TR_M_WH_M_HI
      }
    }
  `,
};

export default hearingImpairmentQueries;
