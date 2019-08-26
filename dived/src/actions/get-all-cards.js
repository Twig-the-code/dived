import { listCards } from '../graphql/queries';
import { wrapGraphQLOperation } from './wrap-promise';

export default async function() {
  const {
    done: { data },
    error,
  } = await wrapGraphQLOperation(listCards);

  if (data) {
    const { items } = data.listCards;
    const cards = items.sort((a, b) => a.number > b.number);
    return { done: cards };
  }
  return { error };
}
