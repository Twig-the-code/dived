import { API, graphqlOperation } from 'aws-amplify'
import { createProgress } from './../graphql/mutations'

export default async function (progressCardId) {
  const {data}     = await API.graphql(graphqlOperation(createProgress, {input: {progressCardId}}))
  return data.createProgress.items;
}