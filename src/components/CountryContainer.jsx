import React from "react";
import NavBar from "./NavBar";
import MyAutocomplete from "./MyAutoComplete";
import FilterByRegion from "./FilterByRegion";
import MyCards from "./MyCards";
import MyPagination from "./MyPagination";

const CountryContainer = ({ responseData }) => {
  console.log(responseData);
  return (
    <div>
      <NavBar></NavBar>
      <div className="Hero">
        <MyAutocomplete />
        <FilterByRegion />
      </div>
      <div className="countryCards">
        {responseData.map((items) => (
          <MyCards
            image={items.flags.png}
            country={items.name.common}
            population={Number(items.population).toLocaleString()}
            region={items.region}
            // capital={items && items.capital.map((item) => <span>{item}</span>)}
          />
        ))}
      </div>
      <MyPagination />
    </div>
  );
};

export default CountryContainer;
