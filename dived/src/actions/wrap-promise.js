import { API, graphqlOperation } from 'aws-amplify';

// promise, args => async => {done, error}
export const wrapPromise = (func, ...args) => {
  return func
    .call(...args)
    .then(done => ({ done }))
    .catch(error => ({ error }));
};

export const wrapGraphQLOperation = (query, args) => {
  return API.graphql(graphqlOperation(query, args))
    .then(done => {
      return { done };
    })
    .catch(error => {
      return { error };
    });
};
