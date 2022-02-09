import { gql } from '@apollo/client';

const traumaticBrainInjuryQueries = {
  SCHOOLS_AM_F_TBI_QUERY: gql`
    query Query($filter: FilterFindManyTraumaticbraininjuryInput, $limit: Int) {
      traumaticbraininjuries(filter: $filter, limit: $limit) {
        RR_AS_F_POP_TBI
      }
    }
  `,
  SCHOOLS_AM_M_TBI_QUERY: gql`
    query Query($filter: FilterFindManyTraumaticbraininjuryInput, $limit: Int) {
      traumaticbraininjuries(filter: $filter, limit: $limit) {
        RR_AM_M_POP_TBI
      }
    }
  `,
  SCHOOLS_AS_F_TBI_QUERY: gql`
    query Query($filter: FilterFindManyTraumaticbraininjuryInput, $limit: Int) {
      traumaticbraininjuries(filter: $filter, limit: $limit) {
        RR_AS_F_POP_TBI
      }
    }
  `,
  SCHOOLS_AS_M_TBI_QUERY: gql`
    query Query($filter: FilterFindManyTraumaticbraininjuryInput, $limit: Int) {
      traumaticbraininjuries(filter: $filter, limit: $limit) {
        RR_AS_M_POP_TBI
      }
    }
  `,
  SCHOOLS_BL_F_TBI_QUERY: gql`
    query Query($filter: FilterFindManyTraumaticbraininjuryInput, $limit: Int) {
      traumaticbraininjuries(filter: $filter, limit: $limit) {
        RR_BL_F_POP_TBI
      }
    }
  `,
  SCHOOLS_BL_M_TBI_QUERY: gql`
    query Query($filter: FilterFindManyTraumaticbraininjuryInput, $limit: Int) {
      traumaticbraininjuries(filter: $filter, limit: $limit) {
        RR_BL_M_POP_TBI
      }
    }
  `,
  SCHOOLS_HI_F_TBI_QUERY: gql`
    query Query($filter: FilterFindManyTraumaticbraininjuryInput, $limit: Int) {
      traumaticbraininjuries(filter: $filter, limit: $limit) {
        RR_HI_F_POP_TBI
      }
    }
  `,
  SCHOOLS_HI_M_TBI_QUERY: gql`
    query Query($filter: FilterFindManyTraumaticbraininjuryInput, $limit: Int) {
      traumaticbraininjuries(filter: $filter, limit: $limit) {
        RR_HI_M_POP_TBI
      }
    }
  `,
  SCHOOLS_HP_F_TBI_QUERY: gql`
    query Query($filter: FilterFindManyTraumaticbraininjuryInput, $limit: Int) {
      traumaticbraininjuries(filter: $filter, limit: $limit) {
        RR_HP_F_POP_TBI
      }
    }
  `,
  SCHOOLS_HP_M_TBI_QUERY: gql`
    query Query($filter: FilterFindManyTraumaticbraininjuryInput, $limit: Int) {
      traumaticbraininjuries(filter: $filter, limit: $limit) {
        RR_HP_M_POP_TBI
      }
    }
  `,
  SCHOOLS_TR_F_TBI_QUERY: gql`
    query Query($filter: FilterFindManyTraumaticbraininjuryInput, $limit: Int) {
      traumaticbraininjuries(filter: $filter, limit: $limit) {
        RR_TR_F_POP_TBI
      }
    }
  `,
  SCHOOLS_TR_M_TBI_QUERY: gql`
    query Query($filter: FilterFindManyTraumaticbraininjuryInput, $limit: Int) {
      traumaticbraininjuries(filter: $filter, limit: $limit) {
        RR_TR_M_POP_TBI
      }
    }
  `,
  SCHOOLS_WH_F_TBI_QUERY: gql`
    query Query($filter: FilterFindManyTraumaticbraininjuryInput, $limit: Int) {
      traumaticbraininjuries(filter: $filter, limit: $limit) {
        RR_WH_F_POP_TBI
      }
    }
  `,
  SCHOOLS_WH_M_TBI_QUERY: gql`
    query Query($filter: FilterFindManyTraumaticbraininjuryInput, $limit: Int) {
      traumaticbraininjuries(filter: $filter, limit: $limit) {
        RR_WH_M_POP_TBI
      }
    }
  `,
  SCHOOLS_AM_F_WH_F_TBI_QUERY: gql`
    query Query($filter: FilterFindManyTraumaticbraininjuryInput, $limit: Int) {
      traumaticbraininjuries(filter: $filter, limit: $limit) {
        RR_AM_F_WH_F_TBI
      }
    }
  `,
  SCHOOLS_AM_M_WH_M_TBI_QUERY: gql`
    query Query($filter: FilterFindManyTraumaticbraininjuryInput, $limit: Int) {
      traumaticbraininjuries(filter: $filter, limit: $limit) {
        RR_AM_M_WH_M_TBI
      }
    }
  `,
  SCHOOLS_AS_F_WH_F_TBI_QUERY: gql`
    query Query($filter: FilterFindManyTraumaticbraininjuryInput, $limit: Int) {
      traumaticbraininjuries(filter: $filter, limit: $limit) {
        RR_AS_F_WH_F_TBI
      }
    }
  `,
  SCHOOLS_AS_M_WH_M_TBI_QUERY: gql`
    query Query($filter: FilterFindManyTraumaticbraininjuryInput, $limit: Int) {
      traumaticbraininjuries(filter: $filter, limit: $limit) {
        RR_AS_M_WH_M_TBI
      }
    }
  `,
  SCHOOLS_BL_F_WH_F_TBI_QUERY: gql`
    query Query($filter: FilterFindManyTraumaticbraininjuryInput, $limit: Int) {
      traumaticbraininjuries(filter: $filter, limit: $limit) {
        RR_BL_F_WH_F_TBI
      }
    }
  `,
  SCHOOLS_BL_M_WH_M_TBI_QUERY: gql`
    query Query($filter: FilterFindManyTraumaticbraininjuryInput, $limit: Int) {
      traumaticbraininjuries(filter: $filter, limit: $limit) {
        RR_BL_M_WH_M_TBI
      }
    }
  `,
  SCHOOLS_HI_F_WH_F_TBI_QUERY: gql`
    query Query($filter: FilterFindManyTraumaticbraininjuryInput, $limit: Int) {
      traumaticbraininjuries(filter: $filter, limit: $limit) {
        RR_HI_F_WH_F_TBI
      }
    }
  `,
  SCHOOLS_HI_M_WH_M_TBI_QUERY: gql`
    query Query($filter: FilterFindManyTraumaticbraininjuryInput, $limit: Int) {
      traumaticbraininjuries(filter: $filter, limit: $limit) {
        RR_HI_M_WH_M_TBI
      }
    }
  `,
  SCHOOLS_HP_F_WH_F_TBI_QUERY: gql`
    query Query($filter: FilterFindManyTraumaticbraininjuryInput, $limit: Int) {
      traumaticbraininjuries(filter: $filter, limit: $limit) {
        RR_HP_F_WH_F_TBI
      }
    }
  `,
  SCHOOLS_HP_M_WH_M_TBI_QUERY: gql`
    query Query($filter: FilterFindManyTraumaticbraininjuryInput, $limit: Int) {
      traumaticbraininjuries(filter: $filter, limit: $limit) {
        RR_HP_M_WH_M_TBI
      }
    }
  `,
  SCHOOLS_TR_F_WH_F_TBI_QUERY: gql`
    query Query($filter: FilterFindManyTraumaticbraininjuryInput, $limit: Int) {
      traumaticbraininjuries(filter: $filter, limit: $limit) {
        RR_TR_F_WH_F_TBI
      }
    }
  `,
  SCHOOLS_TR_M_WH_M_TBI_QUERY: gql`
    query Query($filter: FilterFindManyTraumaticbraininjuryInput, $limit: Int) {
      traumaticbraininjuries(filter: $filter, limit: $limit) {
        RR_TR_M_WH_M_TBI
      }
    }
  `,
};

export default traumaticBrainInjuryQueries;
