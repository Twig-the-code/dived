// eslint-disable
// this is an auto generated file. This will be overwritten

export const getCards = `query GetCards($id: ID!) {
  getCards(id: $id) {
    id
    number
    name
    type
    description
  }
}
`;
export const listCardss = `query ListCardss(
  $filter: ModelCardsFilterInput
  $limit: Int
  $nextToken: String
) {
  listCardss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      number
      name
      type
      description
    }
    nextToken
  }
}
`;
