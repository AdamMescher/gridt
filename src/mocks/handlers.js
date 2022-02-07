import { graphql } from 'msw';

export const handlers = [
  graphql.query('ROOT_QUERY', (request, response, context) => {
    return response(
      context.data({
        schools: [{ RR_AM_F_POP: 0.030075188, __typename: 'School' }],
      }),
    );
  }),
];
