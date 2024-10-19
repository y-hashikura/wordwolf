import React from 'react';
import './styles/styles.css'
import { ProviderPage, TransactionPage } from './pages';
import { Footer } from './components';

const App = () => {
  return (
    <ProviderPage>
      <TransactionPage />
      <Footer />
    </ProviderPage>
  );
};

export default App;