import { listSchools } from '../graphql/queries';
import { wrapGraphQLOperation } from './wrap-promise';

export default async function() {
  const {
    done: { data },
    error,
  } = await wrapGraphQLOperation(listSchools);

  if (data) {
    return { done: data.listSchools.items };
  }
  return { error };
}
