import React from "react";
import { FaEye, FaEdit, FaTimes } from "react-icons/fa";
import "./Guests.css";

export default function Guests() {

  const bookings = [
    {
      id: "BK-1001",
      name: "Rajesh Kumar",
      email: "rajesh.k@example.com",
      cruise: "Arabian Sea Odyssey",
      cabin: "Chairman's Suite",
      date: "Oct 24, 2023",
      amount: "₹84,500",
      status: "Confirmed"
    },
    {
      id: "BK-1002",
      name: "Ananya Sharma",
      email: "ananya.s@example.com",
      cruise: "Kerala Coastal Trail",
      cabin: "Balcony Cabin",
      date: "Nov 02, 2023",
      amount: "₹42,200",
      status: "Pending"
    },
    {
      id: "BK-1003",
      name: "Vikram Singh",
      email: "v.singh@example.com",
      cruise: "Goa Weekend Getaway",
      cabin: "Ocean View Cabin",
      date: "Oct 28, 2023",
      amount: "₹28,800",
      status: "Cancelled"
    }
  ];

  return (
    <div className="booking-page">

      <div className="page-header">
        <h2>Booking Management</h2>
        <button className="btn btn-primary">+ New Booking</button>
      </div>

      <div className="table-card">

        <table className="table">

          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Guest</th>
              <th>Cruise</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b, i) => (
              <tr key={i}>

                <td>{b.id}</td>

                <td>
                  <strong>{b.name}</strong>
                  <p>{b.email}</p>
                </td>

                <td>
                  {b.cruise}
                  <p>{b.cabin}</p>
                </td>

                <td>{b.date}</td>

                <td>{b.amount}</td>

                <td>
                  <span className={`status ${b.status.toLowerCase()}`}>
                    {b.status}
                  </span>
                </td>

                <td className="actions">
                  <FaEye />
                  <FaEdit />
                  <FaTimes />
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

      <div className="stats">

        <div className="stat-card">
          <h4>Confirmed Today</h4>
          <h2>42</h2>
        </div>

        <div className="stat-card">
          <h4>Pending Actions</h4>
          <h2>18</h2>
        </div>

        <div className="stat-card">
          <h4>Total Revenue (Oct)</h4>
          <h2>₹12.4L</h2>
        </div>

      </div>

    </div>
  );
}