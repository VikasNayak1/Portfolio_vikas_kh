import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import "./styles/Header.scss";
import "./styles/App.scss";
import "./styles/Home.scss";
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
 
