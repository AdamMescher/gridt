import { gql } from '@apollo/client';

const multipleDisabilityQueries = {
  SCHOOLS_AM_F_MD_QUERY: gql`
    query Query($filter: FilterFindManyMultipledisabilityInput, $limit: Int) {
      multipledisabilities(filter: $filter, limit: $limit) {
        RR_AS_F_POP_MD
      }
    }
  `,
  SCHOOLS_AM_M_MD_QUERY: gql`
    query Query($filter: FilterFindManyMultipledisabilityInput, $limit: Int) {
      multipledisabilities(filter: $filter, limit: $limit) {
        RR_AM_M_POP_MD
      }
    }
  `,
  SCHOOLS_AS_F_MD_QUERY: gql`
    query Query($filter: FilterFindManyMultipledisabilityInput, $limit: Int) {
      multipledisabilities(filter: $filter, limit: $limit) {
        RR_AS_F_POP_MD
      }
    }
  `,
  SCHOOLS_AS_M_MD_QUERY: gql`
    query Query($filter: FilterFindManyMultipledisabilityInput, $limit: Int) {
      multipledisabilities(filter: $filter, limit: $limit) {
        RR_AS_M_POP_MD
      }
    }
  `,
  SCHOOLS_BL_F_MD_QUERY: gql`
    query Query($filter: FilterFindManyMultipledisabilityInput, $limit: Int) {
      multipledisabilities(filter: $filter, limit: $limit) {
        RR_BL_F_POP_MD
      }
    }
  `,
  SCHOOLS_BL_M_MD_QUERY: gql`
    query Query($filter: FilterFindManyMultipledisabilityInput, $limit: Int) {
      multipledisabilities(filter: $filter, limit: $limit) {
        RR_BL_M_POP_MD
      }
    }
  `,
  SCHOOLS_HI_F_MD_QUERY: gql`
    query Query($filter: FilterFindManyMultipledisabilityInput, $limit: Int) {
      multipledisabilities(filter: $filter, limit: $limit) {
        RR_HI_F_POP_MD
      }
    }
  `,
  SCHOOLS_HI_M_MD_QUERY: gql`
    query Query($filter: FilterFindManyMultipledisabilityInput, $limit: Int) {
      multipledisabilities(filter: $filter, limit: $limit) {
        RR_HI_M_POP_MD
      }
    }
  `,
  SCHOOLS_HP_F_MD_QUERY: gql`
    query Query($filter: FilterFindManyMultipledisabilityInput, $limit: Int) {
      multipledisabilities(filter: $filter, limit: $limit) {
        RR_HP_F_POP_MD
      }
    }
  `,
  SCHOOLS_HP_M_MD_QUERY: gql`
    query Query($filter: FilterFindManyMultipledisabilityInput, $limit: Int) {
      multipledisabilities(filter: $filter, limit: $limit) {
        RR_HP_M_POP_MD
      }
    }
  `,
  SCHOOLS_TR_F_MD_QUERY: gql`
    query Query($filter: FilterFindManyMultipledisabilityInput, $limit: Int) {
      multipledisabilities(filter: $filter, limit: $limit) {
        RR_TR_F_POP_MD
      }
    }
  `,
  SCHOOLS_TR_M_MD_QUERY: gql`
    query Query($filter: FilterFindManyMultipledisabilityInput, $limit: Int) {
      multipledisabilities(filter: $filter, limit: $limit) {
        RR_TR_M_POP_MD
      }
    }
  `,
  SCHOOLS_WH_F_MD_QUERY: gql`
    query Query($filter: FilterFindManyMultipledisabilityInput, $limit: Int) {
      multipledisabilities(filter: $filter, limit: $limit) {
        RR_WH_F_POP_MD
      }
    }
  `,
  SCHOOLS_WH_M_MD_QUERY: gql`
    query Query($filter: FilterFindManyMultipledisabilityInput, $limit: Int) {
      multipledisabilities(filter: $filter, limit: $limit) {
        RR_WH_M_POP_MD
      }
    }
  `,
  SCHOOLS_AM_F_WH_F_MD_QUERY: gql`
    query Query($filter: FilterFindManyMultipledisabilityInput, $limit: Int) {
      multipledisabilities(filter: $filter, limit: $limit) {
        RR_AM_F_WH_F_MD
      }
    }
  `,
  SCHOOLS_AM_M_WH_M_MD_QUERY: gql`
    query Query($filter: FilterFindManyMultipledisabilityInput, $limit: Int) {
      multipledisabilities(filter: $filter, limit: $limit) {
        RR_AM_M_WH_M_MD
      }
    }
  `,
  SCHOOLS_AS_F_WH_F_MD_QUERY: gql`
    query Query($filter: FilterFindManyMultipledisabilityInput, $limit: Int) {
      multipledisabilities(filter: $filter, limit: $limit) {
        RR_AS_F_WH_F_MD
      }
    }
  `,
  SCHOOLS_AS_M_WH_M_MD_QUERY: gql`
    query Query($filter: FilterFindManyMultipledisabilityInput, $limit: Int) {
      multipledisabilities(filter: $filter, limit: $limit) {
        RR_AS_M_WH_M_MD
      }
    }
  `,
  SCHOOLS_BL_F_WH_F_MD_QUERY: gql`
    query Query($filter: FilterFindManyMultipledisabilityInput, $limit: Int) {
      multipledisabilities(filter: $filter, limit: $limit) {
        RR_BL_F_WH_F_MD
      }
    }
  `,
  SCHOOLS_BL_M_WH_M_MD_QUERY: gql`
    query Query($filter: FilterFindManyMultipledisabilityInput, $limit: Int) {
      multipledisabilities(filter: $filter, limit: $limit) {
        RR_BL_M_WH_M_MD
      }
    }
  `,
  SCHOOLS_HI_F_WH_F_MD_QUERY: gql`
    query Query($filter: FilterFindManyMultipledisabilityInput, $limit: Int) {
      multipledisabilities(filter: $filter, limit: $limit) {
        RR_HI_F_WH_F_MD
      }
    }
  `,
  SCHOOLS_HI_M_WH_M_MD_QUERY: gql`
    query Query($filter: FilterFindManyMultipledisabilityInput, $limit: Int) {
      multipledisabilities(filter: $filter, limit: $limit) {
        RR_HI_M_WH_M_MD
      }
    }
  `,
  SCHOOLS_HP_F_WH_F_MD_QUERY: gql`
    query Query($filter: FilterFindManyMultipledisabilityInput, $limit: Int) {
      multipledisabilities(filter: $filter, limit: $limit) {
        RR_HP_F_WH_F_MD
      }
    }
  `,
  SCHOOLS_HP_M_WH_M_MD_QUERY: gql`
    query Query($filter: FilterFindManyMultipledisabilityInput, $limit: Int) {
      multipledisabilities(filter: $filter, limit: $limit) {
        RR_HP_M_WH_M_MD
      }
    }
  `,
  SCHOOLS_TR_F_WH_F_MD_QUERY: gql`
    query Query($filter: FilterFindManyMultipledisabilityInput, $limit: Int) {
      multipledisabilities(filter: $filter, limit: $limit) {
        RR_TR_F_WH_F_MD
      }
    }
  `,
  SCHOOLS_TR_M_WH_M_MD_QUERY: gql`
    query Query($filter: FilterFindManyMultipledisabilityInput, $limit: Int) {
      multipledisabilities(filter: $filter, limit: $limit) {
        RR_TR_M_WH_M_MD
      }
    }
  `,
};

export default multipleDisabilityQueries;
