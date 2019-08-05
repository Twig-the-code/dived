// eslint-disable
// this is an auto generated file. This will be overwritten

export const getCards = `query GetCards($id: ID!) {
  getCards(id: $id) {
    id
    number
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
      type
      description
    }
    nextToken
  }
}
`;
export const getProgress = `query GetProgress($id: ID!) {
  getProgress(id: $id) {
    id
    card {
      id
      number
      type
      description
    }
  }
}
`;
export const listProgresss = `query ListProgresss(
  $filter: ModelProgressFilterInput
  $limit: Int
  $nextToken: String
) {
  listProgresss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      card {
        id
        number
        type
        description
      }
    }
    nextToken
  }
}
`;
