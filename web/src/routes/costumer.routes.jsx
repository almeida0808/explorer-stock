import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { Suppliers } from '../pages/Suppliers';
import { Product } from '../pages/Product';

export function CostumerRoutes() {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/suppliers" element={<Suppliers />} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}