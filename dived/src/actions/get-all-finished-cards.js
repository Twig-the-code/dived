import { listProgress } from '../graphql/queries';
import { wrapGraphQLOperation } from './wrap-promise';

export default async function(groupId) {
  const {
    done: { data },
    error,
  } = await wrapGraphQLOperation(listProgress, { groupId });

  if (data) {
    return { done: data.listProgress.items.map(card => card.cardId) };
  }
  return { error };
}
