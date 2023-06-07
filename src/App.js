import React from "react";
import { Routes, Route } from 'react-router-dom';
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from 'react-redux';


import { Header } from "./components";
import {  Category_1, Category_2, Category_3, Category_4, 
         Registration,  Login, Log, Category, Catalog, FullInstrument, 
         Instruments, Vxod, Spisok, Zakaz, Tovar, Zakaz1, Status, 
         NovTovar, Error, FullInstrument_category } from "./pages";
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth';
import { fetchAuthMeManager, selectIsAuthManager } from './redux/slices/authManager';


function App() {
  const dispatch = useDispatch();
  const dispatchManager = useDispatch();

   React.useEffect(()=>{
     dispatch(fetchAuthMe());
     dispatchManager(fetchAuthMeManager());
   }, [])

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/category" element={<Category />} />

          <Route path="/category/Ударные инструменты" element={<Category_1 />} />
          <Route path="/category/Струнные инструменты" element={<Category_2 />} />
          <Route path="/category/Духовые инструменты" element={<Category_3 />} />
          <Route path="/category/Клавишные инструменты" element={<Category_4 />} />


          <Route path="/log" element={<Log />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path='/instrument/:id' element={<FullInstrument />} />
          
          <Route path="/vxod" element={<Vxod />} />
          <Route path="/spisok" element={<Spisok />} />
          <Route path="/zakaz" element={<Zakaz />} />
          <Route path="/tovar" element={<Tovar />} />
          <Route path="/zakaz1" element={<Zakaz1 />} />
          <Route path="/instrument/undefined/strun" element={<Instruments />} />
          <Route path="/novtovar" element={<NovTovar />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;