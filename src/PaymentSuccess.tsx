import React from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const PaymentSuccess: React.FC = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("pg_token");

  console.log(token);

  const params = {
    cid: "TC0ONETIME",
    partner_order_id: "partner_order_id",
    partner_user_id: "partner_user_id",
    tid: localStorage.getItem("tid"),
    pg_token: token,
  };

  axios({
    url: "/v1/payment/approve",
    method: "POST",
    headers: {
      Authorization: "KakaoAK b4f3600c85827f1c94907b7560ee78fb",
      "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    },
    params,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((res) => {
      console.log(res);
    });

  return (
    <div>
      <h1>결제 완료!</h1>
    </div>
  );
};

export default PaymentSuccess;
