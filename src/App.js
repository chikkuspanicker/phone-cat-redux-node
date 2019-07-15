import React from 'react';
import PhoneListPage from './components/PhoneListPage';
import './app.scss';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Phone Catalog
      </header>
      <PhoneListPage />
    </div>
  );
}

export default App;
