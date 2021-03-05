import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { DateTime } from "luxon";
import "../Search.css";

function Search(props) {
  const [flyFrom, setFlyFrom] = useState("VLC");
  const [flyTo, setFlyTo] = useState("PRG");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [directFlight, setDirectFlight] = useState(false);

  return (
    <form className="search-form">
      <label htmlFor="flyFrom">From: </label>
      <select
        onChange={(e) => {
          setFlyFrom(e.target.value);
        }}
        name="flyFrom"
        value={flyFrom}
      >
        <option value="VLC">Valencia</option>
        <option value="BCN">Barcelona</option>
        <option value="MAD">Madrid</option>
        <option value="MIL">Milano</option>
        <option value="ATH">Athens</option>
      </select>

      <label htmlFor="flyTo">To: </label>
      <select
        onChange={(e) => {
          setFlyTo(e.target.value);
        }}
        name="flyTo"
        value={flyTo}
      >
        <option value="PRG">Prague</option>
        <option value="BER">Berlin</option>
        <option value="WAW">Warsaw</option>
        <option value="PED">Pardubice</option>
      </select>
      {/*  <input
        onChange={(e) => {
          setFlyFrom(e.target.value);
        }}
        type="text"
        name="from"
      />
      <input
        onChange={(e) => {
          setFlyTo(e.target.value);
          console.log(flyTo);
        }}
        type="text"
        name="to"
      /> */}
      <label htmlFor="dateFrom">Date From: </label>
      <input
        onChange={(e) => {
          setDateFrom(DateTime.fromISO(e.target.value).toFormat("dd/MM/yyyy"));
        }}
        type="date"
        name="dateFrom"
      />
      <label htmlFor="dateTo">Date To: </label>
      <input
        onChange={(e) => {
          setDateTo(DateTime.fromISO(e.target.value).toFormat("dd/MM/yyyy"));
        }}
        type="date"
        name="dateTo"
      />
      <label htmlFor="directFlight">Only Direct Flights</label>
      <input
        type="checkbox"
        name="directFlight"
        onChange={(e) => {
          setDirectFlight(e.target.checked);
        }}
      />
      <input
        className="search-button"
        type="submit"
        value="Find"
        onClick={(e) => {
          e.preventDefault();
          props.setOffset(0);
          props.fetchData({
            flyFrom: flyFrom,
            flyTo: flyTo,
            dateFrom: dateFrom,
            dateTo: dateTo,
            directFlight: directFlight,
          });
        }}
      />
    </form>
  );
}

export default Search;
