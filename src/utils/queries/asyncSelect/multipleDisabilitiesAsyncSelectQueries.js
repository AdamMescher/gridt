import { gql } from '@apollo/client';

const multipleDisabilitiesAsyncSelectQueries = {
  MULTIPLE_DISABILITIES_BY_NAME_ASYNCSELECT: gql`
    query SCHOOLS_BY_NAME_MD_QUERY(
      $filter: FilterFindManyMultipledisabilityInput
      $limit: Int
    ) {
      multipledisabilities(filter: $filter, limit: $limit) {
        SCHOOL_NAME
        COMBOKEY
        LEA_NAME
        LEA_STATE
        RR_AS_F_POP_MD
        RR_AM_M_POP_MD
        RR_AS_F_POP_MD
        RR_AS_M_POP_MD
        RR_BL_F_POP_MD
        RR_BL_M_POP_MD
        RR_HI_F_POP_MD
        RR_HI_M_POP_MD
        RR_HP_F_POP_MD
        RR_HP_M_POP_MD
        RR_TR_F_POP_MD
        RR_TR_M_POP_MD
        RR_WH_F_POP_MD
        RR_WH_M_POP_MD
        RR_AM_F_WH_F_MD
        RR_AM_M_WH_M_MD
        RR_AS_F_WH_F_MD
        RR_AS_M_WH_M_MD
        RR_BL_F_WH_F_MD
        RR_BL_M_WH_M_MD
        RR_HI_F_WH_F_MD
        RR_HI_M_WH_M_MD
        RR_HP_F_WH_F_MD
        RR_HP_M_WH_M_MD
        RR_TR_F_WH_F_MD
        RR_TR_M_WH_M_MD
      }
    }
  `,
};

export default multipleDisabilitiesAsyncSelectQueries;
