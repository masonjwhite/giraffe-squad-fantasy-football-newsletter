import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import { CURRENT_PUBLISHED_WEEK } from '../settings';

export default function Root() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const basePath = '/';
  const isOnRootPath = pathname === basePath;

  useEffect(() => {
    if (isOnRootPath) {
      navigate(`/weeks/${CURRENT_PUBLISHED_WEEK}`);
    }
  }, []);

  return (
    <>
      <Hero />
      <Banner />
      <Outlet />
      <Footer />
    </>
  );
}
