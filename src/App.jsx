import './App.css';
import Navbar from './components/Navbar';
import UserProfile from './pages/UserProfile';



function App() {
  return (
    <div className='app'>
      <Navbar />
      <UserProfile/>
    </div>
  );
}

export default App;
