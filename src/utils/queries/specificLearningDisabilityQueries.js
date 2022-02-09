import { gql } from '@apollo/client';

const specificLearningDisabilityQueries = {
  SCHOOLS_AM_F_SLD_QUERY: gql`
    query Query(
      $filter: FilterFindManySpecificlearningdisabilityInput
      $limit: Int
    ) {
      specificlearningdisabilities(filter: $filter, limit: $limit) {
        RR_AS_F_POP_SLD
      }
    }
  `,
  SCHOOLS_AM_M_SLD_QUERY: gql`
    query Query(
      $filter: FilterFindManySpecificlearningdisabilityInput
      $limit: Int
    ) {
      specificlearningdisabilities(filter: $filter, limit: $limit) {
        RR_AM_M_POP_SLD
      }
    }
  `,
  SCHOOLS_AS_F_SLD_QUERY: gql`
    query Query(
      $filter: FilterFindManySpecificlearningdisabilityInput
      $limit: Int
    ) {
      specificlearningdisabilities(filter: $filter, limit: $limit) {
        RR_AS_F_POP_SLD
      }
    }
  `,
  SCHOOLS_AS_M_SLD_QUERY: gql`
    query Query(
      $filter: FilterFindManySpecificlearningdisabilityInput
      $limit: Int
    ) {
      specificlearningdisabilities(filter: $filter, limit: $limit) {
        RR_AS_M_POP_SLD
      }
    }
  `,
  SCHOOLS_BL_F_SLD_QUERY: gql`
    query Query(
      $filter: FilterFindManySpecificlearningdisabilityInput
      $limit: Int
    ) {
      specificlearningdisabilities(filter: $filter, limit: $limit) {
        RR_BL_F_POP_SLD
      }
    }
  `,
  SCHOOLS_BL_M_SLD_QUERY: gql`
    query Query(
      $filter: FilterFindManySpecificlearningdisabilityInput
      $limit: Int
    ) {
      specificlearningdisabilities(filter: $filter, limit: $limit) {
        RR_BL_M_POP_SLD
      }
    }
  `,
  SCHOOLS_HI_F_SLD_QUERY: gql`
    query Query(
      $filter: FilterFindManySpecificlearningdisabilityInput
      $limit: Int
    ) {
      specificlearningdisabilities(filter: $filter, limit: $limit) {
        RR_HI_F_POP_SLD
      }
    }
  `,
  SCHOOLS_HI_M_SLD_QUERY: gql`
    query Query(
      $filter: FilterFindManySpecificlearningdisabilityInput
      $limit: Int
    ) {
      specificlearningdisabilities(filter: $filter, limit: $limit) {
        RR_HI_M_POP_SLD
      }
    }
  `,
  SCHOOLS_HP_F_SLD_QUERY: gql`
    query Query(
      $filter: FilterFindManySpecificlearningdisabilityInput
      $limit: Int
    ) {
      specificlearningdisabilities(filter: $filter, limit: $limit) {
        RR_HP_F_POP_SLD
      }
    }
  `,
  SCHOOLS_HP_M_SLD_QUERY: gql`
    query Query(
      $filter: FilterFindManySpecificlearningdisabilityInput
      $limit: Int
    ) {
      specificlearningdisabilities(filter: $filter, limit: $limit) {
        RR_HP_M_POP_SLD
      }
    }
  `,
  SCHOOLS_TR_F_SLD_QUERY: gql`
    query Query(
      $filter: FilterFindManySpecificlearningdisabilityInput
      $limit: Int
    ) {
      specificlearningdisabilities(filter: $filter, limit: $limit) {
        RR_TR_F_POP_SLD
      }
    }
  `,
  SCHOOLS_TR_M_SLD_QUERY: gql`
    query Query(
      $filter: FilterFindManySpecificlearningdisabilityInput
      $limit: Int
    ) {
      specificlearningdisabilities(filter: $filter, limit: $limit) {
        RR_TR_M_POP_SLD
      }
    }
  `,
  SCHOOLS_WH_F_SLD_QUERY: gql`
    query Query(
      $filter: FilterFindManySpecificlearningdisabilityInput
      $limit: Int
    ) {
      specificlearningdisabilities(filter: $filter, limit: $limit) {
        RR_WH_F_POP_SLD
      }
    }
  `,
  SCHOOLS_WH_M_SLD_QUERY: gql`
    query Query(
      $filter: FilterFindManySpecificlearningdisabilityInput
      $limit: Int
    ) {
      specificlearningdisabilities(filter: $filter, limit: $limit) {
        RR_WH_M_POP_SLD
      }
    }
  `,
  SCHOOLS_AM_F_WH_F_SLD_QUERY: gql`
    query Query(
      $filter: FilterFindManySpecificlearningdisabilityInput
      $limit: Int
    ) {
      specificlearningdisabilities(filter: $filter, limit: $limit) {
        RR_AM_F_WH_F_SLD
      }
    }
  `,
  SCHOOLS_AM_M_WH_M_SLD_QUERY: gql`
    query Query(
      $filter: FilterFindManySpecificlearningdisabilityInput
      $limit: Int
    ) {
      specificlearningdisabilities(filter: $filter, limit: $limit) {
        RR_AM_M_WH_M_SLD
      }
    }
  `,
  SCHOOLS_AS_F_WH_F_SLD_QUERY: gql`
    query Query(
      $filter: FilterFindManySpecificlearningdisabilityInput
      $limit: Int
    ) {
      specificlearningdisabilities(filter: $filter, limit: $limit) {
        RR_AS_F_WH_F_SLD
      }
    }
  `,
  SCHOOLS_AS_M_WH_M_SLD_QUERY: gql`
    query Query(
      $filter: FilterFindManySpecificlearningdisabilityInput
      $limit: Int
    ) {
      specificlearningdisabilities(filter: $filter, limit: $limit) {
        RR_AS_M_WH_M_SLD
      }
    }
  `,
  SCHOOLS_BL_F_WH_F_SLD_QUERY: gql`
    query Query(
      $filter: FilterFindManySpecificlearningdisabilityInput
      $limit: Int
    ) {
      specificlearningdisabilities(filter: $filter, limit: $limit) {
        RR_BL_F_WH_F_SLD
      }
    }
  `,
  SCHOOLS_BL_M_WH_M_SLD_QUERY: gql`
    query Query(
      $filter: FilterFindManySpecificlearningdisabilityInput
      $limit: Int
    ) {
      specificlearningdisabilities(filter: $filter, limit: $limit) {
        RR_BL_M_WH_M_SLD
      }
    }
  `,
  SCHOOLS_HI_F_WH_F_SLD_QUERY: gql`
    query Query(
      $filter: FilterFindManySpecificlearningdisabilityInput
      $limit: Int
    ) {
      specificlearningdisabilities(filter: $filter, limit: $limit) {
        RR_HI_F_WH_F_SLD
      }
    }
  `,
  SCHOOLS_HI_M_WH_M_SLD_QUERY: gql`
    query Query(
      $filter: FilterFindManySpecificlearningdisabilityInput
      $limit: Int
    ) {
      specificlearningdisabilities(filter: $filter, limit: $limit) {
        RR_HI_M_WH_M_SLD
      }
    }
  `,
  SCHOOLS_HP_F_WH_F_SLD_QUERY: gql`
    query Query(
      $filter: FilterFindManySpecificlearningdisabilityInput
      $limit: Int
    ) {
      specificlearningdisabilities(filter: $filter, limit: $limit) {
        RR_HP_F_WH_F_SLD
      }
    }
  `,
  SCHOOLS_HP_M_WH_M_SLD_QUERY: gql`
    query Query(
      $filter: FilterFindManySpecificlearningdisabilityInput
      $limit: Int
    ) {
      specificlearningdisabilities(filter: $filter, limit: $limit) {
        RR_HP_M_WH_M_SLD
      }
    }
  `,
  SCHOOLS_TR_F_WH_F_SLD_QUERY: gql`
    query Query(
      $filter: FilterFindManySpecificlearningdisabilityInput
      $limit: Int
    ) {
      specificlearningdisabilities(filter: $filter, limit: $limit) {
        RR_TR_F_WH_F_SLD
      }
    }
  `,
  SCHOOLS_TR_M_WH_M_SLD_QUERY: gql`
    query Query(
      $filter: FilterFindManySpecificlearningdisabilityInput
      $limit: Int
    ) {
      specificlearningdisabilities(filter: $filter, limit: $limit) {
        RR_TR_M_WH_M_SLD
      }
    }
  `,
};

export default specificLearningDisabilityQueries;
