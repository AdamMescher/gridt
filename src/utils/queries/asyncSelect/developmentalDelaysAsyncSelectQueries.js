import { gql } from '@apollo/client';

const developmentalDelaysAsyncSelectQueries = {
  DEVELOPMENTAL_DELAYS_BY_NAME_ASYNCSELECT: gql`
    query SCHOOLS_BY_NAME_DD_QUERY(
      $filter: FilterFindManyDevelopmentaldelayInput
      $limit: Int
    ) {
      developmentaldelays(filter: $filter, limit: $limit) {
        SCHOOL_NAME
        COMBOKEY
        LEA_NAME
        LEA_STATE
        RR_AS_F_POP_DD
        RR_AM_M_POP_DD
        RR_AS_F_POP_DD
        RR_AS_M_POP_DD
        RR_BL_F_POP_DD
        RR_BL_M_POP_DD
        RR_HI_F_POP_DD
        RR_HI_M_POP_DD
        RR_HP_F_POP_DD
        RR_HP_M_POP_DD
        RR_TR_F_POP_DD
        RR_TR_M_POP_DD
        RR_WH_F_POP_DD
        RR_WH_M_POP_DD
        RR_AM_F_WH_F_DD
        RR_AM_M_WH_M_DD
        RR_AS_F_WH_F_DD
        RR_AS_M_WH_M_DD
        RR_BL_F_WH_F_DD
        RR_BL_M_WH_M_DD
        RR_HI_F_WH_F_DD
        RR_HI_M_WH_M_DD
        RR_HP_F_WH_F_DD
        RR_HP_M_WH_M_DD
        RR_TR_F_WH_F_DD
        RR_TR_M_WH_M_DD
      }
    }
  `,
};

export default developmentalDelaysAsyncSelectQueries;
