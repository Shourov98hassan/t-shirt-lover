import './App.css';
import { useState } from 'react';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Review from './components/Review/Review';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import DATAS from './api/reviews';

function App() {
  const [datas, setDatas] = useState(DATAS)

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home datas={datas}></Home>}></Route>
        <Route path='/reviews' element={<Review datas={datas}></Review>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
    </div>
  );
}

export default App;
