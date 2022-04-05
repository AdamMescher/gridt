import { gql } from '@apollo/client';

const traumaticBrainInjuriesAsyncSelectQueries = {
  TRAUMATIC_BRAIN_INJURIES_BY_NAME_ASYNCSELECT: gql`
    query SCHOOLS_BY_NAME_TBI_QUERY(
      $filter: FilterFindManyTraumaticbraininjuryInput
      $limit: Int
    ) {
      traumaticbraininjuries(filter: $filter, limit: $limit) {
        SCHOOL_NAME
        COMBOKEY
        LEA_NAME
        LEA_STATE
        RR_AS_F_POP_TBI
        RR_AM_M_POP_TBI
        RR_AS_F_POP_TBI
        RR_AS_M_POP_TBI
        RR_BL_F_POP_TBI
        RR_BL_M_POP_TBI
        RR_HI_F_POP_TBI
        RR_HI_M_POP_TBI
        RR_HP_F_POP_TBI
        RR_HP_M_POP_TBI
        RR_TR_F_POP_TBI
        RR_TR_M_POP_TBI
        RR_WH_F_POP_TBI
        RR_WH_M_POP_TBI
        RR_AM_F_WH_F_TBI
        RR_AM_M_WH_M_TBI
        RR_AS_F_WH_F_TBI
        RR_AS_M_WH_M_TBI
        RR_BL_F_WH_F_TBI
        RR_BL_M_WH_M_TBI
        RR_HI_F_WH_F_TBI
        RR_HI_M_WH_M_TBI
        RR_HP_F_WH_F_TBI
        RR_HP_M_WH_M_TBI
        RR_TR_F_WH_F_TBI
        RR_TR_M_WH_M_TBI
      }
    }
  `,
};

export default traumaticBrainInjuriesAsyncSelectQueries;
