import { removeFinishedCard } from '../graphql/mutations';
import { wrapGraphQLOperation } from './wrap-promise';

export default async function(cardId) {
  const { done, error } = await wrapGraphQLOperation(removeFinishedCard, {
    input: { cardId },
  });

  if (done) {
    return { done: done.data.removeFinishedCard.items };
  }
  return { error };
}
