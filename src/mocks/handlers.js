import { graphql } from 'msw';
import ALL_SCHOOLS_RESPONSE from './MSW_QUERIES/ALL_SCHOOLS_BY_NAME_RESPONSE';

export const handlers = [
  graphql.query('SCHOOLS_BY_NAME_AUT', (request, response, context) => {
    return response(
      context.data({
        autisms: ALL_SCHOOLS_RESPONSE.AUT,
      }),
    );
  }),
  graphql.query('SCHOOLS_BY_NAME_DB', (request, response, context) => {
    return response(
      context.data({
        deafblindnesses: ALL_SCHOOLS_RESPONSE.DB,
      }),
    );
  }),
  graphql.query('SCHOOLS_BY_NAME_DD', (request, response, context) => {
    return response(
      context.data({
        developmentaldelays: ALL_SCHOOLS_RESPONSE.DD,
      }),
    );
  }),
  graphql.query('SCHOOLS_BY_NAME_EMN', (request, response, context) => {
    return response(
      context.data({
        emotionaldisturbances: ALL_SCHOOLS_RESPONSE.EMN,
      }),
    );
  }),
  graphql.query('SCHOOLS_BY_NAME_HI', (request, response, context) => {
    return response(
      context.data({
        hearingimpairments: ALL_SCHOOLS_RESPONSE.HI,
      }),
    );
  }),
  graphql.query('SCHOOLS_BY_NAME_MR', (request, response, context) => {
    return response(
      context.data({
        intellectualdisabilities: ALL_SCHOOLS_RESPONSE.MR,
      }),
    );
  }),
  graphql.query('SCHOOLS_BY_NAME_MD', (request, response, context) => {
    return response(
      context.data({
        multipledisabilities: ALL_SCHOOLS_RESPONSE.MD,
      }),
    );
  }),
  graphql.query('SCHOOLS_BY_NAME_OI', (request, response, context) => {
    return response(
      context.data({
        orthopedicimpairments: ALL_SCHOOLS_RESPONSE.OI,
      }),
    );
  }),
  graphql.query('SCHOOLS_BY_NAME_OHI', (request, response, context) => {
    return response(
      context.data({
        otherhealthimpairments: ALL_SCHOOLS_RESPONSE.OHI,
      }),
    );
  }),
  graphql.query('SCHOOLS_BY_NAME_SLD', (request, response, context) => {
    return response(
      context.data({
        specificlearningdisabilities: ALL_SCHOOLS_RESPONSE.SLD,
      }),
    );
  }),
  graphql.query('SCHOOLS_BY_NAME_SLI', (request, response, context) => {
    return response(
      context.data({
        speechlanguageimpairments: ALL_SCHOOLS_RESPONSE.SLI,
      }),
    );
  }),
  graphql.query('SCHOOLS_BY_NAME_TBI', (request, response, context) => {
    return response(
      context.data({
        traumaticbraininjuries: ALL_SCHOOLS_RESPONSE.TBI,
      }),
    );
  }),
  graphql.query('SCHOOLS_BY_NAME_VI', (request, response, context) => {
    return response(
      context.data({
        visualimpairments: ALL_SCHOOLS_RESPONSE.VI,
      }),
    );
  }),
  graphql.query('SCHOOLS_BY_NAME_TOTAL', (request, response, context) => {
    return response(
      context.data({
        schools: ALL_SCHOOLS_RESPONSE.TOTAL,
      }),
    );
  }),
];
