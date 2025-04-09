// import logo from './logo.svg';
import './App.css';
// import Header from './components/Header';
// import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Router>
        <Routes>
          {/* <Route path="/*"  /> */}
          <Route path="/*" element={<Register/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
