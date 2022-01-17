import { BrowserRouter, Routes as Switch, Route, Navigate } from 'react-router-dom';

import { Home, Product, Register } from '../pages';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Switch>
    </BrowserRouter>
  );
};
