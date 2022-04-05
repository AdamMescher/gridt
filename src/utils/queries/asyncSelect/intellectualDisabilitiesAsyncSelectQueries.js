import { gql } from '@apollo/client';

const intellectualDisabilitiesAsyncSelectQueries = {
  INTELLECTUAL_DISABILITIES_BY_NAME_ASYNCSELECT: gql`
    query SCHOOLS_BY_NAME_MR_QUERY(
      $filter: FilterFindManyIntellectualdisabilityInput
      $limit: Int
    ) {
      intellectualdisabilities(filter: $filter, limit: $limit) {
        SCHOOL_NAME
        COMBOKEY
        LEA_NAME
        LEA_STATE
        RR_AS_F_POP_MR
        RR_AM_M_POP_MR
        RR_AS_F_POP_MR
        RR_AS_M_POP_MR
        RR_BL_F_POP_MR
        RR_BL_M_POP_MR
        RR_HI_F_POP_MR
        RR_HI_M_POP_MR
        RR_HP_F_POP_MR
        RR_HP_M_POP_MR
        RR_TR_F_POP_MR
        RR_TR_M_POP_MR
        RR_WH_F_POP_MR
        RR_WH_M_POP_MR
        RR_AM_F_WH_F_MR
        RR_AM_M_WH_M_MR
        RR_AS_F_WH_F_MR
        RR_AS_M_WH_M_MR
        RR_BL_F_WH_F_MR
        RR_BL_M_WH_M_MR
        RR_HI_F_WH_F_MR
        RR_HI_M_WH_M_MR
        RR_HP_F_WH_F_MR
        RR_HP_M_WH_M_MR
        RR_TR_F_WH_F_MR
        RR_TR_M_WH_M_MR
      }
    }
  `,
};

export default intellectualDisabilitiesAsyncSelectQueries;
