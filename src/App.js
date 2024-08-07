
import './App.css';
import LoginBox from './components/LoginBox';
import SignupBox from './components/SignupBox';
import FrontInterface from './pages/FrontFace';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Toastcontainer } from './components/commen/ToastContainer';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import AddImage from './components/AddImage';
import ImageView from './pages/ImageView';
import Profile from './pages/Profile';
import {  LoginAuth, UserAuth } from './authorization/Authorization';



function App() {
  return (
    <>
    <Toastcontainer/>
    <BrowserRouter>
    <Routes>
      <Route element={<LoginAuth/>}>
      <Route path='/' element={<FrontInterface/>}/>
      
      <Route path='/signup' element={<SignupBox/>}/>
      <Route path='/Login' element={<LoginBox/>}/>
      </Route>
      <Route element={<UserAuth/>}>
      <Route path='/home' element={<Home/>}/>
      <Route path='/addimage' element={<AddImage/>} />
      <Route path='/imageview/:id' element={<ImageView/>}/>
      <Route path='/profile' element={<Profile/>}/>
      </Route>
      

    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
