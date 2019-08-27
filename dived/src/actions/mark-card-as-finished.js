import { addFinishedCard } from '../graphql/mutations';
import { wrapGraphQLOperation } from './wrap-promise';

export default async function(cardId) {
  const { done, error } = await wrapGraphQLOperation(addFinishedCard, {
    input: { cardId },
  });

  console.log({ done, error })

  if (done) {
    return { done: done.data.addFinishedCard.items };
  }
  return { error };
}
