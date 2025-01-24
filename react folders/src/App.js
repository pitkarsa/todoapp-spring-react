import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      {/* <h2>Task List</h2> */}
      <Outlet />
    </>
  );
}

export default App;
