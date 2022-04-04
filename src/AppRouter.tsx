import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Payment from "./Payment";
import PaymentSuccess from "./PaymentSuccess";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment/success" element={<PaymentSuccess />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
