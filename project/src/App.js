// import logo from './logo.svg';
import './App.css';
// import Header from './components/Header';
// import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import { AuthProvider } from './components/AuthContext';
import Addevent from './components/Addevent';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <AuthProvider>
      <Router>
        <Routes>
          {/* <Route path="/*"  /> */}
          <Route path="/*" element={<Register/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/addevent' element={<Addevent/>}></Route>
        </Routes>
      </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
