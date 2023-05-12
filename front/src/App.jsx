import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Luggage from './pages/Luggage';
import CreateUser from './components/CreateUser'
import Game from './pages/Game';
import Result from './pages/Result';
import UserProfile from './pages/UserProfile'

function App() {
  return (
    <>
      <Navbar />
        <Router>
            <Routes>
                <Route path='/' element={<Luggage />}/>
                <Route path='/game' element={<Game />} />
                <Route path='/profile' element={<UserProfile />} />
                <Route path='/register' element={<CreateUser/>} />
                <Route path='/result' element={<Result />} />
            </Routes>
        </Router>
    </>
  );
}

export default App;
