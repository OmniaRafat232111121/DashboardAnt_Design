import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Dashboard from '../../Pages/Dashboard';
import Inventory from '../../Pages/Inventory';
import Customers from '../../Pages/Customers'
import Orders from '../../Pages/Orders';
import Chart  from '../../Pages/Chart';
const AppRoutes = () => {
  return (
    <Routes className="AppRoutes">
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/orders" element={<Orders/>}></Route>
        <Route path="/customers" element={<Customers/>}></Route>
        <Route path="/details" element={<Chart/>}></Route>

        <Route path="/inventory" element={<Inventory/>}></Route>
    </Routes>
  )
}

export default AppRoutes
