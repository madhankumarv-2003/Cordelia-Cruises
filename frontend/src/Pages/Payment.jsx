import React from "react";
import axios from "axios";

const Payment = () => {

  const handlePayment = async () => {
    const { data } = await axios.post("http://localhost:5000/create-order");

    const options = {
      key: "rzp_test_SCMlPrCnZCm6HE",
      amount: data.amount,
      currency: data.currency,
      order_id: data.id,
      name: "My Company",
      description: "Test Payment",
      handler: function (response) {
        alert("Payment Successful!");
        console.log(response);
      },
      prefill: {
        name: "Madhan Kumar",
        email: "test@gmail.com",
        contact: "9999999999"
      },
      theme: {
        color: "#3399cc"
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return <button onClick={handlePayment}>Pay Now</button>;
};

export default Payment;
