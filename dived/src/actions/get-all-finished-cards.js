import { API, graphqlOperation } from 'aws-amplify';
import { listGroupProgress } from '../graphql/queries';

export default async function(groupId) {
  const { data } = await API.graphql(
    graphqlOperation(listGroupProgress, { groupId })
  );
  console.log('blog successfully fetched', data);

  const getCardId = data => data.id;

  return data.listGroupProgress.items.map(getCardId);
}
