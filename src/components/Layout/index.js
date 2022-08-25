import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from "../NavBar";


const Layout = () => {
    return (
    <div className='App'>
        
        <NavBar />
            <Outlet/> 
    </div>
    )
}

export default Layout