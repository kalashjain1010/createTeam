import { LOGIN } from 'lib/routes';
import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from 'hooks/auth';
import Navbar from 'components/navbar';

function Layout() {
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const {user, isLoading} = useAuth();

    useEffect(() => {
        if(!isLoading && pathname.startsWith("/protected") && !user){
            navigate(LOGIN);
        }
    }, [pathname, user, isLoading]);

    if(isLoading) return "loading..."
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Layout
