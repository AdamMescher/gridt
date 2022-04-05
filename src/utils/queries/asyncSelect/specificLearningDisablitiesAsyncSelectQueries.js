import { gql } from '@apollo/client';

const specificLearningDisablitiesAsyncSelectQueries = {
  SPECIFIC_LEARNING_DISABILITIES_BY_NAME_ASYNCSELECT: gql`
    query SCHOOLS_BY_NAME_SLD_QUERY(
      $filter: FilterFindManySpecificlearningdisabilityInput
      $limit: Int
    ) {
      specificlearningdisabilities(filter: $filter, limit: $limit) {
        SCHOOL_NAME
        COMBOKEY
        LEA_NAME
        LEA_STATE
        RR_AS_F_POP_SLD
        RR_AM_M_POP_SLD
        RR_AS_F_POP_SLD
        RR_AS_M_POP_SLD
        RR_BL_F_POP_SLD
        RR_BL_M_POP_SLD
        RR_HI_F_POP_SLD
        RR_HI_M_POP_SLD
        RR_HP_F_POP_SLD
        RR_HP_M_POP_SLD
        RR_TR_F_POP_SLD
        RR_TR_M_POP_SLD
        RR_WH_F_POP_SLD
        RR_WH_M_POP_SLD
        RR_AM_F_WH_F_SLD
        RR_AM_M_WH_M_SLD
        RR_AS_F_WH_F_SLD
        RR_AS_M_WH_M_SLD
        RR_BL_F_WH_F_SLD
        RR_BL_M_WH_M_SLD
        RR_HI_F_WH_F_SLD
        RR_HI_M_WH_M_SLD
        RR_HP_F_WH_F_SLD
        RR_HP_M_WH_M_SLD
        RR_TR_F_WH_F_SLD
        RR_TR_M_WH_M_SLD
      }
    }
  `,
};

export default specificLearningDisablitiesAsyncSelectQueries;
