import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface ILayout{
    children: React.ReactNode
}

const Layout = (props: ILayout) => {
    return(
        <>
            <Header/>
            <Sidebar/>
            <div className="p-4 md:ml-64 relative">
                <div className="p-4 mt-14">
                    {props.children}
                </div>
            </div>
        </>
    )
}
export default Layout;