import { Outlet } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import Nav from '../components/Nav/Nav';

export default function Root() {
    return (
        <>
            <Hero />
            <Nav />
            <Outlet />
        </>
    );
}
