import logo from './logo.svg';
import './App.css';
import Data from './Data';
import Show from './Show';
import { Route,Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Show/>}/>
    <Route path='/data/:show' element={<Data/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
