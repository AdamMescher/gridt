import { graphql } from 'msw';
import ALL_SCHOOLS_RESPONSES from './MSW_QUERIES/ALL_SCHOOLS_BY_NAME_RESPONSES';
import ALL_GENDER_RACE_DISABILITY_RESPONSES from './MSW_QUERIES/ALL_SCHOOLS_BY_NAME_RESPONSES';

export const handlers = [
  graphql.query('SCHOOLS_BY_NAME_AUT_QUERY', (request, response, context) => {
    return response(
      context.data({
        autisms: ALL_SCHOOLS_RESPONSES.AUT,
      }),
    );
  }),
  graphql.query('SCHOOLS_BY_NAME_DB_QUERY', (request, response, context) => {
    return response(
      context.data({
        deafblindnesses: ALL_SCHOOLS_RESPONSES.DB,
      }),
    );
  }),
  graphql.query('SCHOOLS_BY_NAME_DD_QUERY', (request, response, context) => {
    return response(
      context.data({
        developmentaldelays: ALL_SCHOOLS_RESPONSES.DD,
      }),
    );
  }),
  graphql.query('SCHOOLS_BY_NAME_EMN_QUERY', (request, response, context) => {
    return response(
      context.data({
        emotionaldisturbances: ALL_SCHOOLS_RESPONSES.EMN,
      }),
    );
  }),
  graphql.query('SCHOOLS_BY_NAME_HI_QUERY', (request, response, context) => {
    return response(
      context.data({
        hearingimpairments: ALL_SCHOOLS_RESPONSES.HI,
      }),
    );
  }),
  graphql.query('SCHOOLS_BY_NAME_MR_QUERY', (request, response, context) => {
    return response(
      context.data({
        intellectualdisabilities: ALL_SCHOOLS_RESPONSES.MR,
      }),
    );
  }),
  graphql.query('SCHOOLS_BY_NAME_MD_QUERY', (request, response, context) => {
    return response(
      context.data({
        multipledisabilities: ALL_SCHOOLS_RESPONSES.MD,
      }),
    );
  }),
  graphql.query('SCHOOLS_BY_NAME_OI_QUERY', (request, response, context) => {
    return response(
      context.data({
        orthopedicimpairments: ALL_SCHOOLS_RESPONSES.OI,
      }),
    );
  }),
  graphql.query('SCHOOLS_BY_NAME_OHI_QUERY', (request, response, context) => {
    return response(
      context.data({
        otherhealthimpairments: ALL_SCHOOLS_RESPONSES.OHI,
      }),
    );
  }),
  graphql.query('SCHOOLS_BY_NAME_SLD_QUERY', (request, response, context) => {
    return response(
      context.data({
        specificlearningdisabilities: ALL_SCHOOLS_RESPONSES.SLD,
      }),
    );
  }),
  graphql.query('SCHOOLS_BY_NAME_SLI_QUERY', (request, response, context) => {
    return response(
      context.data({
        speechlanguageimpairments: ALL_SCHOOLS_RESPONSES.SLI,
      }),
    );
  }),
  graphql.query('SCHOOLS_BY_NAME_TBI_QUERY', (request, response, context) => {
    return response(
      context.data({
        traumaticbraininjuries: ALL_SCHOOLS_RESPONSES.TBI,
      }),
    );
  }),
  graphql.query('SCHOOLS_BY_NAME_VI_QUERY', (request, response, context) => {
    return response(
      context.data({
        visualimpairments: ALL_SCHOOLS_RESPONSES.VI,
      }),
    );
  }),
  graphql.query('SCHOOLS_BY_NAME_TOTAL_QUERY', (request, response, context) => {
    return response(
      context.data({
        schools: ALL_SCHOOLS_RESPONSES.TOTAL,
      }),
    );
  }),
  graphql.query('SCHOOLS_AM_F_TOTAL_QUERY', (request, response, context) => {
    return response(
      context.data({
        schools: ALL_GENDER_RACE_DISABILITY_RESPONSES.SCHOOLS_AM_F_TOTAL_QUERY,
      }),
    );
  }),
];
