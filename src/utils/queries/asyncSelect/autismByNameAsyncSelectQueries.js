import { gql } from '@apollo/client';

const autismByNameAsyncSelectQueries = {
  AUTISMS_BY_NAME_ASYNCSELECT: gql`
    query SCHOOLS_BY_NAME_AUT_QUERY(
      $filter: FilterFindManyAutismInput
      $limit: Int
    ) {
      autisms(filter: $filter, limit: $limit) {
        SCHOOL_NAME
        COMBOKEY
        LEA_NAME
        LEA_STATE
        RR_AS_F_POP_AUT
        RR_AM_M_POP_AUT
        RR_AS_F_POP_AUT
        RR_AS_M_POP_AUT
        RR_BL_F_POP_AUT
        RR_BL_M_POP_AUT
        RR_HI_F_POP_AUT
        RR_HI_M_POP_AUT
        RR_HP_F_POP_AUT
        RR_HP_M_POP_AUT
        RR_TR_F_POP_AUT
        RR_TR_M_POP_AUT
        RR_WH_F_POP_AUT
        RR_WH_M_POP_AUT
        RR_AM_F_WH_F_AUT
        RR_AM_M_WH_M_AUT
        RR_AS_F_WH_F_AUT
        RR_AS_M_WH_M_AUT
        RR_BL_F_WH_F_AUT
        RR_BL_M_WH_M_AUT
        RR_HI_F_WH_F_AUT
        RR_HI_M_WH_M_AUT
        RR_HP_F_WH_F_AUT
        RR_HP_M_WH_M_AUT
        RR_TR_F_WH_F_AUT
        RR_TR_M_WH_M_AUT
      }
    }
  `,
};

export default autismByNameAsyncSelectQueries;
