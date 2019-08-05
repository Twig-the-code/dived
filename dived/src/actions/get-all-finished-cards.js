import { API, graphqlOperation } from 'aws-amplify'
import { listProgresss } from './../graphql/queries'

export default async function () {
  const {data}     = await API.graphql(graphqlOperation(listProgresss));
  console.log('blog successfully fetched', data);

  const getCardId = data => data.card.id;

  return data.listProgresss.items.map(getCardId);

}