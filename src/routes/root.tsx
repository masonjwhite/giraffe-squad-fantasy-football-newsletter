import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import Nav from '../components/Nav/Nav';
import { CURRENT_WEEK } from '../settings';

export default function Root() {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const basePath = '/giraffe-squad-fantasy-football';
    const isOnRootPath = pathname === basePath || pathname === `${basePath}/`;

    useEffect(() => {
        if (isOnRootPath) {
            navigate(`${basePath}/weeks/${CURRENT_WEEK}`);
        }
    }, []);

    return (
        <>
            <Hero />
            <Nav />
            <Outlet />
        </>
    );
}
