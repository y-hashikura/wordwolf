import React, { useState } from 'react';
import GameSetupPage from './pages/GameSetupPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('setup');  // 初期ページを設定

  const renderPage = () => {
    switch (currentPage) {
      case 'setup':
        return <GameSetupPage setCurrentPage={setCurrentPage} />;
      default:
        return <GameSetupPage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div>
      {/* 初期ページとして設定ページを表示 */}
      {renderPage()}  
    </div>
  );
};

export default App;