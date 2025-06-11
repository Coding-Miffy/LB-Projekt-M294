import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

import Home from './pages/Home';
import LiveEvents from './pages/LiveEvents';
import Archive from './pages/Archive';
import CustomEvents from './pages/CustomEvents';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/layout';

function App() {


  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/live-events' element={<LiveEvents />} />
        <Route path='/archive' element={<Archive />} />
        <Route path='/custom-events' element={<CustomEvents />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>

  )
}

export default App;
