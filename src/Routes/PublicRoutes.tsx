import React, {Suspense, useEffect} from 'react';
import { Router, Routes, Route, Navigate } from "react-router-dom"
import Loader from '../Components/Loading/Loader';
import Layout from '../Components/Layout/Layout';
const ContactList =  React.lazy(()=>import ('../Pages/Contact/ContactList'));
const ContactForm =  React.lazy(()=>import ('../Pages/Contact/ContactForm'));
const ChartAndMap =  React.lazy(()=>import ('../Pages/MapAndGraphs'));

const PublicRoutes = () => {
    return(
        <Suspense fallback={<Loader spinner={true}/>}>
            <Layout>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/contact" />} />
                    <Route path="contact">
                        <Route path="" element={<ContactList/>}/>
                        <Route path="form" element={<ContactForm/>}/>
                        <Route path="form/:id" element={<ContactForm/>}/>
                    </Route>
                    <Route path="/chart-map" element={<ChartAndMap/>}/>
                </Routes>
            </Layout>
        </Suspense>
    )
}
export default PublicRoutes;