# DivED project

This project is to create an app for school groups (classes, parts of classes) to follow their process on the learning 
of the 35 'cards'

## architectural decisions.

The main driver is the ability to develop fast. Using latest AWS services. 

The app will be hosted on a public S3 bucket as SPA




## DynamoDB table setup

based on the good example on how to define DynamoDB tables
[in this link](https://www.trek10.com/blog/dynamodb-single-table-relational-modeling/)

### Access patterns

* get group by group ID
    * details, 
    * progress
* Number of groups close to a location.

* get all groups for a city
* get all groups for a school
* get all groups


| name   | pk  | sk (GSI PK) | data (GSI SK) | additional Attributes |
|--------|-----|-------------|---------------|-----------------------|
| Group | groupId* | "GROUP" | geoHash | group details... |
| Cities | city number | "CITY" | nameFi | nameSe |
| School | city | schoolName | "SCHOOL" | geoHash |
| Groups from school| city#schoolName | 
| Card | cardId | cardType |  | | 


adjacency lists

| name   | pk  | sk (GSI PK) | data (GSI SK) | additional Attributes |
|--------|-----|-------------|---------------|-----------------------|
| Group | groupId* | "GROUP" | geoHash | group details... |
| new, progress | groupId* | cardId | "FINISHED" | |
| School | city | schoolName | "SCHOOL" | geoHash
| Groups from school| city#schoolName | 
| Card | cardId | cardType |  | | 

`* groupId is from Cognito!` 

### models

Few words about models, as defined in 
`amplify/backend/api/dived/schema.graphql`


####Cards 

is @model so that only admins can create/update cards. They shoule be available to everyone else.
This is done by 2 steps. Creating a query to schema

```
type Query {
    getAPublicCard(id: ID!): Card
    listAllCards(filter: FilterAllCardsInput, limit: Int, nextToken: String): AllCards
}
```

and then adding a resolver to `/resolvers` directory





