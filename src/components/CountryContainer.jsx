import React from "react";
import NavBar from "./NavBar";
import MyAutocomplete from "./MyAutoComplete";
import FilterByRegion from "./FilterByRegion";
import MyCards from "./MyCards";

const CountryContainer = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="Hero">
        <MyAutocomplete />
        <FilterByRegion />
      </div>
      <div className="countryCards">
        {/* {listOfCountry} */}
        <MyCards />
        <MyCards />
        <MyCards />
        <MyCards />
      </div>
      <br />
      <br />
      <br />
      <div className="countryCards">
        <MyCards />
        <MyCards />
        <MyCards />
        <MyCards />
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default CountryContainer;
