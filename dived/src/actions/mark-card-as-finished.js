import { markCardAsFinished } from '../graphql/mutations';
import { wrapGraphQLOperation } from './wrap-promise';

export default async function(cardId) {
  const { done, error } = await wrapGraphQLOperation(markCardAsFinished, {
    input: { cardId },
  });

  if (done) {
    return { done: done.data.markCardAsFinished.items };
  }
  return { error };
}
