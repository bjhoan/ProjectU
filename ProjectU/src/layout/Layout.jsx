import { Outlet, useNavigation } from 'react-router-dom';

import Menu from '../components/Menu';
import Footer from '../components/Footer';
import React from 'react';

const Layout = () => { 
    const navigation = useNavigation()
    return (
        <div className="Layout">
            <Menu />
            <main className="Main">
                {navigation.state === "loading" && (
                    <div className="Loading">Loading...</div>
                )}
            <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout;