import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Contact from './Components/Contact';
import Payment from './Components/Payment';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/apply' element={<Form />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/payment' element={<Payment />}></Route>
        <Route path='*' element={<div>Page Not Found</div>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}



export default App;
