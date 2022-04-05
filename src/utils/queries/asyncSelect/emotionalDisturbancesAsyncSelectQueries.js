import { gql } from '@apollo/client';

const emotionalDisturbancesAsyncSelectQueries = {
  EMOTIONAL_DISTURBANCES_BY_NAME_ASYNCSELECT: gql`
    query SCHOOLS_BY_NAME_EMN_QUERY(
      $filter: FilterFindManyEmotionaldisturbanceInput
      $limit: Int
    ) {
      emotionaldisturbances(filter: $filter, limit: $limit) {
        SCHOOL_NAME
        COMBOKEY
        LEA_NAME
        LEA_STATE
        RR_AS_F_POP_EMN
        RR_AM_M_POP_EMN
        RR_AS_F_POP_EMN
        RR_AS_M_POP_EMN
        RR_BL_F_POP_EMN
        RR_BL_M_POP_EMN
        RR_HI_F_POP_EMN
        RR_HI_M_POP_EMN
        RR_HP_F_POP_EMN
        RR_HP_M_POP_EMN
        RR_TR_F_POP_EMN
        RR_TR_M_POP_EMN
        RR_WH_F_POP_EMN
        RR_WH_M_POP_EMN
        RR_AM_F_WH_F_EMN
        RR_AM_M_WH_M_EMN
        RR_AS_F_WH_F_EMN
        RR_AS_M_WH_M_EMN
        RR_BL_F_WH_F_EMN
        RR_BL_M_WH_M_EMN
        RR_HI_F_WH_F_EMN
        RR_HI_M_WH_M_EMN
        RR_HP_F_WH_F_EMN
        RR_HP_M_WH_M_EMN
        RR_TR_F_WH_F_EMN
        RR_TR_M_WH_M_EMN
      }
    }
  `,
};

export default emotionalDisturbancesAsyncSelectQueries;
