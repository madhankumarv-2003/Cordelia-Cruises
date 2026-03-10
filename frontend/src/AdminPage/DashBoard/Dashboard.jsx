import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import {
  FaShip,
  FaUsers,
  FaMoneyBill,
  FaChartBar
} from "react-icons/fa";

import "./Dashboard.css";

const dashboarddata = [
  { name: "Jan", value: 200 },
  { name: "Feb", value: 450 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 350 },
  { name: "May", value: 700 },
  { name: "Jun", value: 600 }
];

export default function Dashboard() {
  return (
    <div className="admin-container">

      <div className="main-content">
        <div className="stats">

          <div className="card">
            <FaChartBar className="icon blue"/>
            <h5>Total Bookings</h5>
            <h3>128</h3>
          </div>

          <div className="card">
            <FaUsers className="icon purple"/>
            <h5>Total Guests</h5>
            <h3>4</h3>
          </div>

          <div className="card">
            <FaShip className="icon orange"/>
            <h5>Active Cruises</h5>
            <h3>03</h3>
          </div>

          <div className="card">
            <FaMoneyBill className="icon green"/>
            <h5>Total Revenue</h5>
            <h3>$0.1M</h3>
          </div>

        </div>


        {/* Charts */}

        <div className="charts">

          {/* Line Chart */}

          <div className="chart-box">
            <h4>Monthly Booking Trends</h4>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dashboarddata}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#4f46e5"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>

          </div>


          {/* Bar Chart */}

          <div className="chart-box">
            <h4>Monthly Revenue</h4>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dashboarddata}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Bar
                  dataKey="value"
                  fill="#ec4899"
                  barSize={40}
                  radius={[6,6,0,0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Activity Table */}

        <div className="activity">

          <h4>Recent Admin Activity</h4>

          <table className="table">

            <thead>
              <tr>
                <th>Activity</th>
                <th>Performed By</th>
                <th>Time</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>New package 'Summer Odyssey' published</td>
                <td>Sarah Miller</td>
                <td>2 mins ago</td>
              </tr>

              <tr>
                <td>Cabin prices updated</td>
                <td>James Wilson</td>
                <td>45 mins ago</td>
              </tr>

              <tr>
                <td>Bulk booking cancelled</td>
                <td>Automated Bot</td>
                <td>2 hours ago</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}