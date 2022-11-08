import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './assest/Add';
import NoPage from './assest/NoPage';
import Add from './assest/Add';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="Add" element={<Add />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
