import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
// Import pages
import MainPage from './homeScreen/intialScreen';

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;