import { gql } from '@apollo/client';

const otherHealthImpairmentsAsyncSelectQueries = {
  OTHER_HEALTH_IMPAIRMENTS_BY_NAME_ASYNCSELECT: gql`
    query SCHOOLS_BY_NAME_OHI_QUERY(
      $filter: FilterFindManyOtherhealthimpairmentInput
      $limit: Int
    ) {
      otherhealthimpairments(filter: $filter, limit: $limit) {
        SCHOOL_NAME
        COMBOKEY
        LEA_NAME
        LEA_STATE
        RR_AS_F_POP_OHI
        RR_AM_M_POP_OHI
        RR_AS_F_POP_OHI
        RR_AS_M_POP_OHI
        RR_BL_F_POP_OHI
        RR_BL_M_POP_OHI
        RR_HI_F_POP_OHI
        RR_HI_M_POP_OHI
        RR_HP_F_POP_OHI
        RR_HP_M_POP_OHI
        RR_TR_F_POP_OHI
        RR_TR_M_POP_OHI
        RR_WH_F_POP_OHI
        RR_WH_M_POP_OHI
        RR_AM_F_WH_F_OHI
        RR_AM_M_WH_M_OHI
        RR_AS_F_WH_F_OHI
        RR_AS_M_WH_M_OHI
        RR_BL_F_WH_F_OHI
        RR_BL_M_WH_M_OHI
        RR_HI_F_WH_F_OHI
        RR_HI_M_WH_M_OHI
        RR_HP_F_WH_F_OHI
        RR_HP_M_WH_M_OHI
        RR_TR_F_WH_F_OHI
        RR_TR_M_WH_M_OHI
      }
    }
  `,
};

export default otherHealthImpairmentsAsyncSelectQueries;
