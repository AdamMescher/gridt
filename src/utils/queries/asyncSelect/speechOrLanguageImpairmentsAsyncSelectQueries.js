import { gql } from '@apollo/client';

const speechOrLanguageImpairmentsAsyncSelectQueries = {
  SPEECH_LANGUAGE_IMPAIRMENTS_BY_NAME_ASYNCSELECT: gql`
    query SCHOOLS_BY_NAME_SLI_QUERY(
      $filter: FilterFindManySpeechlanguageimpairmentInput
      $limit: Int
    ) {
      speechlanguageimpairments(filter: $filter, limit: $limit) {
        SCHOOL_NAME
        COMBOKEY
        LEA_NAME
        LEA_STATE
        RR_AS_F_POP_SLI
        RR_AM_M_POP_SLI
        RR_AS_F_POP_SLI
        RR_AS_M_POP_SLI
        RR_BL_F_POP_SLI
        RR_BL_M_POP_SLI
        RR_HI_F_POP_SLI
        RR_HI_M_POP_SLI
        RR_HP_F_POP_SLI
        RR_HP_M_POP_SLI
        RR_TR_F_POP_SLI
        RR_TR_M_POP_SLI
        RR_WH_F_POP_SLI
        RR_WH_M_POP_SLI
        RR_AM_F_WH_F_SLI
        RR_AM_M_WH_M_SLI
        RR_AS_F_WH_F_SLI
        RR_AS_M_WH_M_SLI
        RR_BL_F_WH_F_SLI
        RR_BL_M_WH_M_SLI
        RR_HI_F_WH_F_SLI
        RR_HI_M_WH_M_SLI
        RR_HP_F_WH_F_SLI
        RR_HP_M_WH_M_SLI
        RR_TR_F_WH_F_SLI
        RR_TR_M_WH_M_SLI
      }
    }
  `,
};

export default speechOrLanguageImpairmentsAsyncSelectQueries;
