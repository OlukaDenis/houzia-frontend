import React from 'react';
import AppRouter from '../router/router';
import '../styles/App.scss';
import { initFontAwesome } from '../helpers/appUtils';

initFontAwesome();

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
