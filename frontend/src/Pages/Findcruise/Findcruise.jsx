import React, { useState } from "react";
import FilterBox from "./FilterBox/FilterBox";
import CruiseCard from "./CruiseCard/CruiseCard";

const Findcruise = () => {

  const [filters, setFilters] = useState({
    destination: "",
    month: "",
    year: 2026,
    nights: null,
    cruise: ""
  });

  return (
    <>
      <FilterBox filters={filters} setFilters={setFilters} />
      <CruiseCard filters={filters} />
    </>
  );
};

export default Findcruise;
