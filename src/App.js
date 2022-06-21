import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import GlobalStyles from './components/styles/Global.styled'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
