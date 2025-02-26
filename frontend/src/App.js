import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import { Home } from './pages/home'
import { LoginPage } from './pages/login'
import { OperationPage } from './pages/operation';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LoginPage />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/ops/deposit" element={<OperationPage operation='deposito'/>}/>
          <Route path="/ops/saque" element={<OperationPage operation='saque'/>}/>
          <Route path="/ops/transaction" element={<OperationPage operation='transação'/>}/>
          <Route path="/ops/create" element={<OperationPage operation='create'/>}/>
          <Route path="/ops/delete" element={<OperationPage operation='delete'/>}/>
          <Route path="/ops/historic" element={<OperationPage operation='historic'/>}/>

        </Routes>
    </Router>
  );
}

export default App;
