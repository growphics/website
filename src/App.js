import './App.css';
import {  Routes,Route } from 'react-router-dom';
import Home from './browser/home';
import About from './browser/about';
function App() {
  return (
    <>
<Routes>

<Route exact path='/' element={<Home/>}/>
<Route exact path='/about' element={<About/>}/>


</Routes>

    </>
  );
}

export default App;
