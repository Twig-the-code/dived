// eslint-disable
// this is an auto generated file. This will be overwritten

export const listCards = `query ListCards($filter: CardFilterInput, $limit: Int, $nextToken: String) {
  listCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      number
      type
    }
    nextToken
  }
}
`;
export const listGroupProgress = `query ListGroupProgress($groupId: String!, $limit: Int, $nextToken: String) {
  listGroupProgress(groupId: $groupId, limit: $limit, nextToken: $nextToken) {
    items {
      id
    }
    nextToken
  }
}
`;
