import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Works from '../pages/Works';
import About from '../pages/About';
import Detail from '../pages/Detail';
import DashBoardLayout from './DashBoardLayout';
import Mypage from '../pages/Mypage';
import Test from '../pages/Test';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* {Route} */}
                <Route path='/' element = {<Home/>}/>
                <Route path='/contact' element = {<Contact/>}/>
                <Route path='/works/' element = {<Works/>}/>
                <Route path='/works/:id' element = {<Detail/>}/>
                <Route path='/about' element = {<About/>}/>

                <Route path='dashboard' element = {<DashBoardLayout/>}>
                    <Route path='mypage' element = {<Mypage/>}/>
                    <Route path='test' element = {<Test/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router