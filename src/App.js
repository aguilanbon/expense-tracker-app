import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import GlobalStyles from './components/styles/Global.styled'
import Signup from './pages/Signup';
import Home from './pages/Home';
import Footer from './components/Footer';
import { ExpenseProvider } from './helpers/ExpenseTrackerContext';

function App() {
  return (
    <ExpenseProvider>
        <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login />}></Route>
              <Route path='/home' element={<Home />}></Route>
              <Route path='/signup' element={<Signup />}></Route>
              <Route path='*' element={<Login />}></Route>
            </Routes>
          </BrowserRouter>
        <Footer />
    </ExpenseProvider>
  );
}

export default App;
