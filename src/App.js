import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import { GithubProvider } from './context/github/GithubContext';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import {AlertProvider} from './context/alert/AlertContext'
import Alert from './components/layout/Alert';
import User from './pages/User';
function App() {
  return (
    <GithubProvider>
      <AlertProvider>
    <Router>
      <div className="flex flex-col justify-between h-screen">
      <Navbar/>
      <main className='mx-auto p-3 pb-12 container'>
      <Alert/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/user/:login' element={<User/>}/>
          <Route path='/notfound' element={<NotFound/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </main>
      <Footer/>
      </div>
    </Router>
    </AlertProvider>
    </GithubProvider>
  );
}

export default App;
