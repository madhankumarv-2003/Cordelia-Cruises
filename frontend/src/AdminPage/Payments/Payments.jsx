import React, { useState } from "react";
import "./Payments.css";

import {
  FaSearch,
  FaShip,
  FaEye,
  FaEdit,
  FaTrash
} from "react-icons/fa";

export default function Payments() {

const [cruises] = useState([
{
name: "Arabian Sea Odyssey",
ship: "Cordelia Empress",
destination: "Mumbai - Kochi - Lakshadweep",
duration: "5 Nights / 6 Days",
status: "Active"
},
{
name: "Gems of Sri Lanka",
ship: "Cordelia Star",
destination: "Chennai - Hambantota - Trincomalee",
duration: "4 Nights / 5 Days",
status: "Active"
},
{
name: "Lakshadweep Weekend",
ship: "Cordelia Empress",
destination: "Kochi - Lakshadweep - Kochi",
duration: "2 Nights / 3 Days",
status: "Inactive"
},
{
name: "Vizag Summer Voyage",
ship: "Cordelia Empress",
destination: "Chennai - Vizag - Chennai",
duration: "3 Nights / 4 Days",
status: "Active"
}
]);

return (

<div className="cruise-page-container">

{/* HEADER */}

<div className="cruise-page-header">

<div>
<h2>Cruises</h2>
<p>Manage and schedule cruise itineraries and ship assignments.</p>
</div>

<button className="cruise-add-btn">
+ Add New Cruise
</button>

</div>

{/* FILTER SECTION */}

<div className="cruise-filter-box">

<div className="cruise-search-box">

<FaSearch />

<input
type="text"
placeholder="Search by name, ship or destination..."
/>

</div>

<select>
<option>All Regions</option>
<option>India</option>
<option>Sri Lanka</option>
</select>

<select>
<option>All Status</option>
<option>Active</option>
<option>Inactive</option>
</select>

</div>

{/* TABLE */}

<div className="cruise-table-card">

<table className="cruise-table">

<thead>

<tr>
<th>CRUISE NAME</th>
<th>SHIP NAME</th>
<th>DESTINATION</th>
<th>DURATION</th>
<th>STATUS</th>
<th>ACTIONS</th>
</tr>

</thead>

<tbody>

{cruises.map((c, index) => (

<tr key={index}>

<td className="cruise-name-cell">

<FaShip className="cruise-ship-icon" />

{c.name}

</td>

<td>{c.ship}</td>

<td>{c.destination}</td>

<td>{c.duration}</td>

<td>

<span
className={
c.status === "Active"
? "cruise-status cruise-status-active"
: "cruise-status cruise-status-inactive"
}
>

{c.status}

</span>

</td>

<td className="cruise-action-icons">

<FaEye />

<FaEdit />

<FaTrash />

</td>

</tr>

))}

</tbody>

</table>

{/* PAGINATION */}

<div className="cruise-pagination">

<span>Showing 1 to 4 of 24 results</span>

<div>

<button>Previous</button>

<button className="cruise-page-active">1</button>

<button>2</button>

<button>Next</button>

</div>

</div>

</div>

{/* ADD CRUISE FORM */}

<div className="cruise-form-card">

<h3>Add New Cruise Itinerary</h3>

<div className="cruise-form-grid">

<input placeholder="Cruise Name" />

<select>
<option>Select Ship</option>
<option>Cordelia Empress</option>
<option>Cordelia Star</option>
</select>

<select>
<option>Domestic</option>
<option>International</option>
</select>

<input placeholder="Departure Port" />

<input placeholder="Destination(s)" />

<input placeholder="Duration (Nights)" />

</div>

<button className="cruise-create-btn">
Create Cruise
</button>

</div>

</div>

);
}