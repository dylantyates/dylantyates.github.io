import { ApolloServer } from '@apollo/server';

import { startStandaloneServer } from '@apollo/server/standalone';


// A schema is a collection of type definitions (hence "typeDefs")

// that together define the "shape" of queries that are executed against

// your data.

const typeDefs = `#graphql

  type Animal {
    
    id: Int

    type: String

    name: String
    
    age: Int

    nickname: String

    birthMonth: String

    image: String
  }

  type Query {

    animals: [Animal]
    animal(id: Int): Animal

  }

`;

const animals = [
    {
        id: 0,
        type: 'Cat',
        name: 'Chieftan Keeftan',
        age: 9,
        nickname: 'Nugs',
        birthMonth: 'July',
        image: 'LinkToImage'
      },
      {
        id: 1,
        type: 'Dog',
        name: 'Griffie',
        age: 8,
        nickname: 'Piffers',
        birthMonth: 'April',
        image: 'LinkToImage'
      },
      {
        id: 2,
        type: 'Dog',
        name: 'Winnie Rose',
        age: 7,
        nickname: 'Winnie Pinnie',
        birthMonth: 'June',
        image: 'LinkToImage'
      },
      {
        id: 3,
        type: 'Dog',
        name: 'Dani Marie',
        age: 7,
        nickname: 'Banani',
        birthMonth: 'July',
        image: 'LinkToImage'
      },
      {
        id: 4,
        type: 'Dog',
        name: 'Norman',
        age: 7,
        nickname: 'Norman Porman',
        birthMonth: 'May',
        image: 'LinkToImage'
      },
      {
        id: 5,
        type: 'Dog',
        name: 'Huxley Bernard',
        age: 3,
        nickname: 'Buxle',
        birthMonth: 'November',
        image: 'LinkToImage'
      },
      {
        id: 6,
        type: 'Dog',
        name: 'Bosley James',
        age: 2,
        nickname: 'Binky',
        birthMonth: 'December',
        image: 'LinkToImage'
      },
] 

// Resolvers define how to fetch the types defined in your schema.

// This resolver retrieves books from the "books" array above.

const resolvers = {

    Query: {
      animals: () => animals,
      animal(parent, args, contextValue, info) {
        return animals.find(animal => animal.id === args.id)
      }
    },
  
  };

  // The ApolloServer constructor requires two parameters: your schema

// definition and your set of resolvers.

const server = new ApolloServer({

    typeDefs,
  
    resolvers,
  
  });
  
  
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  
  //  1. creates an Express app
  
  //  2. installs your ApolloServer instance as middleware
  
  //  3. prepares your app to handle incoming requests
  
  const { url } = await startStandaloneServer(server, {
  
    listen: { port: 4000 },
  
  });
  
  
  console.log(`🚀  Server ready at: ${url}`);