import { gql } from '@apollo/client';

const otherHealthImpairmentQueries = {
  SCHOOLS_AM_F_OHI_QUERY: gql`
    query Query(
      $filter: FilterFindManyOtherhealthimpairmentInput
      $limit: Int
    ) {
      otherhealthimpairments(filter: $filter, limit: $limit) {
        RR_AS_F_POP_OHI
      }
    }
  `,
  SCHOOLS_AM_M_OHI_QUERY: gql`
    query Query(
      $filter: FilterFindManyOtherhealthimpairmentInput
      $limit: Int
    ) {
      otherhealthimpairments(filter: $filter, limit: $limit) {
        RR_AM_M_POP_OHI
      }
    }
  `,
  SCHOOLS_AS_F_OHI_QUERY: gql`
    query Query(
      $filter: FilterFindManyOtherhealthimpairmentInput
      $limit: Int
    ) {
      otherhealthimpairments(filter: $filter, limit: $limit) {
        RR_AS_F_POP_OHI
      }
    }
  `,
  SCHOOLS_AS_M_OHI_QUERY: gql`
    query Query(
      $filter: FilterFindManyOtherhealthimpairmentInput
      $limit: Int
    ) {
      otherhealthimpairments(filter: $filter, limit: $limit) {
        RR_AS_M_POP_OHI
      }
    }
  `,
  SCHOOLS_BL_F_OHI_QUERY: gql`
    query Query(
      $filter: FilterFindManyOtherhealthimpairmentInput
      $limit: Int
    ) {
      otherhealthimpairments(filter: $filter, limit: $limit) {
        RR_BL_F_POP_OHI
      }
    }
  `,
  SCHOOLS_BL_M_OHI_QUERY: gql`
    query Query(
      $filter: FilterFindManyOtherhealthimpairmentInput
      $limit: Int
    ) {
      otherhealthimpairments(filter: $filter, limit: $limit) {
        RR_BL_M_POP_OHI
      }
    }
  `,
  SCHOOLS_HI_F_OHI_QUERY: gql`
    query Query(
      $filter: FilterFindManyOtherhealthimpairmentInput
      $limit: Int
    ) {
      otherhealthimpairments(filter: $filter, limit: $limit) {
        RR_HI_F_POP_OHI
      }
    }
  `,
  SCHOOLS_HI_M_OHI_QUERY: gql`
    query Query(
      $filter: FilterFindManyOtherhealthimpairmentInput
      $limit: Int
    ) {
      otherhealthimpairments(filter: $filter, limit: $limit) {
        RR_HI_M_POP_OHI
      }
    }
  `,
  SCHOOLS_HP_F_OHI_QUERY: gql`
    query Query(
      $filter: FilterFindManyOtherhealthimpairmentInput
      $limit: Int
    ) {
      otherhealthimpairments(filter: $filter, limit: $limit) {
        RR_HP_F_POP_OHI
      }
    }
  `,
  SCHOOLS_HP_M_OHI_QUERY: gql`
    query Query(
      $filter: FilterFindManyOtherhealthimpairmentInput
      $limit: Int
    ) {
      otherhealthimpairments(filter: $filter, limit: $limit) {
        RR_HP_M_POP_OHI
      }
    }
  `,
  SCHOOLS_TR_F_OHI_QUERY: gql`
    query Query(
      $filter: FilterFindManyOtherhealthimpairmentInput
      $limit: Int
    ) {
      otherhealthimpairments(filter: $filter, limit: $limit) {
        RR_TR_F_POP_OHI
      }
    }
  `,
  SCHOOLS_TR_M_OHI_QUERY: gql`
    query Query(
      $filter: FilterFindManyOtherhealthimpairmentInput
      $limit: Int
    ) {
      otherhealthimpairments(filter: $filter, limit: $limit) {
        RR_TR_M_POP_OHI
      }
    }
  `,
  SCHOOLS_WH_F_OHI_QUERY: gql`
    query Query(
      $filter: FilterFindManyOtherhealthimpairmentInput
      $limit: Int
    ) {
      otherhealthimpairments(filter: $filter, limit: $limit) {
        RR_WH_F_POP_OHI
      }
    }
  `,
  SCHOOLS_WH_M_OHI_QUERY: gql`
    query Query(
      $filter: FilterFindManyOtherhealthimpairmentInput
      $limit: Int
    ) {
      otherhealthimpairments(filter: $filter, limit: $limit) {
        RR_WH_M_POP_OHI
      }
    }
  `,
  SCHOOLS_AM_F_WH_F_OHI_QUERY: gql`
    query Query(
      $filter: FilterFindManyOtherhealthimpairmentInput
      $limit: Int
    ) {
      otherhealthimpairments(filter: $filter, limit: $limit) {
        RR_AM_F_WH_F_OHI
      }
    }
  `,
  SCHOOLS_AM_M_WH_M_OHI_QUERY: gql`
    query Query(
      $filter: FilterFindManyOtherhealthimpairmentInput
      $limit: Int
    ) {
      otherhealthimpairments(filter: $filter, limit: $limit) {
        RR_AM_M_WH_M_OHI
      }
    }
  `,
  SCHOOLS_AS_F_WH_F_OHI_QUERY: gql`
    query Query(
      $filter: FilterFindManyOtherhealthimpairmentInput
      $limit: Int
    ) {
      otherhealthimpairments(filter: $filter, limit: $limit) {
        RR_AS_F_WH_F_OHI
      }
    }
  `,
  SCHOOLS_AS_M_WH_M_OHI_QUERY: gql`
    query Query(
      $filter: FilterFindManyOtherhealthimpairmentInput
      $limit: Int
    ) {
      otherhealthimpairments(filter: $filter, limit: $limit) {
        RR_AS_M_WH_M_OHI
      }
    }
  `,
  SCHOOLS_BL_F_WH_F_OHI_QUERY: gql`
    query Query(
      $filter: FilterFindManyOtherhealthimpairmentInput
      $limit: Int
    ) {
      otherhealthimpairments(filter: $filter, limit: $limit) {
        RR_BL_F_WH_F_OHI
      }
    }
  `,
  SCHOOLS_BL_M_WH_M_OHI_QUERY: gql`
    query Query(
      $filter: FilterFindManyOtherhealthimpairmentInput
      $limit: Int
    ) {
      otherhealthimpairments(filter: $filter, limit: $limit) {
        RR_BL_M_WH_M_OHI
      }
    }
  `,
  SCHOOLS_HI_F_WH_F_OHI_QUERY: gql`
    query Query(
      $filter: FilterFindManyOtherhealthimpairmentInput
      $limit: Int
    ) {
      otherhealthimpairments(filter: $filter, limit: $limit) {
        RR_HI_F_WH_F_OHI
      }
    }
  `,
  SCHOOLS_HI_M_WH_M_OHI_QUERY: gql`
    query Query(
      $filter: FilterFindManyOtherhealthimpairmentInput
      $limit: Int
    ) {
      otherhealthimpairments(filter: $filter, limit: $limit) {
        RR_HI_M_WH_M_OHI
      }
    }
  `,
  SCHOOLS_HP_F_WH_F_OHI_QUERY: gql`
    query Query(
      $filter: FilterFindManyOtherhealthimpairmentInput
      $limit: Int
    ) {
      otherhealthimpairments(filter: $filter, limit: $limit) {
        RR_HP_F_WH_F_OHI
      }
    }
  `,
  SCHOOLS_HP_M_WH_M_OHI_QUERY: gql`
    query Query(
      $filter: FilterFindManyOtherhealthimpairmentInput
      $limit: Int
    ) {
      otherhealthimpairments(filter: $filter, limit: $limit) {
        RR_HP_M_WH_M_OHI
      }
    }
  `,
  SCHOOLS_TR_F_WH_F_OHI_QUERY: gql`
    query Query(
      $filter: FilterFindManyOtherhealthimpairmentInput
      $limit: Int
    ) {
      otherhealthimpairments(filter: $filter, limit: $limit) {
        RR_TR_F_WH_F_OHI
      }
    }
  `,
  SCHOOLS_TR_M_WH_M_OHI_QUERY: gql`
    query Query(
      $filter: FilterFindManyOtherhealthimpairmentInput
      $limit: Int
    ) {
      otherhealthimpairments(filter: $filter, limit: $limit) {
        RR_TR_M_WH_M_OHI
      }
    }
  `,
};

export default otherHealthImpairmentQueries;
