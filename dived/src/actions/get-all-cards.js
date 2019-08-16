import { API, graphqlOperation } from 'aws-amplify';
import { listCards } from '../graphql/queries';
import { wrapGraphQLOperation } from './wrap-promise';

export default async function() {
  console.log('get all cards!');
  const {
    done: { data },
    error
  } = await wrapGraphQLOperation(listCards);

  const { items } = data.listCards;
  const cards = items.sort((a, b) => a.number > b.number);
  return cards;
}
