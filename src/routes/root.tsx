import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import Nav from '../components/Nav/Nav';

const CURRENT_WEEK = 1;

export default function Root() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate(`/giraffe-squad-fantasy-football/weeks/${CURRENT_WEEK}`);
    }, []);

    return (
        <>
            <Hero />
            <Nav />
            <Outlet />
        </>
    );
}
