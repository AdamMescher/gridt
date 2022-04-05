import { gql } from '@apollo/client';

const deafBlindnessesAsyncSelectQueries = {
  DEAF_BLINDNESSES_BY_NAME_ASNYCSELECT: gql`
    query SCHOOLS_BY_NAME_DB_QUERY(
      $filter: FilterFindManyDeafblindnessInput
      $limit: Int
    ) {
      deafblindnesses(limit: $limit, filter: $filter) {
        SCHOOL_NAME
        COMBOKEY
        LEA_NAME
        LEA_STATE
        RR_AS_F_POP_DB
        RR_AM_M_POP_DB
        RR_AS_F_POP_DB
        RR_AS_M_POP_DB
        RR_BL_F_POP_DB
        RR_BL_M_POP_DB
        RR_HI_F_POP_DB
        RR_HI_M_POP_DB
        RR_HP_F_POP_DB
        RR_HP_M_POP_DB
        RR_TR_F_POP_DB
        RR_TR_M_POP_DB
        RR_WH_F_POP_DB
        RR_WH_M_POP_DB
        RR_AM_F_WH_F_DB
        RR_AM_M_WH_M_DB
        RR_AS_F_WH_F_DB
        RR_AS_M_WH_M_DB
        RR_BL_F_WH_F_DB
        RR_BL_M_WH_M_DB
        RR_HI_F_WH_F_DB
        RR_HI_M_WH_M_DB
        RR_HP_F_WH_F_DB
        RR_HP_M_WH_M_DB
        RR_TR_F_WH_F_DB
        RR_TR_M_WH_M_DB
      }
    }
  `,
};

export default deafBlindnessesAsyncSelectQueries;
