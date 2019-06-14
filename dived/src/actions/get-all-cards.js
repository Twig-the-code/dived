import { API, graphqlOperation } from 'aws-amplify'
import { listCardss } from './../graphql/queries'

const card1={id:1 , name: "Testi", type: "yellow"}
const card2={id:2 , name: "Testi", type: "red"}
const card3={id:3 , name: "Testi", type: "yellow"}
const card4={id:4 , name: "Testi", type: "blue"}
const card5={id:5 , name: "Testi", type: "pink"}
const card6={id:6 , name: "Testi", type: "pink"}

const cards= [card1, card2, card3, card4, card5, card6]

// import the API & graphqlOperation helpers as well as the query

// next, we create a function to interact with the API

export default async function () {
  const {data} = await API.graphql(graphqlOperation(listCardss))
  console.log('blog successfully fetched', data)
  return data.listCardss.items;
}