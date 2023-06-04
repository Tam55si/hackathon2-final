import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserListing from './UserListing';
import UserCreate from './UserCreate';
// import UserDetail from './UserDetail';
import UserEdit from './UserEdit';
import Resume1 from './Resume1';
import Resume2 from './Resume2';
import Resume3 from './Resume3';
import Home from './componets/pages/Home';
import About from './componets/pages/About';
import Contact from './componets/pages/Contact';
import Pagenotfound from './componets/pages/Pagenotfound';
import Resume4 from './Resume4';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Pagenotfound />} />
          <Route path='/list' element={<UserListing />}></Route>
          <Route path='/list/user/create' element={<UserCreate />}></Route>

          {/* <Route path='/user/detail/:userid' element={<UserDetail />}></Route> */}
          <Route path='/list/user/detail1/:userid' element={<Resume1 />}></Route>
          <Route path='/list/user/detail2/:userid' element={<Resume2 />}></Route>
          <Route path='/list/user/detail3/:userid' element={<Resume3 />}></Route>
          <Route path='/list/user/detail4/:userid' element={<Resume4 />}></Route>
          <Route path='/list/user/edit/:userid' element={<UserEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;