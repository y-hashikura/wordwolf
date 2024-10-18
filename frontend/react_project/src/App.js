import React from 'react';
import { PageProvider, PageTransaction } from './pages';

const App = () => {
  return (
    <PageProvider>
      <PageTransaction />
    </PageProvider>
  );
};

export default App;