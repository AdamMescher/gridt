import { gql } from '@apollo/client';

const emotionalDisturbanceQueries = {
  SCHOOLS_AM_F_EMN_QUERY: gql`
    query Query($filter: FilterFindManyEmotionaldisturbanceInput, $limit: Int) {
      emotionaldisturbances(filter: $filter, limit: $limit) {
        RR_AS_F_POP_EMN
      }
    }
  `,
  SCHOOLS_AM_M_EMN_QUERY: gql`
    query Query($filter: FilterFindManyEmotionaldisturbanceInput, $limit: Int) {
      emotionaldisturbances(filter: $filter, limit: $limit) {
        RR_AM_M_POP_EMN
      }
    }
  `,
  SCHOOLS_AS_F_EMN_QUERY: gql`
    query Query($filter: FilterFindManyEmotionaldisturbanceInput, $limit: Int) {
      emotionaldisturbances(filter: $filter, limit: $limit) {
        RR_AS_F_POP_EMN
      }
    }
  `,
  SCHOOLS_AS_M_EMN_QUERY: gql`
    query Query($filter: FilterFindManyEmotionaldisturbanceInput, $limit: Int) {
      emotionaldisturbances(filter: $filter, limit: $limit) {
        RR_AS_M_POP_EMN
      }
    }
  `,
  SCHOOLS_BL_F_EMN_QUERY: gql`
    query Query($filter: FilterFindManyEmotionaldisturbanceInput, $limit: Int) {
      emotionaldisturbances(filter: $filter, limit: $limit) {
        RR_BL_F_POP_EMN
      }
    }
  `,
  SCHOOLS_BL_M_EMN_QUERY: gql`
    query Query($filter: FilterFindManyEmotionaldisturbanceInput, $limit: Int) {
      emotionaldisturbances(filter: $filter, limit: $limit) {
        RR_BL_M_POP_EMN
      }
    }
  `,
  SCHOOLS_HI_F_EMN_QUERY: gql`
    query Query($filter: FilterFindManyEmotionaldisturbanceInput, $limit: Int) {
      emotionaldisturbances(filter: $filter, limit: $limit) {
        RR_HI_F_POP_EMN
      }
    }
  `,
  SCHOOLS_HI_M_EMN_QUERY: gql`
    query Query($filter: FilterFindManyEmotionaldisturbanceInput, $limit: Int) {
      emotionaldisturbances(filter: $filter, limit: $limit) {
        RR_HI_M_POP_EMN
      }
    }
  `,
  SCHOOLS_HP_F_EMN_QUERY: gql`
    query Query($filter: FilterFindManyEmotionaldisturbanceInput, $limit: Int) {
      emotionaldisturbances(filter: $filter, limit: $limit) {
        RR_HP_F_POP_EMN
      }
    }
  `,
  SCHOOLS_HP_M_EMN_QUERY: gql`
    query Query($filter: FilterFindManyEmotionaldisturbanceInput, $limit: Int) {
      emotionaldisturbances(filter: $filter, limit: $limit) {
        RR_HP_M_POP_EMN
      }
    }
  `,
  SCHOOLS_TR_F_EMN_QUERY: gql`
    query Query($filter: FilterFindManyEmotionaldisturbanceInput, $limit: Int) {
      emotionaldisturbances(filter: $filter, limit: $limit) {
        RR_TR_F_POP_EMN
      }
    }
  `,
  SCHOOLS_TR_M_EMN_QUERY: gql`
    query Query($filter: FilterFindManyEmotionaldisturbanceInput, $limit: Int) {
      emotionaldisturbances(filter: $filter, limit: $limit) {
        RR_TR_M_POP_EMN
      }
    }
  `,
  SCHOOLS_WH_F_EMN_QUERY: gql`
    query Query($filter: FilterFindManyEmotionaldisturbanceInput, $limit: Int) {
      emotionaldisturbances(filter: $filter, limit: $limit) {
        RR_WH_F_POP_EMN
      }
    }
  `,
  SCHOOLS_WH_M_EMN_QUERY: gql`
    query Query($filter: FilterFindManyEmotionaldisturbanceInput, $limit: Int) {
      emotionaldisturbances(filter: $filter, limit: $limit) {
        RR_WH_M_POP_EMN
      }
    }
  `,
  SCHOOLS_AM_F_WH_F_EMN_QUERY: gql`
    query Query($filter: FilterFindManyEmotionaldisturbanceInput, $limit: Int) {
      emotionaldisturbances(filter: $filter, limit: $limit) {
        RR_AM_F_WH_F_EMN
      }
    }
  `,
  SCHOOLS_AM_M_WH_M_EMN_QUERY: gql`
    query Query($filter: FilterFindManyEmotionaldisturbanceInput, $limit: Int) {
      emotionaldisturbances(filter: $filter, limit: $limit) {
        RR_AM_M_WH_M_EMN
      }
    }
  `,
  SCHOOLS_AS_F_WH_F_EMN_QUERY: gql`
    query Query($filter: FilterFindManyEmotionaldisturbanceInput, $limit: Int) {
      emotionaldisturbances(filter: $filter, limit: $limit) {
        RR_AS_F_WH_F_EMN
      }
    }
  `,
  SCHOOLS_AS_M_WH_M_EMN_QUERY: gql`
    query Query($filter: FilterFindManyEmotionaldisturbanceInput, $limit: Int) {
      emotionaldisturbances(filter: $filter, limit: $limit) {
        RR_AS_M_WH_M_EMN
      }
    }
  `,
  SCHOOLS_BL_F_WH_F_EMN_QUERY: gql`
    query Query($filter: FilterFindManyEmotionaldisturbanceInput, $limit: Int) {
      emotionaldisturbances(filter: $filter, limit: $limit) {
        RR_BL_F_WH_F_EMN
      }
    }
  `,
  SCHOOLS_BL_M_WH_M_EMN_QUERY: gql`
    query Query($filter: FilterFindManyEmotionaldisturbanceInput, $limit: Int) {
      emotionaldisturbances(filter: $filter, limit: $limit) {
        RR_BL_M_WH_M_EMN
      }
    }
  `,
  SCHOOLS_HI_F_WH_F_EMN_QUERY: gql`
    query Query($filter: FilterFindManyEmotionaldisturbanceInput, $limit: Int) {
      emotionaldisturbances(filter: $filter, limit: $limit) {
        RR_HI_F_WH_F_EMN
      }
    }
  `,
  SCHOOLS_HI_M_WH_M_EMN_QUERY: gql`
    query Query($filter: FilterFindManyEmotionaldisturbanceInput, $limit: Int) {
      emotionaldisturbances(filter: $filter, limit: $limit) {
        RR_HI_M_WH_M_EMN
      }
    }
  `,
  SCHOOLS_HP_F_WH_F_EMN_QUERY: gql`
    query Query($filter: FilterFindManyEmotionaldisturbanceInput, $limit: Int) {
      emotionaldisturbances(filter: $filter, limit: $limit) {
        RR_HP_F_WH_F_EMN
      }
    }
  `,
  SCHOOLS_HP_M_WH_M_EMN_QUERY: gql`
    query Query($filter: FilterFindManyEmotionaldisturbanceInput, $limit: Int) {
      emotionaldisturbances(filter: $filter, limit: $limit) {
        RR_HP_M_WH_M_EMN
      }
    }
  `,
  SCHOOLS_TR_F_WH_F_EMN_QUERY: gql`
    query Query($filter: FilterFindManyEmotionaldisturbanceInput, $limit: Int) {
      emotionaldisturbances(filter: $filter, limit: $limit) {
        RR_TR_F_WH_F_EMN
      }
    }
  `,
  SCHOOLS_TR_M_WH_M_EMN_QUERY: gql`
    query Query($filter: FilterFindManyEmotionaldisturbanceInput, $limit: Int) {
      emotionaldisturbances(filter: $filter, limit: $limit) {
        RR_TR_M_WH_M_EMN
      }
    }
  `,
};

export default emotionalDisturbanceQueries;
