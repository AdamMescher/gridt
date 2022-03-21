import { graphql } from 'msw';
import SCHOOLS_BY_NAME_AUT_RESPONSE from './MSW_QUERIES/SCHOOLS_BY_NAME_AUT_RESPONSE';
import SCHOOLS_BY_NAME_DB_RESPONSE from './MSW_QUERIES/SCHOOLS_BY_NAME_DB_RESPONSE';
import SCHOOLS_BY_NAME_DD_RESPONSE from './MSW_QUERIES/SCHOOLS_BY_NAME_DD_RESPONSE';
import SCHOOLS_BY_NAME_HI_RESPONSE from './MSW_QUERIES/SCHOOLS_BY_NAME_HI_RESPONSE';
import SCHOOLS_BY_NAME_MR_RESPONSE from './MSW_QUERIES/SCHOOLS_BY_NAME_MR_RESPONSE';
import SCHOOLS_BY_NAME_TOTAL_RESPONSE from './MSW_QUERIES/SCHOOLS_BY_NAME_TOTAL_RESPONSE';

export const handlers = [
  graphql.query('SCHOOLS_BY_NAME_AUT', (request, response, context) => {
    return response(
      context.data({
        autisms: SCHOOLS_BY_NAME_AUT_RESPONSE,
      }),
    );
  }),
  graphql.query('SCHOOLS_BY_NAME_DB', (request, response, context) => {
    return response(
      context.data({
        deafblindnesses: SCHOOLS_BY_NAME_DB_RESPONSE,
      }),
    );
  }),
  graphql.query('SCHOOLS_BY_NAME_DD', (request, response, context) => {
    return response(
      context.data({
        developmentaldelays: SCHOOLS_BY_NAME_DD_RESPONSE,
      }),
    );
  }),
  graphql.query('SCHOOLS_BY_NAME_MR', (request, response, context) => {
    return response(
      context.data({
        emotionaldisturbances: SCHOOLS_BY_NAME_MR_RESPONSE,
      }),
    );
  }),
  graphql.query('SCHOOLS_BY_NAME_HI', (request, response, context) => {
    return response(
      context.data({
        hearingimpairments: SCHOOLS_BY_NAME_HI_RESPONSE,
      }),
    );
  }),
  graphql.query('SCHOOLS_BY_NAME_TOTAL', (request, response, context) => {
    return response(
      context.data({
        schools: SCHOOLS_BY_NAME_TOTAL_RESPONSE,
      }),
    );
  }),
];
