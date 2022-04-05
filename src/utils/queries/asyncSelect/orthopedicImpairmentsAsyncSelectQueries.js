import { gql } from '@apollo/client';

const orthopedicImpairmentsAsyncSelectQueries = {
  ORTHOPEDIC_IMPAIRMENTS_BY_NAME_ASYNCSELECT: gql`
    query SCHOOLS_BY_NAME_OI_QUERY(
      $filter: FilterFindManyOrthopedicimpairmentInput
      $limit: Int
    ) {
      orthopedicimpairments(filter: $filter, limit: $limit) {
        SCHOOL_NAME
        COMBOKEY
        LEA_NAME
        LEA_STATE
        RR_AS_F_POP_OI
        RR_AM_M_POP_OI
        RR_AS_F_POP_OI
        RR_AS_M_POP_OI
        RR_BL_F_POP_OI
        RR_BL_M_POP_OI
        RR_HI_F_POP_OI
        RR_HI_M_POP_OI
        RR_HP_F_POP_OI
        RR_HP_M_POP_OI
        RR_TR_F_POP_OI
        RR_TR_M_POP_OI
        RR_WH_F_POP_OI
        RR_WH_M_POP_OI
        RR_AM_F_WH_F_OI
        RR_AM_M_WH_M_OI
        RR_AS_F_WH_F_OI
        RR_AS_M_WH_M_OI
        RR_BL_F_WH_F_OI
        RR_BL_M_WH_M_OI
        RR_HI_F_WH_F_OI
        RR_HI_M_WH_M_OI
        RR_HP_F_WH_F_OI
        RR_HP_M_WH_M_OI
        RR_TR_F_WH_F_OI
        RR_TR_M_WH_M_OI
      }
    }
  `,
};

export default orthopedicImpairmentsAsyncSelectQueries;
