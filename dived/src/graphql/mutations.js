/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCard = `mutation CreateCard($input: CreateCardInput!) {
  createCard(input: $input) {
    id
    number
    type
  }
}
`;
export const addFinishedCard = `mutation AddFinishedCard($input: AddFinishedCardInput!) {
  addFinishedCard(input: $input) {
    id
    createdAt
  }
}
`;
export const createGroup = `mutation CreateGroup($input: CreateGroupInput) {
  createGroup(input: $input) {
    id
    createdAt
  }
}
`;
