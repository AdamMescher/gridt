import { gql } from '@apollo/client';

const intellectualDisabilityQueries = {
  SCHOOLS_AM_F_MR_QUERY: gql`
    query Query(
      $filter: FilterFindManyIntellectualdisabilityInput
      $limit: Int
    ) {
      intellectualdisabilities(filter: $filter, limit: $limit) {
        RR_AS_F_POP_MR
      }
    }
  `,
  SCHOOLS_AM_M_MR_QUERY: gql`
    query Query(
      $filter: FilterFindManyIntellectualdisabilityInput
      $limit: Int
    ) {
      intellectualdisabilities(filter: $filter, limit: $limit) {
        RR_AM_M_POP_MR
      }
    }
  `,
  SCHOOLS_AS_F_MR_QUERY: gql`
    query Query(
      $filter: FilterFindManyIntellectualdisabilityInput
      $limit: Int
    ) {
      intellectualdisabilities(filter: $filter, limit: $limit) {
        RR_AS_F_POP_MR
      }
    }
  `,
  SCHOOLS_AS_M_MR_QUERY: gql`
    query Query(
      $filter: FilterFindManyIntellectualdisabilityInput
      $limit: Int
    ) {
      intellectualdisabilities(filter: $filter, limit: $limit) {
        RR_AS_M_POP_MR
      }
    }
  `,
  SCHOOLS_BL_F_MR_QUERY: gql`
    query Query(
      $filter: FilterFindManyIntellectualdisabilityInput
      $limit: Int
    ) {
      intellectualdisabilities(filter: $filter, limit: $limit) {
        RR_BL_F_POP_MR
      }
    }
  `,
  SCHOOLS_BL_M_MR_QUERY: gql`
    query Query(
      $filter: FilterFindManyIntellectualdisabilityInput
      $limit: Int
    ) {
      intellectualdisabilities(filter: $filter, limit: $limit) {
        RR_BL_M_POP_MR
      }
    }
  `,
  SCHOOLS_HI_F_MR_QUERY: gql`
    query Query(
      $filter: FilterFindManyIntellectualdisabilityInput
      $limit: Int
    ) {
      intellectualdisabilities(filter: $filter, limit: $limit) {
        RR_HI_F_POP_MR
      }
    }
  `,
  SCHOOLS_HI_M_MR_QUERY: gql`
    query Query(
      $filter: FilterFindManyIntellectualdisabilityInput
      $limit: Int
    ) {
      intellectualdisabilities(filter: $filter, limit: $limit) {
        RR_HI_M_POP_MR
      }
    }
  `,
  SCHOOLS_HP_F_MR_QUERY: gql`
    query Query(
      $filter: FilterFindManyIntellectualdisabilityInput
      $limit: Int
    ) {
      intellectualdisabilities(filter: $filter, limit: $limit) {
        RR_HP_F_POP_MR
      }
    }
  `,
  SCHOOLS_HP_M_MR_QUERY: gql`
    query Query(
      $filter: FilterFindManyIntellectualdisabilityInput
      $limit: Int
    ) {
      intellectualdisabilities(filter: $filter, limit: $limit) {
        RR_HP_M_POP_MR
      }
    }
  `,
  SCHOOLS_TR_F_MR_QUERY: gql`
    query Query(
      $filter: FilterFindManyIntellectualdisabilityInput
      $limit: Int
    ) {
      intellectualdisabilities(filter: $filter, limit: $limit) {
        RR_TR_F_POP_MR
      }
    }
  `,
  SCHOOLS_TR_M_MR_QUERY: gql`
    query Query(
      $filter: FilterFindManyIntellectualdisabilityInput
      $limit: Int
    ) {
      intellectualdisabilities(filter: $filter, limit: $limit) {
        RR_TR_M_POP_MR
      }
    }
  `,
  SCHOOLS_WH_F_MR_QUERY: gql`
    query Query(
      $filter: FilterFindManyIntellectualdisabilityInput
      $limit: Int
    ) {
      intellectualdisabilities(filter: $filter, limit: $limit) {
        RR_WH_F_POP_MR
      }
    }
  `,
  SCHOOLS_WH_M_MR_QUERY: gql`
    query Query(
      $filter: FilterFindManyIntellectualdisabilityInput
      $limit: Int
    ) {
      intellectualdisabilities(filter: $filter, limit: $limit) {
        RR_WH_M_POP_MR
      }
    }
  `,
  SCHOOLS_AM_F_WH_F_MR_QUERY: gql`
    query Query(
      $filter: FilterFindManyIntellectualdisabilityInput
      $limit: Int
    ) {
      intellectualdisabilities(filter: $filter, limit: $limit) {
        RR_AM_F_WH_F_MR
      }
    }
  `,
  SCHOOLS_AM_M_WH_M_MR_QUERY: gql`
    query Query(
      $filter: FilterFindManyIntellectualdisabilityInput
      $limit: Int
    ) {
      intellectualdisabilities(filter: $filter, limit: $limit) {
        RR_AM_M_WH_M_MR
      }
    }
  `,
  SCHOOLS_AS_F_WH_F_MR_QUERY: gql`
    query Query(
      $filter: FilterFindManyIntellectualdisabilityInput
      $limit: Int
    ) {
      intellectualdisabilities(filter: $filter, limit: $limit) {
        RR_AS_F_WH_F_MR
      }
    }
  `,
  SCHOOLS_AS_M_WH_M_MR_QUERY: gql`
    query Query(
      $filter: FilterFindManyIntellectualdisabilityInput
      $limit: Int
    ) {
      intellectualdisabilities(filter: $filter, limit: $limit) {
        RR_AS_M_WH_M_MR
      }
    }
  `,
  SCHOOLS_BL_F_WH_F_MR_QUERY: gql`
    query Query(
      $filter: FilterFindManyIntellectualdisabilityInput
      $limit: Int
    ) {
      intellectualdisabilities(filter: $filter, limit: $limit) {
        RR_BL_F_WH_F_MR
      }
    }
  `,
  SCHOOLS_BL_M_WH_M_MR_QUERY: gql`
    query Query(
      $filter: FilterFindManyIntellectualdisabilityInput
      $limit: Int
    ) {
      intellectualdisabilities(filter: $filter, limit: $limit) {
        RR_BL_M_WH_M_MR
      }
    }
  `,
  SCHOOLS_HI_F_WH_F_MR_QUERY: gql`
    query Query(
      $filter: FilterFindManyIntellectualdisabilityInput
      $limit: Int
    ) {
      intellectualdisabilities(filter: $filter, limit: $limit) {
        RR_HI_F_WH_F_MR
      }
    }
  `,
  SCHOOLS_HI_M_WH_M_MR_QUERY: gql`
    query Query(
      $filter: FilterFindManyIntellectualdisabilityInput
      $limit: Int
    ) {
      intellectualdisabilities(filter: $filter, limit: $limit) {
        RR_HI_M_WH_M_MR
      }
    }
  `,
  SCHOOLS_HP_F_WH_F_MR_QUERY: gql`
    query Query(
      $filter: FilterFindManyIntellectualdisabilityInput
      $limit: Int
    ) {
      intellectualdisabilities(filter: $filter, limit: $limit) {
        RR_HP_F_WH_F_MR
      }
    }
  `,
  SCHOOLS_HP_M_WH_M_MR_QUERY: gql`
    query Query(
      $filter: FilterFindManyIntellectualdisabilityInput
      $limit: Int
    ) {
      intellectualdisabilities(filter: $filter, limit: $limit) {
        RR_HP_M_WH_M_MR
      }
    }
  `,
  SCHOOLS_TR_F_WH_F_MR_QUERY: gql`
    query Query(
      $filter: FilterFindManyIntellectualdisabilityInput
      $limit: Int
    ) {
      intellectualdisabilities(filter: $filter, limit: $limit) {
        RR_TR_F_WH_F_MR
      }
    }
  `,
  SCHOOLS_TR_M_WH_M_MR_QUERY: gql`
    query Query(
      $filter: FilterFindManyIntellectualdisabilityInput
      $limit: Int
    ) {
      intellectualdisabilities(filter: $filter, limit: $limit) {
        RR_TR_M_WH_M_MR
      }
    }
  `,
};

export default intellectualDisabilityQueries;
