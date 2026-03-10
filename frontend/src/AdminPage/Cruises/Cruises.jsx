import React, { useState } from "react";
import "./Cruises.css";
import { FaSearch, FaShip, FaEye, FaEdit, FaTrash } from "react-icons/fa";

export default function Cruises() {

const [cruises, setCruises] = useState([
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
}
]);

const [search, setSearch] = useState("");

const [form, setForm] = useState({
name: "",
ship: "",
destination: "",
duration: "",
status: "Active"
});

const [editIndex, setEditIndex] = useState(null);


/* HANDLE INPUT */

const handleChange = (e) => {

setForm({
...form,
[e.target.name]: e.target.value
});

};


/* ADD / UPDATE */

const saveCruise = () => {

if(!form.name || !form.ship){
alert("Fill required fields");
return;
}

if(editIndex !== null){

const updated = [...cruises];
updated[editIndex] = form;
setCruises(updated);
setEditIndex(null);

}else{

setCruises([...cruises, form]);

}

setForm({
name:"",
ship:"",
destination:"",
duration:"",
status:"Active"
});

};


/* DELETE */

const deleteCruise = (index) => {

if(window.confirm("Delete this cruise?")){

const updated = cruises.filter((_,i)=> i !== index);
setCruises(updated);

}

};


/* EDIT */

const editCruise = (index) => {

setForm(cruises[index]);
setEditIndex(index);

};


/* SEARCH FILTER */

const filteredCruises = cruises.filter((c)=>

c.name.toLowerCase().includes(search.toLowerCase()) ||
c.ship.toLowerCase().includes(search.toLowerCase()) ||
c.destination.toLowerCase().includes(search.toLowerCase())

);


return (

<div className="cm-page-container">


{/* HEADER */}

<div className="cm-page-header">

<div>

<h2>Cruise Management</h2>

<p>Manage and schedule cruise itineraries and ship assignments.</p>

</div>

</div>


{/* SEARCH */}

<div className="cm-filter-box">

<div className="cm-search-box">

<FaSearch />

<input
type="text"
placeholder="Search by name, ship or destination..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

</div>

</div>


{/* TABLE */}

<div className="cm-table-card">

<table className="cm-table">

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

{filteredCruises.map((c,index)=> (

<tr key={index}>

<td className="cm-name-cell">

<FaShip className="cm-ship-icon"/>

{c.name}

</td>

<td>{c.ship}</td>

<td>{c.destination}</td>

<td>{c.duration}</td>

<td>

<span className={
c.status === "Active"
? "cm-status cm-status-active"
: "cm-status cm-status-inactive"
}>

{c.status}

</span>

</td>

<td className="cm-action-icons">

<FaEye />

<FaEdit
onClick={()=>editCruise(index)}
/>

<FaTrash
onClick={()=>deleteCruise(index)}
/>

</td>

</tr>

))}

</tbody>

</table>

</div>


{/* FORM */}

<div className="cm-form-card">

<h3>

{editIndex !== null ? "Edit Cruise" : "Add New Cruise"}

</h3>

<div className="cm-form-grid">

<input
name="name"
placeholder="Cruise Name"
value={form.name}
onChange={handleChange}
/>

<select
name="ship"
value={form.ship}
onChange={handleChange}
>

<option value="">Select Ship</option>

<option>Cordelia Empress</option>

<option>Cordelia Star</option>

</select>

<input
name="destination"
placeholder="Destination"
value={form.destination}
onChange={handleChange}
/>

<input
name="duration"
placeholder="Duration"
value={form.duration}
onChange={handleChange}
/>

<select
name="status"
value={form.status}
onChange={handleChange}
>

<option>Active</option>

<option>Inactive</option>

</select>

</div>

<button
className="cm-create-btn"
onClick={saveCruise}
>

{editIndex !== null ? "Update Cruise" : "Create Cruise"}

</button>

</div>

</div>

);
}