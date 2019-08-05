// eslint-disable
// this is an auto generated file. This will be overwritten

export const createCards = `mutation CreateCards($input: CreateCardsInput!) {
  createCards(input: $input) {
    id
    number
    type
    description
  }
}
`;
export const updateCards = `mutation UpdateCards($input: UpdateCardsInput!) {
  updateCards(input: $input) {
    id
    number
    type
    description
  }
}
`;
export const deleteCards = `mutation DeleteCards($input: DeleteCardsInput!) {
  deleteCards(input: $input) {
    id
    number
    type
    description
  }
}
`;
export const createProgress = `mutation CreateProgress($input: CreateProgressInput!) {
  createProgress(input: $input) {
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
export const updateProgress = `mutation UpdateProgress($input: UpdateProgressInput!) {
  updateProgress(input: $input) {
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
export const deleteProgress = `mutation DeleteProgress($input: DeleteProgressInput!) {
  deleteProgress(input: $input) {
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
