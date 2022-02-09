import { gql } from '@apollo/client';

const speechOrLanguageImpairmentQueries = {
  SCHOOLS_AM_F_SLI_QUERY: gql`
    query Query(
      $filter: FilterFindManySpeechlanguageimpairmentInput
      $limit: Int
    ) {
      speechlanguageimpairments(filter: $filter, limit: $limit) {
        RR_AS_F_POP_SLI
      }
    }
  `,
  SCHOOLS_AM_M_SLI_QUERY: gql`
    query Query(
      $filter: FilterFindManySpeechlanguageimpairmentInput
      $limit: Int
    ) {
      speechlanguageimpairments(filter: $filter, limit: $limit) {
        RR_AM_M_POP_SLI
      }
    }
  `,
  SCHOOLS_AS_F_SLI_QUERY: gql`
    query Query(
      $filter: FilterFindManySpeechlanguageimpairmentInput
      $limit: Int
    ) {
      speechlanguageimpairments(filter: $filter, limit: $limit) {
        RR_AS_F_POP_SLI
      }
    }
  `,
  SCHOOLS_AS_M_SLI_QUERY: gql`
    query Query(
      $filter: FilterFindManySpeechlanguageimpairmentInput
      $limit: Int
    ) {
      speechlanguageimpairments(filter: $filter, limit: $limit) {
        RR_AS_M_POP_SLI
      }
    }
  `,
  SCHOOLS_BL_F_SLI_QUERY: gql`
    query Query(
      $filter: FilterFindManySpeechlanguageimpairmentInput
      $limit: Int
    ) {
      speechlanguageimpairments(filter: $filter, limit: $limit) {
        RR_BL_F_POP_SLI
      }
    }
  `,
  SCHOOLS_BL_M_SLI_QUERY: gql`
    query Query(
      $filter: FilterFindManySpeechlanguageimpairmentInput
      $limit: Int
    ) {
      speechlanguageimpairments(filter: $filter, limit: $limit) {
        RR_BL_M_POP_SLI
      }
    }
  `,
  SCHOOLS_HI_F_SLI_QUERY: gql`
    query Query(
      $filter: FilterFindManySpeechlanguageimpairmentInput
      $limit: Int
    ) {
      speechlanguageimpairments(filter: $filter, limit: $limit) {
        RR_HI_F_POP_SLI
      }
    }
  `,
  SCHOOLS_HI_M_SLI_QUERY: gql`
    query Query(
      $filter: FilterFindManySpeechlanguageimpairmentInput
      $limit: Int
    ) {
      speechlanguageimpairments(filter: $filter, limit: $limit) {
        RR_HI_M_POP_SLI
      }
    }
  `,
  SCHOOLS_HP_F_SLI_QUERY: gql`
    query Query(
      $filter: FilterFindManySpeechlanguageimpairmentInput
      $limit: Int
    ) {
      speechlanguageimpairments(filter: $filter, limit: $limit) {
        RR_HP_F_POP_SLI
      }
    }
  `,
  SCHOOLS_HP_M_SLI_QUERY: gql`
    query Query(
      $filter: FilterFindManySpeechlanguageimpairmentInput
      $limit: Int
    ) {
      speechlanguageimpairments(filter: $filter, limit: $limit) {
        RR_HP_M_POP_SLI
      }
    }
  `,
  SCHOOLS_TR_F_SLI_QUERY: gql`
    query Query(
      $filter: FilterFindManySpeechlanguageimpairmentInput
      $limit: Int
    ) {
      speechlanguageimpairments(filter: $filter, limit: $limit) {
        RR_TR_F_POP_SLI
      }
    }
  `,
  SCHOOLS_TR_M_SLI_QUERY: gql`
    query Query(
      $filter: FilterFindManySpeechlanguageimpairmentInput
      $limit: Int
    ) {
      speechlanguageimpairments(filter: $filter, limit: $limit) {
        RR_TR_M_POP_SLI
      }
    }
  `,
  SCHOOLS_WH_F_SLI_QUERY: gql`
    query Query(
      $filter: FilterFindManySpeechlanguageimpairmentInput
      $limit: Int
    ) {
      speechlanguageimpairments(filter: $filter, limit: $limit) {
        RR_WH_F_POP_SLI
      }
    }
  `,
  SCHOOLS_WH_M_SLI_QUERY: gql`
    query Query(
      $filter: FilterFindManySpeechlanguageimpairmentInput
      $limit: Int
    ) {
      speechlanguageimpairments(filter: $filter, limit: $limit) {
        RR_WH_M_POP_SLI
      }
    }
  `,
  SCHOOLS_AM_F_WH_F_SLI_QUERY: gql`
    query Query(
      $filter: FilterFindManySpeechlanguageimpairmentInput
      $limit: Int
    ) {
      speechlanguageimpairments(filter: $filter, limit: $limit) {
        RR_AM_F_WH_F_SLI
      }
    }
  `,
  SCHOOLS_AM_M_WH_M_SLI_QUERY: gql`
    query Query(
      $filter: FilterFindManySpeechlanguageimpairmentInput
      $limit: Int
    ) {
      speechlanguageimpairments(filter: $filter, limit: $limit) {
        RR_AM_M_WH_M_SLI
      }
    }
  `,
  SCHOOLS_AS_F_WH_F_SLI_QUERY: gql`
    query Query(
      $filter: FilterFindManySpeechlanguageimpairmentInput
      $limit: Int
    ) {
      speechlanguageimpairments(filter: $filter, limit: $limit) {
        RR_AS_F_WH_F_SLI
      }
    }
  `,
  SCHOOLS_AS_M_WH_M_SLI_QUERY: gql`
    query Query(
      $filter: FilterFindManySpeechlanguageimpairmentInput
      $limit: Int
    ) {
      speechlanguageimpairments(filter: $filter, limit: $limit) {
        RR_AS_M_WH_M_SLI
      }
    }
  `,
  SCHOOLS_BL_F_WH_F_SLI_QUERY: gql`
    query Query(
      $filter: FilterFindManySpeechlanguageimpairmentInput
      $limit: Int
    ) {
      speechlanguageimpairments(filter: $filter, limit: $limit) {
        RR_BL_F_WH_F_SLI
      }
    }
  `,
  SCHOOLS_BL_M_WH_M_SLI_QUERY: gql`
    query Query(
      $filter: FilterFindManySpeechlanguageimpairmentInput
      $limit: Int
    ) {
      speechlanguageimpairments(filter: $filter, limit: $limit) {
        RR_BL_M_WH_M_SLI
      }
    }
  `,
  SCHOOLS_HI_F_WH_F_SLI_QUERY: gql`
    query Query(
      $filter: FilterFindManySpeechlanguageimpairmentInput
      $limit: Int
    ) {
      speechlanguageimpairments(filter: $filter, limit: $limit) {
        RR_HI_F_WH_F_SLI
      }
    }
  `,
  SCHOOLS_HI_M_WH_M_SLI_QUERY: gql`
    query Query(
      $filter: FilterFindManySpeechlanguageimpairmentInput
      $limit: Int
    ) {
      speechlanguageimpairments(filter: $filter, limit: $limit) {
        RR_HI_M_WH_M_SLI
      }
    }
  `,
  SCHOOLS_HP_F_WH_F_SLI_QUERY: gql`
    query Query(
      $filter: FilterFindManySpeechlanguageimpairmentInput
      $limit: Int
    ) {
      speechlanguageimpairments(filter: $filter, limit: $limit) {
        RR_HP_F_WH_F_SLI
      }
    }
  `,
  SCHOOLS_HP_M_WH_M_SLI_QUERY: gql`
    query Query(
      $filter: FilterFindManySpeechlanguageimpairmentInput
      $limit: Int
    ) {
      speechlanguageimpairments(filter: $filter, limit: $limit) {
        RR_HP_M_WH_M_SLI
      }
    }
  `,
  SCHOOLS_TR_F_WH_F_SLI_QUERY: gql`
    query Query(
      $filter: FilterFindManySpeechlanguageimpairmentInput
      $limit: Int
    ) {
      speechlanguageimpairments(filter: $filter, limit: $limit) {
        RR_TR_F_WH_F_SLI
      }
    }
  `,
  SCHOOLS_TR_M_WH_M_SLI_QUERY: gql`
    query Query(
      $filter: FilterFindManySpeechlanguageimpairmentInput
      $limit: Int
    ) {
      speechlanguageimpairments(filter: $filter, limit: $limit) {
        RR_TR_M_WH_M_SLI
      }
    }
  `,
};

export default speechOrLanguageImpairmentQueries;
