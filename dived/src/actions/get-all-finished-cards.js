import { listGroupProgress } from '../graphql/queries';
import { wrapGraphQLOperation } from './wrap-promise';

export default async function(groupId) {
  const {
    done: { data },
    error,
  } = await wrapGraphQLOperation(listGroupProgress, { groupId });

  if (data) {
    return { done: data.listGroupProgress.items.map(card => card.id) };
  }
  return { error };
}
