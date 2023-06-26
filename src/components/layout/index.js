import { LOGIN } from 'lib/routes';
import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from 'hooks/auth';

function Layout() {
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const {user, isLoading} = useAuth();

    useEffect(() => {
        if(pathname.startsWith("/protected") && !user){
            navigate(LOGIN);
        }
    }, [pathname, user]);

    if(isLoading) return "loading..."
  return (
    <>
    this is a child of:<Outlet/>
    </>
  )
}

export default Layout
