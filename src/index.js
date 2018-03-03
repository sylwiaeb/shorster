import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'

const client = new ApolloClient({
  // id got during `grapcool deploy`
  // run `graphcool info` to get it
  link: new HttpLink('https://api.graph.cool/simple/v1/cjebq7qpa3wkv01969qulv05r'),
  cache: new InMemoryCache()
});

// HOC
const withAppolloProvider = Comp => (
  <ApolloProvider client={client}>{Comp}</ApolloProvider>
);

// wrap APP component with HOC
ReactDOM.render(
  withAppolloProvider(<App />),
  document.getElementById('root')
);
registerServiceWorker();
