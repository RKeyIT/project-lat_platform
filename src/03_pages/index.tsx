import {lazy} from "react";
import {Route} from "react-router-dom";
import React from 'react';

const ErrorPage = lazy(() => import("./ErrorPage"))

export const Routing = () => {
    return (
        <>
            <Route path='/' element={<ErrorPage />}/>
            {/*<Route path='/' element={<ErrorPage />}/>*/}
        </>
    );
};

export {}