import { gql } from '@apollo/client';

const hearingImpairmentsAsyncSelectQueries = {
  HEARING_IMPAIRMENTS_BY_NAME_ASYNCSELECT: gql`
    query SCHOOLS_BY_NAME_HI_QUERY(
      $filter: FilterFindManyHearingimpairmentInput
      $limit: Int
    ) {
      hearingimpairments(filter: $filter, limit: $limit) {
        SCHOOL_NAME
        COMBOKEY
        LEA_NAME
        LEA_STATE
        RR_AS_F_POP_HI
        RR_AM_M_POP_HI
        RR_AS_F_POP_HI
        RR_AS_M_POP_HI
        RR_BL_F_POP_HI
        RR_BL_M_POP_HI
        RR_HI_F_POP_HI
        RR_HI_M_POP_HI
        RR_HP_F_POP_HI
        RR_HP_M_POP_HI
        RR_TR_F_POP_HI
        RR_TR_M_POP_HI
        RR_WH_F_POP_HI
        RR_WH_M_POP_HI
        RR_AM_F_WH_F_HI
        RR_AM_M_WH_M_HI
        RR_AS_F_WH_F_HI
        RR_AS_M_WH_M_HI
        RR_BL_F_WH_F_HI
        RR_BL_M_WH_M_HI
        RR_HI_F_WH_F_HI
        RR_HI_M_WH_M_HI
        RR_HP_F_WH_F_HI
        RR_HP_M_WH_M_HI
        RR_TR_F_WH_F_HI
        RR_TR_M_WH_M_HI
      }
    }
  `,
};

export default hearingImpairmentsAsyncSelectQueries;
