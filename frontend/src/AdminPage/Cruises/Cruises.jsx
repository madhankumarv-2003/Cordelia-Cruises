import React, { useState } from "react";
import "./Cruise.css";

export default function Cruises() {

  const [cruises, setCruises] = useState([
    {
      id: 1,
      name: "Arabian Sea Odyssey",
      ship: "Cordelia Empress",
      destination: "Mumbai - Kochi - Lakshadweep",
      duration: "5 Nights / 6 Days",
      price: "₹45,000",
      capacity: 2000,
      departure: "2026-04-12",
      status: "Active"
    },
    {
      id: 2,
      name: "Gems of Sri Lanka",
      ship: "Cordelia Star",
      destination: "Chennai - Hambantota - Trincomalee",
      duration: "4 Nights / 5 Days",
      price: "₹38,000",
      capacity: 1800,
      departure: "2026-05-02",
      status: "Active"
    }
  ]);

  const [form, setForm] = useState({
    name: "",
    ship: "",
    destination: "",
    duration: "",
    price: "",
    capacity: "",
    departure: ""
  });

  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {

      const updated = cruises.map((c) =>
        c.id === editId ? { ...form, id: editId, status: c.status } : c
      );

      setCruises(updated);
      setEditId(null);

    } else {

      const newCruise = {
        id: Date.now(),
        ...form,
        status: "Active"
      };

      setCruises([...cruises, newCruise]);
    }

    setForm({
      name: "",
      ship: "",
      destination: "",
      duration: "",
      price: "",
      capacity: "",
      departure: ""
    });
  };

  const handleEdit = (cruise) => {
    setForm(cruise);
    setEditId(cruise.id);
  };

  const handleDelete = (id) => {
    const filtered = cruises.filter((c) => c.id !== id);
    setCruises(filtered);
  };

  const toggleStatus = (id) => {
    const updated = cruises.map((c) =>
      c.id === id
        ? { ...c, status: c.status === "Active" ? "Inactive" : "Active" }
        : c
    );

    setCruises(updated);
  };

  return (

    <div className="cruise-page">

      <div className="container-fluid">

        <div className="page-header">

          <h2>Cruise Management</h2>

          <span className="total-badge">
            Total Cruises: {cruises.length}
          </span>

        </div>

        {/* TABLE */}

        <div className="admin-card">

          <table className="table cruise-table">

            <thead>

              <tr>
                <th>Cruise</th>
                <th>Ship</th>
                <th>Destination</th>
                <th>Duration</th>
                <th>Price</th>
                <th>Capacity</th>
                <th>Departure</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>

            </thead>

            <tbody>

              {cruises.map((cruise) => (

                <tr key={cruise.id}>

                  <td>{cruise.name}</td>
                  <td>{cruise.ship}</td>
                  <td>{cruise.destination}</td>
                  <td>{cruise.duration}</td>
                  <td>{cruise.price}</td>
                  <td>{cruise.capacity}</td>
                  <td>{cruise.departure}</td>

                  <td>

                    <span
                      className={
                        cruise.status === "Active"
                          ? "status-active"
                          : "status-inactive"
                      }
                    >
                      {cruise.status}
                    </span>

                  </td>

                  <td className="action-buttons">

                    <button
                      className="btn-edit"
                      onClick={() => handleEdit(cruise)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(cruise.id)}
                    >
                      Delete
                    </button>

                    <button
                      className="btn-toggle"
                      onClick={() => toggleStatus(cruise.id)}
                    >
                      Toggle
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* FORM */}

        <div className="admin-card form-card">

          <h5>{editId ? "Update Cruise" : "Add New Cruise"}</h5>

          <form onSubmit={handleSubmit}>

            <div className="form-grid">

              <input
                type="text"
                placeholder="Cruise Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                placeholder="Ship Name"
                name="ship"
                value={form.ship}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                placeholder="Destination"
                name="destination"
                value={form.destination}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                placeholder="Duration"
                name="duration"
                value={form.duration}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                placeholder="Price"
                name="price"
                value={form.price}
                onChange={handleChange}
                required
              />

              <input
                type="number"
                placeholder="Capacity"
                name="capacity"
                value={form.capacity}
                onChange={handleChange}
                required
              />

              <input
                type="date"
                name="departure"
                value={form.departure}
                onChange={handleChange}
                required
              />

              <button className="submit-btn">
                {editId ? "Update" : "Add Cruise"}
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>

  );
}