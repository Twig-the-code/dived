/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCity = `subscription OnCreateCity {
  onCreateCity {
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
export const onUpdateCity = `subscription OnUpdateCity {
  onUpdateCity {
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
export const onDeleteCity = `subscription OnDeleteCity {
  onDeleteCity {
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
export const onCreateSchool = `subscription OnCreateSchool {
  onCreateSchool {
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
export const onUpdateSchool = `subscription OnUpdateSchool {
  onUpdateSchool {
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
export const onDeleteSchool = `subscription OnDeleteSchool {
  onDeleteSchool {
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
export const onCreateGroup = `subscription OnCreateGroup {
  onCreateGroup {
    pk
    sk
  }
}
`;
export const onUpdateGroup = `subscription OnUpdateGroup {
  onUpdateGroup {
    pk
    sk
  }
}
`;
export const onDeleteGroup = `subscription OnDeleteGroup {
  onDeleteGroup {
    pk
    sk
  }
}
`;
