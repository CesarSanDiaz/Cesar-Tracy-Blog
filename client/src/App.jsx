import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useContext, useState } from 'react';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import Categories from './components/categories/Categories';
import Footer from './components/footer/Footer';
import SinglePost from './components/singlePost/SinglePost';
import TopBar from './components/topbar/Topbar';
import { Context } from './context/Context';
import About from './pages/about/About';
import BlogPage from './pages/blog/BlogPage';
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
        // withNormalizeCSS
        theme={{
          globalStyles: (theme) => ({
            '*, *::before, *::after': {
              boxSizing: 'border-box',
            },
            body: {
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.myPurple[7]
                  : theme.white,
            },
            // '.paperMain': {
            //   backgroundColor:
            //     theme.colorScheme === 'dark'
            //       ? theme.colors.myPurple[7]
            //       : theme.colors.dark,
            // },
          }),
          colorScheme,
          // Adding my custom colors. myBlue[4] and myYellow[4] are the main ones
          colors: {
            dark: [
              '#C1C2C5',
              '#A6A7AB',
              '#909296',
              '#5c5f66',
              '#373A40',
              '#2C2E33',
              '#25262b',
              '#18071b',
              '#141517',
              '#101113',
            ],
            myBlue: [
              '#dadbdd',
              '#aaabb1',
              '#797b85',
              '#494c58',
              '#181c2c',
              '#131623',
              '#0e101a',
              '#090a10',
              '#040407',
              '#18071B',
            ],
            myYellow: [
              '#fffcf0',
              '#fff7d9',
              '#fff2c3',
              '#ffedac',
              '#ffe896',
              '#ffe480',
              '#ffdf69',
              '#ffda53',
              '#debe48',
              '#bda13d',
            ],
            myPurple: [
              '#eae9ea',
              '#ccc8cd',
              '#aea8af',
              '#908892',
              '#726874',
              '#544756',
              '#2F2032',
              '#18071b',
              '#150617',
              '#120514',
            ],
          },
          // Fonts for the title, not sub headings
          headings: {
            fontFamily: 'Lora, sans-serif',
          },
          // Fonts for everything but the <Title></Title> tag
          fontFamily: 'Ubuntu, Pacifico',
          // default heading colors
          components: {
            Button: {
              defaultProps: (theme) => ({
                variant: 'outline',
                size: 'xs',
                color: theme.colorScheme === 'dark' ? 'myYellow.7' : 'blue',
              }),
            },
            Title: {
              defaultProps: (theme) => ({
                color: theme.colorScheme === 'dark' ? theme.white : theme.black,
              }),
            },
            Text: {
              defaultProps: (theme) => ({
                color: theme.colorScheme === 'dark' ? theme.white : theme.black,
              }),
            },
          },
        }}
      >
        <Router>
          <TopBar />
          <div className='parent'>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route exact path='/blog' element={<BlogPage />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route
                path='/login'
                element={user ? <Navigate to='/' /> : <Login />}
              ></Route>
              <Route
                path='/write'
                element={user ? <Write /> : <Register />}
              ></Route>
              <Route path='/singlePost' element={<SinglePost />}></Route>
              <Route path='/categories' element={<Categories />}></Route>
              <Route
                path='/register'
                element={user ? <Navigate to='/' /> : <Register />}
              ></Route>
              <Route path='/post/:postId' element={<Single />}></Route>
              <Route
                path='/settings'
                element={user ? <Settings /> : <Register />}
              ></Route>
            </Routes>
          </div>
          <Footer />
        </Router>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
