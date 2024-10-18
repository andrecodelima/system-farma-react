import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import NavBar from './components/layout/NavBar'
import Home from './components/pages/Home'
import Medicamentos from './components/pages/Medicamentos'
import TrabalheConosco from './components/pages/TrabalheConosco'
import Login from './components/pages/Login'

import Container from './components/layout/Container';
import Footer from './components/layout/Footer'

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Medicamentos" element={<Medicamentos/>}></Route>
          <Route path="/TrabalheConosco" element={<TrabalheConosco/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
        </Routes>
        </Container>
      </Router>

      <Footer/>
    </>
  );
}

export default App;
