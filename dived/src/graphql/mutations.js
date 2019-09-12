/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const markCardAsFinished = `mutation MarkCardAsFinished($input: FinishedCardInput!) {
  markCardAsFinished(input: $input) {
    cardId
  }
}
`;
export const removeFinishedCard = `mutation RemoveFinishedCard($input: FinishedCardInput!) {
  removeFinishedCard(input: $input) {
    cardId
  }
}
`;
export const createCity = `mutation CreateCity($input: CreateCityInput!) {
  createCity(input: $input) {
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
export const updateCity = `mutation UpdateCity($input: UpdateCityInput!) {
  updateCity(input: $input) {
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
export const deleteCity = `mutation DeleteCity($input: DeleteCityInput!) {
  deleteCity(input: $input) {
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
export const createSchool = `mutation CreateSchool($input: CreateSchoolInput!) {
  createSchool(input: $input) {
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
export const updateSchool = `mutation UpdateSchool($input: UpdateSchoolInput!) {
  updateSchool(input: $input) {
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
export const deleteSchool = `mutation DeleteSchool($input: DeleteSchoolInput!) {
  deleteSchool(input: $input) {
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
export const createGroup = `mutation CreateGroup($input: CreateGroupInput!) {
  createGroup(input: $input) {
    pk
    sk
  }
}
`;
export const updateGroup = `mutation UpdateGroup($input: UpdateGroupInput!) {
  updateGroup(input: $input) {
    pk
    sk
  }
}
`;
export const deleteGroup = `mutation DeleteGroup($input: DeleteGroupInput!) {
  deleteGroup(input: $input) {
    pk
    sk
  }
}
`;
