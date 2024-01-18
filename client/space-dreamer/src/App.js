
import './App.css';
import Navbar from './component/Navbar/Navbar'
import Welcome from './component/Home/Welcome'
import News from './component/Home/SpaceNews/News'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Addnews from './component/Addnews/Addnews';

const App = () => {

  return (
    <Router>
      <div className="bg-black">
        <Navbar />
        <Routes>
          <Route path='/' element={<Welcome/>}>
          </Route>
          <Route path='/news' element={<News/>}>
          </Route>
          <Route path='/addnews' element={ <Addnews/>}>
           
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
