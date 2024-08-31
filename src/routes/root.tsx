import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import Banner from '../components/Banner/Banner';
import { CURRENT_PUBLISHED_WEEK } from '../settings';

export default function Root() {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const basePath = '/giraffe-squad-fantasy-football';
    const isOnRootPath = pathname === basePath || pathname === `${basePath}/`;

    useEffect(() => {
        if (isOnRootPath) {
            navigate(`${basePath}/weeks/${CURRENT_PUBLISHED_WEEK}`);
        }
    }, []);

    return (
        <>
            <Hero />
            <Banner />
            <Outlet />
        </>
    );
}
