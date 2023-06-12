import { useContext } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SinglePost from './components/singlePost/SinglePost';
import TopBar from './components/topbar/Topbar';
import { Context } from './context/Context';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import Write from './pages/write/Write';

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/login' element={user ? <Home /> : <Login />}></Route>
        <Route path='/write' element={user ? <Write /> : <Register />}></Route>
        <Route path='/singlePost' element={<SinglePost />}></Route>
        <Route
          path='/register'
          element={user ? <Home /> : <Register />}
        ></Route>
        <Route path='/post/:postId' element={<Single />}></Route>
        <Route
          path='/settings'
          element={user ? <Settings /> : <Register />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
