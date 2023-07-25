import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useContext, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import SinglePost from './components/singlePost/SinglePost';
import TopBar from './components/topbar/Topbar';
import { Context } from './context/Context';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import './styles/global.scss';

function App() {
  const { user } = useContext(Context);
  const [colorScheme, setColorScheme] = useState('light');
  const toggleColorScheme = () =>
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        theme={{
          colorScheme,
          // Fonts for the title, not sub headings
          headings: {
            fontFamily: 'Varela Round, Roboto, sans-serif',
          },
          // Fonts for everything but the <Title></Title> tag
          fontFamily: 'Lora, Pacifico',
        }}
      >
        <Router>
          <div className='main'>
            <div className='topbar'>
              <TopBar />
            </div>
            <div>
              <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route
                  path='/login'
                  element={user ? <Home /> : <Login />}
                ></Route>
                <Route
                  path='/write'
                  element={user ? <Write /> : <Register />}
                ></Route>
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
            </div>
            <div>
              <Footer className='footer1' />
            </div>
          </div>
        </Router>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
