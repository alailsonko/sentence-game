import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import configureStore from './store';
import GlobalStyles from './styles/globalStyles';

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Routes />
    </Provider>
  );
}

export default App;
