import { gql } from '@apollo/client';

const visualImpairmentAsyncSelectQueries = {
  VISUAL_IMPAIRMENTS_BY_NAME_ASYNCSELECT: gql`
    query SCHOOLS_BY_NAME_VI_QUERY(
      $filter: FilterFindManyVisualimpairmentInput
      $limit: Int
    ) {
      visualimpairments(filter: $filter, limit: $limit) {
        SCHOOL_NAME
        COMBOKEY
        LEA_NAME
        LEA_STATE
        RR_AS_F_POP_VI
        RR_AM_M_POP_VI
        RR_AS_F_POP_VI
        RR_AS_M_POP_VI
        RR_BL_F_POP_VI
        RR_BL_M_POP_VI
        RR_HI_F_POP_VI
        RR_HI_M_POP_VI
        RR_HP_F_POP_VI
        RR_HP_M_POP_VI
        RR_TR_F_POP_VI
        RR_TR_M_POP_VI
        RR_WH_F_POP_VI
        RR_WH_M_POP_VI
        RR_AM_F_WH_F_VI
        RR_AM_M_WH_M_VI
        RR_AS_F_WH_F_VI
        RR_AS_M_WH_M_VI
        RR_BL_F_WH_F_VI
        RR_BL_M_WH_M_VI
        RR_HI_F_WH_F_VI
        RR_HI_M_WH_M_VI
        RR_HP_F_WH_F_VI
        RR_HP_M_WH_M_VI
        RR_TR_F_WH_F_VI
        RR_TR_M_WH_M_VI
      }
    }
  `,
};

export default visualImpairmentAsyncSelectQueries;
