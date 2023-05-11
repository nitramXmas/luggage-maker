import './App.css';
import Navbar from './components/Navbar';
import CreateUser from './components/CreateUser';
import Login from './components/Login';
import Luggage from './pages/Luggage';
import UserProfile from './pages/UserProfile';
function App() {
  return (
    <>
      <Navbar />
      <Luggage />
    </>
  );
}

export default App;
