import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import '../assets/paleta.css';
import './App.css';
// import { useNavigate } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
