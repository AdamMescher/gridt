const checkLimit = (response, givenLimit, max) =>
  givenLimit > max
    ? response
        .json({
          error: `You must limit your API requests to ${max} or fewer items per request`,
        })
        .end()
    : null;

module.exports = checkLimit;
