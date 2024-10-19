import React from 'react';
import './styles/styles.css'
import { PageProvider, PageTransaction } from './pages';
import { Footer } from './components';

const App = () => {
  return (
    <PageProvider>
      <PageTransaction />
      <Footer />
    </PageProvider>
  );
};

export default App;