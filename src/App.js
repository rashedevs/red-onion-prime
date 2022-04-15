import { Route, Routes } from 'react-router-dom';
import './App.css';
import Breakfast from './Pages/Breakfast/Breakfast';
import Dinner from './Pages/Dinner/Dinner';
import Banner from './Pages/Home/Banner/Banner';
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Home/Navbar/Navbar';
import WhyUs from './Pages/Home/WhyUs/WhyUs';
import Lunch from './Pages/Lunch/Lunch';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="breakfast" element={<Breakfast></Breakfast>}></Route>
        <Route path="lunch" element={<Lunch></Lunch>}></Route>
        <Route path="dinner" element={<Dinner></Dinner>}></Route>
      </Routes>
      <button className='text-white my-3 baton' disabled>Checkout Your Food</button>
      <WhyUs></WhyUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
