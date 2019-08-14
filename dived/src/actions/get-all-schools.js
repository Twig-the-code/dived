import {API, graphqlOperation} from 'aws-amplify'
import {listSchools} from './../graphql/queries'
import {wrapGraphQLOperation} from "./wrap-promise"

export default async function () {
  const {done: {data}, error} = await wrapGraphQLOperation(listSchools)

  console.log({data})
  return data.listSchools.items;
}