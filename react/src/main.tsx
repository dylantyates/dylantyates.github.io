import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import React from 'react'
import ReactDOM from 'react-dom/client'
import Theme from './context/Theme.tsx';
import App from './App.tsx'
import './index.css'

const client = new ApolloClient({

  uri: 'http://localhost:4000/',

  cache: new InMemoryCache(),

})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Theme>
        <App />
      </Theme>
    </ApolloProvider>
  </React.StrictMode>,
)
