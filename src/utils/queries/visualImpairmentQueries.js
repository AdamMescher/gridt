import { gql } from '@apollo/client';

const visualImapirmentQueries = {
  SCHOOLS_AM_F_VI_QUERY: gql`
    query Query($filter: FilterFindManyVisualimpairmentInput, $limit: Int) {
      visualimpairments(filter: $filter, limit: $limit) {
        RR_AS_F_POP_VI
      }
    }
  `,
  SCHOOLS_AM_M_VI_QUERY: gql`
    query Query($filter: FilterFindManyVisualimpairmentInput, $limit: Int) {
      visualimpairments(filter: $filter, limit: $limit) {
        RR_AM_M_POP_VI
      }
    }
  `,
  SCHOOLS_AS_F_VI_QUERY: gql`
    query Query($filter: FilterFindManyVisualimpairmentInput, $limit: Int) {
      visualimpairments(filter: $filter, limit: $limit) {
        RR_AS_F_POP_VI
      }
    }
  `,
  SCHOOLS_AS_M_VI_QUERY: gql`
    query Query($filter: FilterFindManyVisualimpairmentInput, $limit: Int) {
      visualimpairments(filter: $filter, limit: $limit) {
        RR_AS_M_POP_VI
      }
    }
  `,
  SCHOOLS_BL_F_VI_QUERY: gql`
    query Query($filter: FilterFindManyVisualimpairmentInput, $limit: Int) {
      visualimpairments(filter: $filter, limit: $limit) {
        RR_BL_F_POP_VI
      }
    }
  `,
  SCHOOLS_BL_M_VI_QUERY: gql`
    query Query($filter: FilterFindManyVisualimpairmentInput, $limit: Int) {
      visualimpairments(filter: $filter, limit: $limit) {
        RR_BL_M_POP_VI
      }
    }
  `,
  SCHOOLS_HI_F_VI_QUERY: gql`
    query Query($filter: FilterFindManyVisualimpairmentInput, $limit: Int) {
      visualimpairments(filter: $filter, limit: $limit) {
        RR_HI_F_POP_VI
      }
    }
  `,
  SCHOOLS_HI_M_VI_QUERY: gql`
    query Query($filter: FilterFindManyVisualimpairmentInput, $limit: Int) {
      visualimpairments(filter: $filter, limit: $limit) {
        RR_HI_M_POP_VI
      }
    }
  `,
  SCHOOLS_HP_F_VI_QUERY: gql`
    query Query($filter: FilterFindManyVisualimpairmentInput, $limit: Int) {
      visualimpairments(filter: $filter, limit: $limit) {
        RR_HP_F_POP_VI
      }
    }
  `,
  SCHOOLS_HP_M_VI_QUERY: gql`
    query Query($filter: FilterFindManyVisualimpairmentInput, $limit: Int) {
      visualimpairments(filter: $filter, limit: $limit) {
        RR_HP_M_POP_VI
      }
    }
  `,
  SCHOOLS_TR_F_VI_QUERY: gql`
    query Query($filter: FilterFindManyVisualimpairmentInput, $limit: Int) {
      visualimpairments(filter: $filter, limit: $limit) {
        RR_TR_F_POP_VI
      }
    }
  `,
  SCHOOLS_TR_M_VI_QUERY: gql`
    query Query($filter: FilterFindManyVisualimpairmentInput, $limit: Int) {
      visualimpairments(filter: $filter, limit: $limit) {
        RR_TR_M_POP_VI
      }
    }
  `,
  SCHOOLS_WH_F_VI_QUERY: gql`
    query Query($filter: FilterFindManyVisualimpairmentInput, $limit: Int) {
      visualimpairments(filter: $filter, limit: $limit) {
        RR_WH_F_POP_VI
      }
    }
  `,
  SCHOOLS_WH_M_VI_QUERY: gql`
    query Query($filter: FilterFindManyVisualimpairmentInput, $limit: Int) {
      visualimpairments(filter: $filter, limit: $limit) {
        RR_WH_M_POP_VI
      }
    }
  `,
  SCHOOLS_AM_F_WH_F_VI_QUERY: gql`
    query Query($filter: FilterFindManyVisualimpairmentInput, $limit: Int) {
      visualimpairments(filter: $filter, limit: $limit) {
        RR_AM_F_WH_F_VI
      }
    }
  `,
  SCHOOLS_AM_M_WH_M_VI_QUERY: gql`
    query Query($filter: FilterFindManyVisualimpairmentInput, $limit: Int) {
      visualimpairments(filter: $filter, limit: $limit) {
        RR_AM_M_WH_M_VI
      }
    }
  `,
  SCHOOLS_AS_F_WH_F_VI_QUERY: gql`
    query Query($filter: FilterFindManyVisualimpairmentInput, $limit: Int) {
      visualimpairments(filter: $filter, limit: $limit) {
        RR_AS_F_WH_F_VI
      }
    }
  `,
  SCHOOLS_AS_M_WH_M_VI_QUERY: gql`
    query Query($filter: FilterFindManyVisualimpairmentInput, $limit: Int) {
      visualimpairments(filter: $filter, limit: $limit) {
        RR_AS_M_WH_M_VI
      }
    }
  `,
  SCHOOLS_BL_F_WH_F_VI_QUERY: gql`
    query Query($filter: FilterFindManyVisualimpairmentInput, $limit: Int) {
      visualimpairments(filter: $filter, limit: $limit) {
        RR_BL_F_WH_F_VI
      }
    }
  `,
  SCHOOLS_BL_M_WH_M_VI_QUERY: gql`
    query Query($filter: FilterFindManyVisualimpairmentInput, $limit: Int) {
      visualimpairments(filter: $filter, limit: $limit) {
        RR_BL_M_WH_M_VI
      }
    }
  `,
  SCHOOLS_HI_F_WH_F_VI_QUERY: gql`
    query Query($filter: FilterFindManyVisualimpairmentInput, $limit: Int) {
      visualimpairments(filter: $filter, limit: $limit) {
        RR_HI_F_WH_F_VI
      }
    }
  `,
  SCHOOLS_HI_M_WH_M_VI_QUERY: gql`
    query Query($filter: FilterFindManyVisualimpairmentInput, $limit: Int) {
      visualimpairments(filter: $filter, limit: $limit) {
        RR_HI_M_WH_M_VI
      }
    }
  `,
  SCHOOLS_HP_F_WH_F_VI_QUERY: gql`
    query Query($filter: FilterFindManyVisualimpairmentInput, $limit: Int) {
      visualimpairments(filter: $filter, limit: $limit) {
        RR_HP_F_WH_F_VI
      }
    }
  `,
  SCHOOLS_HP_M_WH_M_VI_QUERY: gql`
    query Query($filter: FilterFindManyVisualimpairmentInput, $limit: Int) {
      visualimpairments(filter: $filter, limit: $limit) {
        RR_HP_M_WH_M_VI
      }
    }
  `,
  SCHOOLS_TR_F_WH_F_VI_QUERY: gql`
    query Query($filter: FilterFindManyVisualimpairmentInput, $limit: Int) {
      visualimpairments(filter: $filter, limit: $limit) {
        RR_TR_F_WH_F_VI
      }
    }
  `,
  SCHOOLS_TR_M_WH_M_VI_QUERY: gql`
    query Query($filter: FilterFindManyVisualimpairmentInput, $limit: Int) {
      visualimpairments(filter: $filter, limit: $limit) {
        RR_TR_M_WH_M_VI
      }
    }
  `,
};

export default visualImapirmentQueries;
