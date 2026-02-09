import express from "express";
import Razorpay from "razorpay";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
  key_id: "rzp_test_SCMlPrCnZCm6HE",
  key_secret: "YOUR_SECRET_HERE",
});

app.post("/create-order", async (req, res) => {
  const options = {
    amount: 50000, // ₹500 in paise
    currency: "INR",
    receipt: "receipt_order_1",
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Order creation failed" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
