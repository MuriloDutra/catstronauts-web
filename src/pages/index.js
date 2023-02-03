import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client"
/** importing our pages */
import Tracks from './tracks';
import {Track} from "./track";

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
})

export default function Pages() {
  return (
    <ApolloProvider client={apolloClient}>
      <Router primary={false} component={Fragment}>
        <Tracks path="/" />
        <Track path="/track/:trackId" />
      </Router>
    </ApolloProvider>
  );
}
