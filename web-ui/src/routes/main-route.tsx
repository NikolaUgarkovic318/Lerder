import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PATH } from '../constants/paths/paths';

import SignIn from '../pages/sign-in/sign-in-page';


export default function MainRoute() {
  const isUserAuthentication = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          isUserAuthentication ? <Navigate to={PATH.HOME} /> : <Navigate to={PATH.LOGIN} />
        }
        />
        <Route path={PATH.LOGIN} element={<SignIn />}></Route>
        <Route path={PATH.REGISTRATION} element={<h1>Registration !!!</h1>}></Route>
        <Route path={PATH.HOME} element={<h1>Dashboard !!!!</h1>}></Route>
      </Routes>

    </BrowserRouter>
  )
}