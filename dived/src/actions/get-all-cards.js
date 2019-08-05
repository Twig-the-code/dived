import {API, graphqlOperation} from 'aws-amplify'
import {listCardss} from './../graphql/queries'

export default async function () {
  const {data} = await API.graphql(graphqlOperation(listCardss))
  return data.listCardss.items;
}