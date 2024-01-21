
import './App.css';
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
import Welcome from './component/Home/Welcome'
import News from './component/Home/SpaceNews/News'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Addnews from './component/Addnews/Addnews';
import SignUp from './component/Signup/Signup'
import SignIn from './component/Signin/Signin'

const App = () => {

  return (
    <Router>
      <div className="bg-black">
        <Navbar />
        <Routes>
          <Route path='/' element={<Welcome />}>
          </Route>
          <Route path='/news' element={<News />}>
          </Route>
          <Route path='/addnews' element={<Addnews />}>
          </Route>
          <Route path='/Signup' element={<SignUp />}>
          </Route>
          <Route path='/Signin' element={<SignIn/>}>
          </Route>

        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
