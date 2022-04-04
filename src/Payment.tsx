import React, { useEffect } from "react";
import { Button } from "@mui/material";
import axios from "axios";

function Payment() {
  useEffect(() => {
    const naverPaySDK = document.createElement("script");
    naverPaySDK.id = "naverPaySDK";
    naverPaySDK.src = "https://nsp.pay.naver.com/sdk/js/naverpay.min.js";
  }, []);

  // @ts-ignore
  const oPay = window.Naver.Pay.create({
    mode: "development",
    clientId: "u86j4ripEt8LRfPGzQ8",
  });
  const onNaverPayButtonClick = () => {
    oPay
      .open({
        merchantUserKey: "123124",
        merchantPayKey: "1231325",
        productName: "귀여운 옷",
        totalPayAmount: "1000",
        taxScopeAmount: "1000",
        taxExScopeAmount: "0",
        returnUrl: "localhost:3000",
      })
      .then((res: any) => {
        console.log(res);
      });
  };

  const onKakaoPayButtonClick = () => {
    const params = {
      cid: "TC0ONETIME",
      partner_order_id: "partner_order_id",
      partner_user_id: "partner_user_id",
      item_name: "초코파이",
      quantity: 1,
      total_amount: 2200,
      vat_amount: 200,
      tax_free_amount: 0,
      approval_url: "http://localhost:3000/payment/success",
      fail_url: "http://localhost:3000/",
      cancel_url: "http://localhost:3000/",
    };

    axios({
      url: "/v1/payment/ready",
      method: "POST",
      headers: {
        Authorization: "KakaoAK b4f3600c85827f1c94907b7560ee78fb",
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      params,
    })
      .then((res) => {
        console.log(res);
        localStorage.setItem("tid", res.data.tid);
        window.location.href = res.data.next_redirect_pc_url;
      })
      .catch((res) => {
        console.log(res);
      });
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <img
          style={{ width: "300px" }}
          src={
            "https://elliedogwear.com/wp-content/uploads/2017/09/ellie-dog-wear-yellow-dog-raincoat.jpg"
          }
          alt={"img"}
        />
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", marginLeft: "10px" }}
      >
        <Button
          onClick={onNaverPayButtonClick}
          style={{
            margin: "5px",
            width: "200px",
            height: "60px",
          }}
          variant={"contained"}
          color={"success"}
        >
          네이버페이 결제
        </Button>
        <Button
          onClick={onKakaoPayButtonClick}
          style={{
            margin: "5px",
            width: "200px",
            height: "60px",
            backgroundColor: "#fef01b",
            color: "#3A1D1D",
          }}
          variant={"contained"}
        >
          카카오페이 결제
        </Button>
      </div>
    </div>
  );
}

export default Payment;
