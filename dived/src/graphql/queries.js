/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listProgress = `query ListProgress($groupId: String!, $limit: Int, $nextToken: String) {
  listProgress(groupId: $groupId, limit: $limit, nextToken: $nextToken) {
    items {
      cardId
    }
    nextToken
  }
}
`;
export const getCity = `query GetCity($id: ID!) {
  getCity(id: $id) {
    id
    nameFi
    nameSe
    number
    schools {
      items {
        slug
        name
        language
      }
      nextToken
    }
  }
}
`;
export const listCitys = `query ListCitys(
  $filter: ModelCityFilterInput
  $limit: Int
  $nextToken: String
) {
  listCitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      nameFi
      nameSe
      number
      schools {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getSchool = `query GetSchool($slug: String!) {
  getSchool(slug: $slug) {
    slug
    city {
      id
      nameFi
      nameSe
      number
      schools {
        nextToken
      }
    }
    name
    language
  }
}
`;
export const listSchools = `query ListSchools(
  $slug: String
  $filter: ModelSchoolFilterInput
  $limit: Int
  $nextToken: String
) {
  listSchools(
    slug: $slug
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      slug
      city {
        id
        nameFi
        nameSe
        number
      }
      name
      language
    }
    nextToken
  }
}
`;
export const getGroup = `query GetGroup($pk: String!, $sk: String!) {
  getGroup(pk: $pk, sk: $sk) {
    pk
    sk
  }
}
`;
export const listGroups = `query ListGroups(
  $pk: String
  $sk: ModelStringKeyConditionInput
  $filter: ModelGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  listGroups(
    pk: $pk
    sk: $sk
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      pk
      sk
    }
    nextToken
  }
}
`;
