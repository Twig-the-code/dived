import {API, graphqlOperation} from 'aws-amplify'

// promise, args => async => {done, error}
export const wrapPromise = (func, ...args) =>
  {
    console.log({func, ...args})
    console.log(API.graphql(...args))
    return func.call(...args).then( done => ({done})).catch(error => ({error}))

  }

export const wrapGraphQLOperation = (query, args) => {
  console.log("wrap graphql operation", {args})
  return API.graphql(graphqlOperation(query, args))
    .then( done => {
      console.log("returtning graphql: ", done)
      return {done}
    })
    .catch(error => {
      return {error}
    }).finally(x => {console.log({x})})
}
