import { gql } from '@apollo/client';

const schoolsByNameAsyncSelectQueries = {
  SCHOOLS_BY_NAME_ASNYCSELECT: gql`
    query SCHOOLS_BY_NAME_TOTAL_QUERY(
      $filter: FilterFindManySchoolInput
      $limit: Int
    ) {
      schools(limit: $limit, filter: $filter) {
        SCH_NAME
        COMBOKEY
        LEA_NAME
        LEA_STATE
        RR_AM_F_POP
        RR_AM_M_POP
        RR_AS_F_POP
        RR_AS_M_POP
        RR_BL_F_POP
        RR_BL_M_POP
        RR_HI_F_POP
        RR_HI_M_POP
        RR_HP_F_POP
        RR_HP_M_POP
        RR_TR_F_POP
        RR_TR_M_POP
        RR_WH_F_POP
        RR_WH_M_POP
        RR_AM_F_WH_F
        RR_AM_M_WH_M
        RR_AS_F_WH_F
        RR_AS_M_WH_M
        RR_BL_F_WH_F
        RR_BL_M_WH_M
        RR_HI_F_WH_F
        RR_HI_M_WH_M
        RR_HP_F_WH_F
        RR_HP_M_WH_M
        RR_TR_F_WH_F
        RR_TR_M_WH_M
        RR_WH_F_WH_F
        RR_WH_M_WH_M
      }
    }
  `,
};

export default schoolsByNameAsyncSelectQueries;
