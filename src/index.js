import * as React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App';
import PageNotFound from './pages/PageNotFound';

const cache = new InMemoryCache();
const uri =
  process.env.NODE_ENV === 'production'
    ? 'https://gridt-apollo.herokuapp.com/'
    : 'http://localhost:3333/';

const client = new ApolloClient({
  uri,
  cache,
});

const { worker } = require('./mocks/browser');
if (process.env.USE_MSW_MOCK_API === true) {
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
