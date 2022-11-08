import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Header from '../Headers/Header';


const Layout = () => {
    
    return (
        <div className='interface w-8/12 mx-[10%] mt-4 pt-4'>
            <Outlet/>
		</div>
    );
};

export default Layout;