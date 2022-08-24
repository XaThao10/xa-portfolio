import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';


const Layout = () => {
    return (
    <div className='App'>
        <Sidebar />
            <Outlet/> 
    </div>
    )
}

export default Layout