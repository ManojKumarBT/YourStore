import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import WomenEthnic from './pages/WomenEthnic';
import WomenWestern from './pages/WomenWestern';
import Men from './pages/Men';
import Kids from './pages/Kids';
import HomeandKitchen from './pages/HomeandKitchen';
import BeautyandHealth from './pages/BeautyandHealth';
import JewelleryandAccessories from './pages/JewelleryandAccessories';
import BagsandFootwear from './pages/BagsandFootwear';
import Electronics from './pages/Electronics';


import Login from './components/Login';

import Home from './pages/Home';

import  Details  from './pages/Details';
import CartDetails from './pages/cartedItems';










function App() {
  



  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/'>
      <Route path='/' element={<Home/>}/>
      <Route path= '/WomenEthnic' element={<WomenEthnic/>}/>
      <Route path= '/WomenWestern' element={<WomenWestern/>}/>
      <Route path= '/Men' element={<Men/>}/>
      <Route path= '/Kids' element={<Kids/>}/>
      <Route path= '/HomeandKitchen' element={<HomeandKitchen/>}/>
      <Route path= '/BeautyandHealth' element={<BeautyandHealth/>}/>
      <Route path= '/JewelleryandAccessories' element={<JewelleryandAccessories/>}/>
      <Route path= '/BagsandFootwear' element={<BagsandFootwear/>}/>
      <Route path= '/Electronics' element={<Electronics/>}/>
      <Route path= '/Login' element={<Login/>}/>
      
      <Route path="/details/" element={<Details/>} />
      <Route path="/cart" element={<CartDetails/>} />
      
      
      
      </Route>
    </Routes>
    </BrowserRouter>

   
    



    
   

 
    



    
    {/* <Footer1/> */}










    
  
    </>
  
  );
}

export default App;
